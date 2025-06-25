type IconProps = React.HTMLAttributes<SVGElement>;

export const Logo = (props: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.7477 20H5.24324L5.69369 16.8H16.2342L17.1351 10.4L21.5495 7.2L19.7477 20Z"
      fill="currentColor"
    />
    <path
      d="M13.4414 13.6457H9.56757L10.018 10.4H6.59459L5.69369 16.8H2L3.35135 7.2H14.3423L13.4414 13.6457Z"
      fill="currentColor"
    />
    <path d="M22 4L21.5495 7.2H14.3423L14.7928 4H22Z" fill="currentColor" />
  </svg>
);
