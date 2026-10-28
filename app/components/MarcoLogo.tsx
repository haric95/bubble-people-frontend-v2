"use client";

export const MarcoLogo = () => {
  return (
    <button
      className="absolute bottom-0 right-0 w-fit h-24 md:h-32 p-4 cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        src="/images/marco-logo.webp"
        className="h-full animate-rotate-y"
        style={{ animation: "rotateY 8000ms linear infinite" }}
      />
    </button>
  );
};
