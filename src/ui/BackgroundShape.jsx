function BackgroundShape({ positionX="",positionY="",width="", gradientFrom, gradientTo }) {
  return (
    <div
      className={`absolute inset-x-0 ${positionX} -z-10 transform-gpu overflow-y-hidden overflow-hidden blur-3xl`}
      aria-hidden="true"
    >
      <div
        className={`relative opacity-30 ${positionY} ${width}`}
        style={{
          // left: `${positionY}`, 
          aspectRatio: "900 / 300",
          // width: width,
          transform: "translateX(-50%) rotate(30deg)",
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
        }}
      />
    </div>
  );
}

export default BackgroundShape;
