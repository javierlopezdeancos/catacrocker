import { FC } from "react"
import { Title, createStyles, Table, Flex } from "@mantine/core"
import { Impacts } from "../../codegen/data"

const useStyles = createStyles(() => ({
  impacts_wrapper: {
    width: "100%",
    marginTop: "20px",
  },
}))

type ImpactsTableComponentPropsType = {
  impacts?: Impacts[]
}

export const ImpactsTableComponent: FC<ImpactsTableComponentPropsType> = ({
  impacts,
}) => {
  const { classes } = useStyles()

  const rows = impacts.map((impact) => (
    <tr key={impact.id}>
      <td>{impact.bird.species}</td>
      <td>{impact.bird_weight}</td>
      <td>{impact.flight.number}</td>
      <td>{impact.flight.airplane}</td>
      <td>{impact.airport.name}</td>
      <td>{impact.airport.city}</td>
    </tr>
  ))

  return (
    <div className={classes.impacts_wrapper}>
      <Flex
        gap="md"
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Title order={3} size="h2">
          Impactos
        </Title>
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>Tipo de Ave</th>
              <th>Peso del Ave</th>
              <th>Numero de vuelo</th>
              <th>Tipo de Avión</th>
              <th>Aeropuerto</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Flex>
    </div>
  )
}
