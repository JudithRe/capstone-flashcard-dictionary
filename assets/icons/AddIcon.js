export default function AddIcon({ height = "40", width = "40" }) {
  return (
    <svg
      className="inherit-background-color"
      width={width}
      height={height}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 25C57.7614 25 60 27.2386 60 30C60 32.7614 57.7614 35 55 35H5C2.23857 35 -1.20706e-07 32.7614 0 30C1.20706e-07 27.2386 2.23858 25 5 25L55 25Z"
        fill="white"
      />
      <path
        d="M35 55C35 57.7614 32.7614 60 30 60C27.2386 60 25 57.7614 25 55L25 5C25 2.23857 27.2386 -2.41411e-07 30 0C32.7614 2.41411e-07 35 2.23858 35 5L35 55Z"
        fill="white"
      />
    </svg>
  );
}
