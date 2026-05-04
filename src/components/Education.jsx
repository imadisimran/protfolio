import React from "react";

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "SSC",
      subtitle: "Badda Alatunnessa High School",
      description: "I studied in this school from 2015 to 2022. I got GPA 5.00 in SSC.",
      date: "2015-2022",
      alignment: "left"
    },
    {
      id: 2,
      title: "HSC",
      subtitle: "Rajarbagh Police Lines College, Dhaka",
      description: "I studied in this college from 2022 to 2024. I got GPA 5.00 in HSC.",
      date: "2022-2024",
      alignment: "right"
    },
    {
      id: 3,
      title: "BSC in Footwear Engineering",
      subtitle: "University Of Dhaka",
      description: "I am taking my academic degree in Footwear Engineering from University Of Dhaka.",
      date: "2024",
      alignment: "left"
    }
  ];

  return (
    <section className="py-32 px-8 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-headline font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">QUALIFICATIONS</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">Educational Background</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line (Faded ends for smooth transition) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>

          <div className="space-y-20 md:space-y-32">
            {educationData.map((data) => (
              <div 
                key={data.id} 
                className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-16 items-center"
              >
                {data.alignment === 'left' ? (
                  <>
                    {/* Left Side Content */}
                    <div className="text-center md:text-right flex flex-col items-center md:items-end order-2 md:order-1 px-4">
                      <h3 className="text-white font-bold text-xl md:text-2xl">{data.title}</h3>
                      <span className="text-primary text-sm font-semibold mt-2">{data.subtitle}</span>
                      <p className="text-on-surface-variant text-sm mt-4 leading-relaxed max-w-sm">{data.description}</p>
                    </div>

                    {/* Middle Timeline Node */}
                    <div className="relative flex justify-center items-center w-8 order-1 md:order-2">
                       <div className="w-8 h-8 rounded-full border-2 border-primary/50 bg-[#131315] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,81,106,0.3)]">
                         <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,81,106,0.8)]"></div>
                       </div>
                    </div>

                    {/* Right Side Date */}
                    <div className="text-center md:text-left text-white/10 font-black text-3xl md:text-4xl order-3">
                      {data.date}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side Date */}
                    <div className="text-center md:text-right text-white/10 font-black text-3xl md:text-4xl order-3 md:order-1 hidden md:block">
                      {data.date}
                    </div>

                    {/* Middle Timeline Node */}
                    <div className="relative flex justify-center items-center w-8 order-1 md:order-2">
                       <div className="w-8 h-8 rounded-full border-2 border-primary/50 bg-[#131315] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,81,106,0.3)]">
                         <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,81,106,0.8)]"></div>
                       </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-3 px-4">
                      <h3 className="text-white font-bold text-xl md:text-2xl">{data.title}</h3>
                      <span className="text-primary text-sm font-semibold mt-2">{data.subtitle}</span>
                      <p className="text-on-surface-variant text-sm mt-4 leading-relaxed max-w-sm">{data.description}</p>
                    </div>

                    {/* Mobile Date (Positioned below content for consistent mobile stack) */}
                    <div className="text-center md:hidden text-white/10 font-black text-3xl order-4 mt-2">
                      {data.date}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
