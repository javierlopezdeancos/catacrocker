import { PropsWithChildren } from "react"
import { Container, Flex } from "@mantine/core"

export const MainLayout: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Container fluid>
      <Flex
        gap="md"
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        {children}
      </Flex>
    </Container>
  )
}
