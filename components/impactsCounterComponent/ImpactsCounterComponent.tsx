import { FC } from "react"
import { DashboardLayout } from "../../layouts/dashboardLayout/DashboardLayout"
import { Text } from "@mantine/core"

type ImpactsCounterComponentPropsType = {
  label: string
  impactsNumber: number
}

export const ImpactsCounterComponent: FC<ImpactsCounterComponentPropsType> = ({
  impactsNumber,
  label,
}): JSX.Element => {
  const label = `${impactsNumber} ${label}`

  return (
    <DashboardLayout>
      <Text fz="xl">impactsNumber label</Text>
    </DashboardLayout>
  )
}
