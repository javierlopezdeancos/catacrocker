import fetcher from "../utils/fetcher"
import useSwr from "swr"
import { Collection } from "../components/colletion"

export default function Index() {
  const { data: birds, error: birdsError } = useSwr("/api/birds", fetcher)

  const { data: flights, error: flightsErrors } = useSwr(
    "/api/flights",
    fetcher
  )

  const { data: airports, error: airportsErrors } = useSwr(
    "/api/airports",
    fetcher
  )

  if (birdsError || flightsErrors || airportsErrors) {
    return <div>Failed to load users</div>
  }

  if (!birds || !flights || !airports) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <header>
        <h1>Catacrocker</h1>
        <h2>Aplicación de visualización de impactos de aves en aeropuertos</h2>
      </header>
      <main>
        <Collection
          name="Birds"
          label={"species"}
          item={"bird"}
          collection={birds}
        />
        <Collection
          name="Flights"
          label={"airplane"}
          item={"flight"}
          collection={flights}
        />
        <Collection
          name="Airports"
          label={"name"}
          item={"airport"}
          collection={airports}
        />
      </main>
    </div>
  )
}
