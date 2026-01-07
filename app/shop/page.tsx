const Shop = () => {
  return (
    <div>
      <div className="w-full py-16 md:p-8 p-4 flex flex-col items-center">
        <h1
          className="font-title mb-8 text-highlight text-[64px]"
          style={{
            backgroundClip: "text",
            backgroundImage: "url(/images/mask-1.jpg)",
            color: "#1CAFC488",
            filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
            backgroundSize: "400% 400%",
          }}
        >
          Shop
        </h1>
      </div>
    </div>
  );
};

export default Shop;
