import React from "react"
import { LogoComponent } from "../logoComponent/LogoComponent"
import { NotificationIconComponent } from "../icons/notificationIconComponent/NotificactionIconComponent"
import { UserIconComponent } from "../icons/userIconComponent/UserIconComponent"
import { Flex, Title, createStyles } from "@mantine/core"

const useStyles = createStyles(() => ({
  header_wrapper: {
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "100%",
  },
}))

export const HeaderComponent: React.FC<{}> = (): JSX.Element => {
  const { classes } = useStyles()

  return (
    <div className={classes.header_wrapper}>
      <Flex
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Flex
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <LogoComponent />
          <Flex
            gap="0"
            justify="center"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <Title order={1} size="h3">
              Catacrocker
            </Title>
            <Title order={2} size="h6" weight="normal">
              Impactos de aves en aeropuertos
            </Title>
          </Flex>
        </Flex>
        <Flex
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <NotificationIconComponent color="#000000" size="20" />
          <UserIconComponent color="#000000" size="20" />
        </Flex>
      </Flex>
    </div>
  )
}
