import React, { PropsWithChildren } from "react"
import { Container } from "@mantine/core"

type AppLayoutPropsType = {}

export const AppLayout: React.FC<PropsWithChildren<AppLayoutPropsType>> = ({
  children,
}): JSX.Element => {
  return <Container fluid>{children}</Container>
}
