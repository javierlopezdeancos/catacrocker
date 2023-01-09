import { AppLayout } from "../layouts/appLayout/AppLayout"
import { HeaderComponent } from "../components/headerComponent/HeaderComponet"
import { MainLayout } from "../layouts/mainLayout/MainLayout"
import { DashboardLayout } from "../layouts/dashboardLayout/DashboardLayout"
import { BirdsImpactsChartComponent } from "../components/charts/birdsImpactsChartComponent/BirdsImpactsChartComponent"
import { getXataClient } from "../codegen/data"

const client = getXataClient()

const getPigeonsImpactsByMonths = async (): Promise<number[]> => {
  const pigeonsImpactsByMonths: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const pigeonsImpacts = await client.db.impacts
    .select(["bird.species", "date"])
    .filter({ "bird.species": { $is: "pigeon" } })
    .getAll()

  console.log("pigeonsImpacts", pigeonsImpacts)

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
    .filter({ "bird.species": { $is: "eagle" } })
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

export const getServerSideProps = async () => {
  const eagleImpactsByMonths = await getEagleImpactsByMonths()
  const pigeonsImpactsByMonths = await getPigeonsImpactsByMonths()

  return {
    props: {
      eagleImpacts: eagleImpactsByMonths,
      pigeonsImpacts: pigeonsImpactsByMonths,
    },
  }
}

type PagePropsType = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export default function Page(props: PagePropsType): JSX.Element {
  const { eagleImpacts, pigeonsImpacts } = props

  return (
    <AppLayout>
      <HeaderComponent />
      <MainLayout>
        <h3 className="pb-7 text-3xl font-medium">Descripción</h3>
        <section className="grid grid-rows-1 grid-flow-col gap-5">
          <DashboardLayout>
            <BirdsImpactsChartComponent
              eagleImpacts={eagleImpacts}
              pigeonsImpacts={pigeonsImpacts}
            />
          </DashboardLayout>
          <DashboardLayout />
          <section className="grid grid-cols-1 grid-flow-row gap-5">
            <article className="bg-neutral-100 shadow-md shadow-gray-100 h-full w-96 rounded-3xl"></article>
            <article className="bg-neutral-100 shadow-md shadow-gray-100 h-full w-96 rounded-3xl"></article>
          </section>
        </section>
        <h3 className="pt-5 pb-7 text-3xl font-medium">Impactos</h3>
      </MainLayout>
    </AppLayout>
  )
}
