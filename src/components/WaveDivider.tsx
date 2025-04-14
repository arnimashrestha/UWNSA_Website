// src/components/WaveDivider.tsx
interface WaveDividerProps {
  fill: string;
  flipped?: boolean;
}

const WaveDivider = ({ fill, flipped = false }: WaveDividerProps) => {
  return (
    <div
      className={`absolute w-full overflow-hidden leading-none ${
        flipped ? "top-0 rotate-180" : "bottom-0"
      } left-0`}
    >
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-[100px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C360,160 1080,-32 1440,64 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
