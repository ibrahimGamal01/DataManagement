const SVGComponent = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6456F0" />
        <stop offset="100%" stopColor="#0F3054" />
      </linearGradient>
    </defs>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      style={{
        fill: "url(#a)",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      d="M44.493 19.86h-4.25a16.9 16.9 0 0 0-2.3-4.707l2.132-2.133a.757.757 0 0 0 0-1.07l-3.173-3.172a.756.756 0 0 0-1.07 0l-2.136 2.136a17 17 0 0 0-4.703-2.294V4.36a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v4.26a17 17 0 0 0-4.703 2.294l-2.137-2.136a.756.756 0 0 0-1.07 0L7.911 11.95a.756.756 0 0 0 0 1.07l2.132 2.132a16.9 16.9 0 0 0-2.3 4.707h-4.25a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.25a16.9 16.9 0 0 0 2.3 4.707L7.911 36.7a.756.756 0 0 0 0 1.07l3.172 3.173a.756.756 0 0 0 1.07 0l2.137-2.136a17 17 0 0 0 4.703 2.293v4.261a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V41.1a17 17 0 0 0 4.703-2.295l2.136 2.137a.756.756 0 0 0 1.07 0l3.173-3.173a.757.757 0 0 0 0-1.07l-2.132-2.132a16.9 16.9 0 0 0 2.3-4.707h4.25a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"
    />
    <circle cx={24} cy={25} r={8.8} fill="none" stroke="#000" />
  </svg>
);
export default SVGComponent;
