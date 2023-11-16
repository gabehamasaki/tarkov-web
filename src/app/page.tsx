import { gql } from "@apollo/client"
import createApolloClient from "./api/apollo"
import Image from "next/image"

type Item = {
  id: string, 
  name: string, 
  shortName: string,
  iconLink: string
  description: string
}

type Data = {
  questItems: Item[]
}


export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query<Data>({
    query: gql`
      {
        questItems {
          id
          name
          shortName
          iconLink
          description
        }
      }
    `
  });

  return (
    <main className="flex miDataTypen-h-screen flex-col items-center justify-between p-24">
      <ul className="flex flex-col gap-4">
        {data.questItems.map((item) => (
          <li key={item.id}>
            <div className="flex items-center gap-4">
              <Image src={item.iconLink} width={64} height={64} alt={item.name} />
              <div className="flex flex-col">
                <h1>{item.name}</h1>
                <p>{item.shortName}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
