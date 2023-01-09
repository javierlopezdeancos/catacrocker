import { PropsWithChildren } from "react"

export const DashboardLayout: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <article className="bg-neutral-100 shadow-md shadow-gray-100 w-96 p-5 rounded-3xl">
      {children}
    </article>
  )
}
