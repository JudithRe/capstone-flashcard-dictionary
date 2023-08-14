export default function ErrorIcon({
  height = "40",
  width = "40",
  color = "#9D2F2F",
}) {
  return (
    <svg
      className="navTransition inherit-background-color"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4917 2.14653C15.4065 0.987363 16.324 0 17.4863 0H23.1817C24.344 0 25.2615 0.987364 25.1763 2.14653L23.2235 28.7283C23.1123 30.242 21.8518 31.4133 20.334 31.4133C18.8162 31.4133 17.5556 30.242 17.4444 28.7283L15.4917 2.14653Z"
        fill={color}
      />
      <path
        d="M23.7951 36.8421C23.7951 38.5862 22.2454 40 20.3336 40C18.4219 40 16.8721 38.5862 16.8721 36.8421C16.8721 35.098 18.4219 33.6842 20.3336 33.6842C22.2454 33.6842 23.7951 35.098 23.7951 36.8421Z"
        fill={color}
      />
    </svg>
  );
}
