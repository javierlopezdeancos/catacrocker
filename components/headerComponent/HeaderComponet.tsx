import React from "react"
import { LogoComponent } from "../logoComponent/LogoComponent"
import { NotificationIconComponent } from "../icons/notificationIconComponent/NotificactionIconComponent"
import { UserIconComponent } from "../icons/userIconComponent/UserIconComponent"

export const HeaderComponent: React.FC<{}> = (): JSX.Element => {
  return (
    <header className="flex flex-row gap-3 justify-between w-full pb-5">
      <section className="flex flex-row gap-3">
        <LogoComponent />
        <div>
          <h1 className="text-xl font-medium">Catacrocker</h1>
          <h2 className="text-xs">Impactos de aves en aeropuertos</h2>
        </div>
      </section>
      <section className="flex flex-row gap-2 justify-end">
        <NotificationIconComponent color="#000000" size="20" />
        <UserIconComponent color="#000000" size="20" />
      </section>
    </header>
  )
}
