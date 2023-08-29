export default function ErrorIcon({
  height = "40",
  width = "40",
  color = "#9D2F2F",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2C14.9148 0.840835 15.8377 0 17 0H23C24.1623 0 25.0852 0.840835 25 2L23 27C22.8888 28.5137 21.5178 30 20 30C18.4822 30 17.1112 28.5137 17 27L15 2Z"
        fill={color}
      />
      <path
        d="M24.5 35.5C24.5 37.2441 21.9118 40 20 40C18.0882 40 15.5 37.2441 15.5 35.5C15.5 33.7559 18.0882 31 20 31C21.9118 31 24.5 33.7559 24.5 35.5Z"
        fill={color}
      />
    </svg>
  );
}
