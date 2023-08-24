export default function CorrectIcon({
  height = "40",
  width = "40",
  color = "white",
}) {
  return (
    <svg
      className="inherit-background-color"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="43.7712"
        height="7.18557"
        rx="3.59279"
        transform="matrix(0.589637 -0.807668 0.771424 0.636322 8.64844 35.3526)"
        fill={color}
      />
      <rect
        width="20.1307"
        height="7.19427"
        rx="3.59714"
        transform="matrix(-0.6055 -0.795845 0.75832 -0.651883 12.1895 40)"
        fill={color}
      />
    </svg>
  );
}
