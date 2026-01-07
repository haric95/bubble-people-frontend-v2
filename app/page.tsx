import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-4 md:p-8 flex flex-col items-center">
        <h1
          className="font-title mb-4 text-highlight text-[64px]"
          style={{
            backgroundClip: "text",
            backgroundImage: "url(/images/mask-1.jpg)",
            color: "#1CAFC488",
            filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
            backgroundSize: "200% 400%",
          }}
        >
          Upcoming
        </h1>
        <div className="flex items-center mb-4">
          <p>Live @ Taco Stand In Gabby's Yard - 15th Jan 2026</p>
          <Link href="" className="g">
            <div className="mx-8 font-title border-2 border-white rounded-lg px-2 py-1 text-highlight-2">
              <p>INFO</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <p>Live @ Madison Square Gardens - 16th Jan 2026</p>
          <Link href="" className="g">
            <div className="mx-8 font-title border-2 border-white rounded-lg px-2 py-1 text-highlight-2">
              <p>INFO</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <p>
            Live @ GATE Presents: Bubble People 12h Live Set - 17th Jan 2026
          </p>
          <Link href="" className="g">
            <div className="mx-8 font-title border-2 border-white rounded-lg px-2 py-1 text-highlight-2">
              <p>INFO</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full mt-8 flex justify-center">
        <div className="w-full md:w-1/2 aspect-[1.77]">
          {/*<SlidingGallery
              images={[
                {
                  attributes: {
                    url: "https://placehold.co/600x400/EEE/31343C",
                  },
                },
                {
                  attributes: {
                    url: "https://placehold.co/600x400/EEE/ff00f0",
                  },
                },
                {
                  attributes: {
                    url: "https://placehold.co/600x400/EEE/0f00f0",
                  },
                },
                {
                  attributes: {
                    url: "https://placehold.co/600x400/EEE/0004f0",
                  },
                },
              ]}
            />*/}
        </div>
      </div>
    </div>
  );
}
