import { Airport } from '../types/airport'
import { Bird } from '../types/bird'
import { Flight } from '../types/flight'
import Link from 'next/link'
import fetcher from '../utils/fetcher'
import useSwr from 'swr'

export default function Index() {
  const { data: birds, error: birdsError } = useSwr('/api/birds', fetcher)
  const { data: flights, error: flightsErrors } = useSwr('/api/flights', fetcher)
  const { data: airports, error: airportsErrors } = useSwr('/api/airports', fetcher)

  if (birdsError || flightsErrors || airportsErrors ) return <div>Failed to load users</div>
  if (!birds || !flights || !airports ) return <div>Loading...</div>

  return (
    <div>
      <header>
        <h1>Catacrocker</h1>
        <h2>Aplicación de visualización de impactos de aves en aeropuertos</h2>
      </header>
      <main>
        <article>
          <header>
            <h3>🦅 Pájaros</h3>
          </header>
          <ul>
            {birds.map((bird: Bird) => (
              <li key={bird._id}>
                <Link href="/bird/[id]" as={`/bird/${bird._id}`}>
                  <a>{bird?.species}</a>
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <header>
            <h3>✈️ Vuelos</h3>
          </header>
          <ul>
            {flights.map((flight: Flight) => (
              <li key={flight.id}>
                <span>{ flight?.registration}</span>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <header>
            <h3>🏙️ Aeropuertos</h3>
          </header>
          <section>
            <ul>
            {airports.map((airport: Airport) => (
              <li key={airport.id}>
                <span>{ airport?.name}</span>
              </li>
            ))}
          </ul>
          </section>
        </article>
      </main>
    </div>
  )
}
