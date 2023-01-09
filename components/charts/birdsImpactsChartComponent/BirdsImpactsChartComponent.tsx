import { FC } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "Impactos por especie",
    },
  },
}

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

type BirdsImpactsDashboardComponentPropsType = {
  eagleImpacts?: number[]
  pigeonsImpacts?: number[]
}

export const BirdsImpactsChartComponent: FC<
  BirdsImpactsDashboardComponentPropsType
> = ({ eagleImpacts, pigeonsImpacts }): JSX.Element => {
  const data = {
    labels,
    datasets: [
      {
        label: "Águilas",
        data: eagleImpacts,
        fill: false,
        borderColor: "#96ce00",
        backgroundColor: "#96ce00",
        tension: 0.4,
      },
      {
        label: "Palomas",
        data: pigeonsImpacts,
        fill: false,
        borderColor: "#4c6700",
        backgroundColor: "#4c6700",
        tension: 0.4,
      },
    ],
  }

  return <Line options={options} data={data} />
}
