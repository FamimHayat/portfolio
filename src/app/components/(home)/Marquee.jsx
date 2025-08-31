// components/Marquee.jsx
export default function Marquee() {
    const text = "FREE FOR WORK";

    return (
        <section className="my-10 md:my-20 w-full overflow-hidden bg-white ">
            <div className="marquee flex">
                {/* Duplicate enough times to cover width */}
                {Array(20).fill(text).map((item, index) => (
                    <span key={index} className="px-4 text-9xl text-lightBrand font-headerFont text-shadow-light whitespace-nowrap">{item}</span>
                ))}
            </div>

            <style>{`
        .marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* Optional: smooth font rendering */
        .marquee span {
          will-change: transform;
        }
      `}</style>
        </section>
    );
}
