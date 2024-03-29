import { IconComponentPropsType } from "../iconType"

type NotificationIconComponentPropsType = IconComponentPropsType

export const NotificationIconComponent: React.FC<
  NotificationIconComponentPropsType
> = ({ color = "#000", size = "24" }) => {
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
        d="M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6zM13.73 21a1.999 1.999 0 0 1-3.46 0"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
