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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Impactos por especie",
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

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
        label: "Eagle",
        data: eagleImpacts,
        fill: false,
        borderColor: "#96ce00",
        backgroundColor: "#96ce00",
        tension: 0.4,
      },
      {
        label: "Pigeon",
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
