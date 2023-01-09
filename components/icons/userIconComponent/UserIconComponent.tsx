import { IconComponentPropsType } from "../iconType"

type UserIconComponentPropsType = IconComponentPropsType

export const UserIconComponent: React.FC<UserIconComponentPropsType> = ({
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
        d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
