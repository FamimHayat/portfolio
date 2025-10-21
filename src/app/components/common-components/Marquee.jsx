export default function Marquee() {
  const textArray = Array(20).fill(`free for work,"available"`);

  return (
    <section className=" w-full overflow-hidden border-b border-brand/10">
      <div className="marquee-wrapper relative w-full overflow-hidden">
        <div className="marquee flex animate-marquee">
          {[...textArray, ...textArray].map((text, index) => (
            <div key={index} className="flex-shrink-0 mr-16">
              <span className="text-[50px] md:text-[70px] lg:text-[6rem]  font-semibold text-brandColor font-spacema text-shadow text-shadow-light whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          display: flex;
          width: max-content;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 120s linear infinite; /* slower speed */
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 60s; /* slower on mobile too */
          }
        }
      `}</style>
    </section>
  );
}
