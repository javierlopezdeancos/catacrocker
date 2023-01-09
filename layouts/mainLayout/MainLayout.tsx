import { PropsWithChildren } from "react"

export const MainLayout: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return <main className="flex flex-col flex-1">{children}</main>
}
