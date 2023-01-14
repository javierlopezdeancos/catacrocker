import { PropsWithChildren } from "react"
import { Card } from "@mantine/core"

export const DashboardLayout: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {children}
    </Card>
  )
}
