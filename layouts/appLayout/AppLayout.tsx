import React, { PropsWithChildren } from "react"

type AppLayoutPropsType = {}

export const AppLayout: React.FC<PropsWithChildren<AppLayoutPropsType>> = ({
  children,
}): JSX.Element => {
  return (
    <div className="w-screen h-screen font-sans text-base flex flex-col pr-10 pl-10 pt-5 pb-5">
      {children}
    </div>
  )
}
