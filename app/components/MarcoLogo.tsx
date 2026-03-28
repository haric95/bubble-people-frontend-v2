export const MarcoLogo = () => {
  return (
    <div className="absolute bottom-0 right-0 w-fit h-24 md:h-32 p-4 mix-blend-difference opacity-80">
      <img
        src="/images/marco-logo.webp"
        className="h-full animate-rotate-y"
        style={{ animation: "rotateY 5000ms linear infinite" }}
      />
    </div>
  );
};
