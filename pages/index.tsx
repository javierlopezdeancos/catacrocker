import { Divider } from "@mantine/core"
import { AppLayout } from "../layouts/appLayout/AppLayout"
import { HeaderComponent } from "../components/headerComponent/HeaderComponet"
import { MainLayout } from "../layouts/mainLayout/MainLayout"
import { OverviewComponent } from "../components/overviewComponent/OverviewComponent"
import { ImpactsTableComponent } from "../components/impactsTableComponent/ImpactsTableComponent"
import { getXataClient, Impacts } from "../codegen/data"

const client = getXataClient()

const getImpacts = async (): Promise<Impacts[]> => {
  const impacts = await client.db.impacts
    .select([
      "id",
      "bird.species",
      "bird_weight",
      "flight.number",
      "flight.airplane",
      "airport.name",
      "airport.city",
    ])
    .getAll()
  return impacts
}

const getPigeonsImpactsByMonths = async (): Promise<number[]> => {
  const pigeonsImpactsByMonths: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const pigeonsImpacts = await client.db.impacts
    .select(["bird.species", "date"])
    .filter({ "bird.species": { $is: "Paloma" } })
    .getAll()

  const pigeonsImpactsGroupByMonthNumber = pigeonsImpacts
    .map((i) => {
      const d = new Date(i.date)
      const m = d.getMonth()
      return m
    })
    .reduce((count, current) => {
      count[current] = (count[current] || 0) + 1
      return count
    }, {})

  for (const key in pigeonsImpactsGroupByMonthNumber) {
    if (
      Object.prototype.hasOwnProperty.call(
        pigeonsImpactsGroupByMonthNumber,
        key
      )
    ) {
      const times = pigeonsImpactsGroupByMonthNumber[key]
      pigeonsImpactsByMonths[key] = times
    }
  }

  pigeonsImpactsByMonths.map((l) => {
    if (l) {
      return l
    }

    return 0
  })

  return pigeonsImpactsByMonths
}

const getEagleImpactsByMonths = async (): Promise<number[]> => {
  const eaglesImpactsByMonths: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const eaglesImpacts = await client.db.impacts
    .select(["bird.species", "date"])
    .filter({ "bird.species": { $is: "Águila" } })
    .getAll()

  const eaglesImpactsGroupByMonthNumber = eaglesImpacts
    .map((i) => {
      const d = new Date(i.date)
      const m = d.getMonth()
      return m
    })
    .reduce((count, current) => {
      count[current] = (count[current] || 0) + 1
      return count
    }, {})

  for (const key in eaglesImpactsGroupByMonthNumber) {
    if (
      Object.prototype.hasOwnProperty.call(eaglesImpactsGroupByMonthNumber, key)
    ) {
      const times = eaglesImpactsGroupByMonthNumber[key]
      eaglesImpactsByMonths[key] = times
    }
  }

  eaglesImpactsByMonths.map((l) => {
    if (l) {
      return l
    }

    return 0
  })

  return eaglesImpactsByMonths
}

const getMadridImpactsByMonths = async (): Promise<number[]> => {
  const madridImpactsByMonths: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const madridImpacts = await client.db.impacts
    .select(["airport.iata", "date"])
    .filter({ "airport.iata": { $is: "MAD" } })
    .getAll()

  const madridImpactsGroupByMonthNumber = madridImpacts
    .map((i) => {
      const d = new Date(i.date)
      const m = d.getMonth()
      return m
    })
    .reduce((count, current) => {
      count[current] = (count[current] || 0) + 1
      return count
    }, {})

  for (const key in madridImpactsGroupByMonthNumber) {
    if (
      Object.prototype.hasOwnProperty.call(madridImpactsGroupByMonthNumber, key)
    ) {
      const times = madridImpactsGroupByMonthNumber[key]
      madridImpactsByMonths[key] = times
    }
  }

  madridImpactsByMonths.map((l) => {
    if (l) {
      return l
    }

    return 0
  })

  return madridImpactsByMonths
}

const getTenerifeImpactsByMonths = async (): Promise<number[]> => {
  const tenerifeImpactsByMonths: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const tenerifeImpacts = await client.db.impacts
    .select(["airport.iata", "date"])
    .filter({ "airport.iata": { $is: "TFN" } })
    .getAll()

  const tenerifeImpactsGroupByMonthNumber = tenerifeImpacts
    .map((i) => {
      const d = new Date(i.date)
      const m = d.getMonth()
      return m
    })
    .reduce((count, current) => {
      count[current] = (count[current] || 0) + 1
      return count
    }, {})

  for (const key in tenerifeImpactsGroupByMonthNumber) {
    if (
      Object.prototype.hasOwnProperty.call(
        tenerifeImpactsGroupByMonthNumber,
        key
      )
    ) {
      const times = tenerifeImpactsGroupByMonthNumber[key]
      tenerifeImpactsByMonths[key] = times
    }
  }

  tenerifeImpactsByMonths.map((l) => {
    if (l) {
      return l
    }

    return 0
  })

  return tenerifeImpactsByMonths
}

export const getServerSideProps = async () => {
  const impacts = await getImpacts()
  const eagleImpactsByMonths = await getEagleImpactsByMonths()
  const pigeonsImpactsByMonths = await getPigeonsImpactsByMonths()
  const madridImpactsByMonths = await getMadridImpactsByMonths()
  const tenerifeImpactsByMonths = await getTenerifeImpactsByMonths()

  return {
    props: {
      impacts,
      eagleImpacts: eagleImpactsByMonths,
      pigeonsImpacts: pigeonsImpactsByMonths,
      madridImpacts: madridImpactsByMonths,
      tenerifeImpacts: tenerifeImpactsByMonths,
    },
  }
}

type PagePropsType = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export default function Page(props: PagePropsType): JSX.Element {
  const {
    impacts,
    eagleImpacts,
    pigeonsImpacts,
    madridImpacts,
    tenerifeImpacts,
  } = props

  return (
    <AppLayout>
      <HeaderComponent />
      <Divider />
      <MainLayout>
        <OverviewComponent
          eagleImpacts={eagleImpacts}
          pigeonsImpacts={pigeonsImpacts}
          madridImpacts={madridImpacts}
          tenerifeImpacts={tenerifeImpacts}
        />
        <ImpactsTableComponent impacts={impacts} />
      </MainLayout>
    </AppLayout>
  )
}
