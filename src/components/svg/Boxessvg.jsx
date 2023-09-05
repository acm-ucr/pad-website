const Boxessvg = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="200"
      height="203"
      viewBox="0 0 200 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="179.5"
        y="184.5"
        width="132"
        height="136"
        transform="rotate(-180 179.5 184.5)"
        stroke={color}
        strokeWidth="2"
      />
      <rect
        x="198.5"
        y="38.5"
        width="36"
        height="37"
        transform="rotate(-180 198.5 38.5)"
        stroke={color}
        strokeWidth="2"
      />
      <rect
        x="37.5"
        y="201.5"
        width="36"
        height="37"
        transform="rotate(-180 37.5 201.5)"
        stroke={color}
        strokeWidth="2"
      />
      <rect
        x="155.5"
        y="156.5"
        width="132"
        height="136"
        transform="rotate(-180 155.5 156.5)"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Boxessvg;
