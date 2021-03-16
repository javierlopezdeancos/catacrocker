import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data: birds, error } = useSwr('/api/birds', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!birds) return <div>Loading...</div>

  return (
    <div>
      <header>
        <h1>Catacrocker</h1>
        <h2>Aplicación de visualización de impactos de aves en aeropuertos</h2>
      </header>
      <ul>
        {birds.map((bird) => (
          <li key={bird.id}>
            <Link href="/user/[id]" as={`/bird/${bird.id}`}>
              <a>{`User ${bird.id}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
