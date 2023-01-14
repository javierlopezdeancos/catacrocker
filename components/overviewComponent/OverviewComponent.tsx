import { FC } from "react"
import { createStyles, Title, Flex, Grid } from "@mantine/core"
import { DashboardLayout } from "../../layouts/dashboardLayout/DashboardLayout"
import { BirdsImpactsChartComponent } from "../charts/birdsImpactsChartComponent/BirdsImpactsChartComponent"
import { AirportsImpactsChartComponent } from "../charts/airportsImpactsChartComponent/AirportsImpactsChartComponent"

const useStyles = createStyles(() => ({
  overview_wrapper: {
    width: "100%",
    marginTop: "20px",
  },
}))

type OverviewComponentPropsType = {
  eagleImpacts?: number[]
  pigeonsImpacts?: number[]
  madridImpacts?: number[]
  tenerifeImpacts?: number[]
}

export const OverviewComponent: FC<OverviewComponentPropsType> = ({
  eagleImpacts,
  pigeonsImpacts,
  madridImpacts,
  tenerifeImpacts,
}) => {
  const { classes } = useStyles()

  return (
    <div className={classes.overview_wrapper}>
      <Flex
        gap="md"
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Title order={3} size="h2">
          Dashboards
        </Title>
        <Grid>
          <Grid.Col span={6}>
            <DashboardLayout>
              <BirdsImpactsChartComponent
                eagleImpacts={eagleImpacts}
                pigeonsImpacts={pigeonsImpacts}
              />
            </DashboardLayout>
          </Grid.Col>
          <Grid.Col span={6}>
            <DashboardLayout>
              <AirportsImpactsChartComponent
                madridImpacts={madridImpacts}
                tenerifeImpacts={tenerifeImpacts}
              />
            </DashboardLayout>
          </Grid.Col>
        </Grid>
      </Flex>
    </div>
  )
}
