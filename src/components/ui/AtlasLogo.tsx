import * as React from "react";
const AtlasLogo = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 600 600"
    {...props}
  >
    <circle cx={300} cy={300} r={300} fill="#fff" />
    <circle cx={106} cy={492} r={30} fill="#103860" />
    <circle cx={494} cy={112} r={30} fill="#103860" />
    <path
      fill="none"
      stroke="#103860"
      strokeLinecap="round"
      strokeWidth={36}
      d="m106 492 194-372M300 120l194 372"
    />
    <path
      fill="none"
      stroke="#103860"
      strokeLinecap="round"
      strokeWidth={32}
      d="m358 232 136-120"
    />
    <path
      fill="none"
      stroke="#103860"
      strokeLinecap="round"
      strokeWidth={36}
      d="m224 272 270 220"
    />
  </svg>
);
export default AtlasLogo;
