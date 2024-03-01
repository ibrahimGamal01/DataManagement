const InfiniteTriangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 551 480"
    xmlSpace="preserve"
    {...props}
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6456F0" />
        <stop offset="100%" stopColor="#F76D7D" />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: "url(#gradient)",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M531.2 399.4 315.5 9.9h-80.9l178 321.4H215.2l-37.3 67.9z"
    />
    <path
      style={{
        fill: "url(#gradient)",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="m177.9 399.2 97.7-179.7-39.4-70.7L60.5 470.1h432.9l37.8-70.9z"
    />
    <path
      style={{
        fill: "url(#gradient)",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M234.6 9.9 19.8 399.4l40.7 70.7 175.7-321.3 101.7 182.5h74.7z"
    />
  </svg>
);
export default InfiniteTriangle;
