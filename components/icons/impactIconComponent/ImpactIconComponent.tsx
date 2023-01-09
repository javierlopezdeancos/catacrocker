import { IconComponentPropsType } from "../iconType"

type ImpactIconComponentPropsType = IconComponentPropsType

export const ImpactIconComponent: React.FC<ImpactIconComponentPropsType> = ({
  color = "#000",
  size = "24",
}) => {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
