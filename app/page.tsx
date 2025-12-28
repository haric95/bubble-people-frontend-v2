import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-3 md:p-8 flex flex-col items-center">
        <h1
          className="font-title mb-4 text-highlight"
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
      <div className="w-full py-16 flex flex-col items-center">
        <h1 className="font-title mb-4">Music</h1>
        <div className="w-full px-16 mb-8">
          <h2 className="font-title">LP</h2>
          <div className="flex flex-wrap">
            <div className="w-1/3 p-4 ">
              <img src="/images/cover-1.jpg" className="rounded-lg mb-2" />
              <p>Color Dome</p>
              <p>2022</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-2.jpg" className="rounded-lg mb-2" />
              <p>Consequence Unknown</p>
              <p>2023</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-3.jpg" className="rounded-lg mb-2" />
              <p>Old Habits</p>
              <p>2028</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-4.jpg" className="rounded-lg mb-2" />
              <p>Escape Plane</p>
              <p>1996</p>
            </div>
          </div>
        </div>
        <div className="w-full px-16">
          <h2 className="font-title">EP / Single</h2>
          <div className="flex flex-wrap">
            <div className="w-1/3 p-4 ">
              <img src="/images/cover-1.jpg" className="rounded-lg mb-2" />
              <p>Color Dome</p>
              <p>2022</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-2.jpg" className="rounded-lg mb-2" />
              <p>Consequence Unknown</p>
              <p>2023</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-3.jpg" className="rounded-lg mb-2" />
              <p>Old Habits</p>
              <p>2028</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-4.jpg" className="rounded-lg mb-2" />
              <p>Escape Plane</p>
              <p>1996</p>
            </div>
          </div>
        </div>
        <div className="w-full px-16">
          <h2 className="font-title">AV</h2>
          <div className="flex flex-wrap">
            <div className="w-1/3 p-4 ">
              <img src="/images/cover-1.jpg" className="rounded-lg mb-2" />
              <p>Color Dome</p>
              <p>2022</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-2.jpg" className="rounded-lg mb-2" />
              <p>Consequence Unknown</p>
              <p>2023</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-3.jpg" className="rounded-lg mb-2" />
              <p>Old Habits</p>
              <p>2028</p>
            </div>
            <div className="w-1/3 p-4">
              <img src="/images/cover-4.jpg" className="rounded-lg mb-2" />
              <p>Escape Plane</p>
              <p>1996</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
