import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <rect
      x="0.75"
      y="0.75"
      width="22.5"
      height="22.5"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinejoin="bevel"
      strokeDasharray="10 10"
    />
    <path
      d="M11.5708 10.4C11.5508 10.4 11.5208 10.4 11.5008 10.4C11.4708 10.4 11.4308 10.4 11.4008 10.4C9.94082 10.35 8.80078 9.17 8.80078 7.7C8.80078 6.21 10.0108 5 11.5008 5C12.9908 5 14.2008 6.21 14.2008 7.7C14.1908 9.17 13.0508 10.35 11.5908 10.4C11.5908 10.4 11.5808 10.4 11.5708 10.4ZM11.5008 6.5C10.8408 6.5 10.3008 7.04 10.3008 7.7C10.3008 8.35 10.8108 8.88 11.4508 8.9C11.4508 8.89 11.5108 8.89 11.5808 8.9C12.2108 8.86 12.7008 8.34 12.7008 7.7C12.7008 7.04 12.1608 6.5 11.5008 6.5Z"
      fill={props.color}
    />
    <path
      d="M11.5 17.4003C10.36 17.4003 9.22002 17.1003 8.33002 16.5103C7.49002 15.9503 7 15.1403 7 14.2803C7 13.4203 7.48002 12.6003 8.33002 12.0403C10.11 10.8603 12.89 10.8603 14.66 12.0403C15.5 12.6003 15.99 13.4203 15.99 14.2703C15.99 15.1303 15.51 15.9403 14.66 16.5103C13.78 17.1103 12.64 17.4003 11.5 17.4003ZM9.15997 13.2903C8.72997 13.5803 8.5 13.9303 8.5 14.2803C8.5 14.6303 8.73997 14.9803 9.15997 15.2703C10.43 16.1203 12.56 16.1203 13.83 15.2703C14.26 14.9803 14.5 14.6303 14.49 14.2803C14.49 13.9303 14.25 13.5803 13.83 13.2903C12.57 12.4403 10.43 12.4403 9.15997 13.2903Z"
      fill={props.color}
    />
  </svg>
);
export default SvgComponent;