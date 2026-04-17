import Image from "next/image";
import {
  Logo,
  ThemeIcon,
  MenuIcon,
  TheStaryNight,
  TheNightCafe,
  TheRedVineyard,
  WardInTheHospital,
  PloughmanInTheFieldsNearArles,
  PaulGauguinArmchair,
  ArrowRightIcon,
  ProfilePortrait,
  PersonalProfile,
} from "./assets";

export default function Home() {
  return (
    <>
      {/* Navigation Menus */}
      <nav className="fixed w-full flex justify-between p-3 md:p-6 lg:p-10 z-20">
        <Image src={Logo} alt="Logo" className="w-[90px]" />

        <div className="flex gap-5 md:gap-8">
          <Image
            src={ThemeIcon}
            alt="Theme Icon"
            className="scale-100 md:scale-125"
          />
          <Image
            src={MenuIcon}
            alt="Menu Icon"
            className="scale-100 md:scale-125"
          />
        </div>
      </nav>

      <hr className="border-none h-[250px]" />

      <main className="w-[90%] md:w-[85%] mx-auto relative text-sm md:text-base">
        {/* Section 1 */}
        <section className="w-full xl:w-[80%]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium leading-tight xl:leading-[100px] uppercase">
            Vincent Van Gogh. post-impressionist painter and artist
          </h1>
        </section>

        <hr className="border-none h-[80px] md:h-[150px] lg:h-[200px]" />

        {/* Section 2 */}
        <section className="pb-20">
          {/* Group 1: First Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-12 xl:gap-20 justify-start">
            {/* image 1 */}
            <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-auto">
              <div className="w-full lg:w-[450px] xl:w-[600px] h-[300px] md:h-[450px] lg:h-[450px] xl:h-[600px] bg-amber-100 rounded-xl relative overflow-hidden">
                <Image
                  src={TheStaryNight}
                  alt="stary night art"
                  fill
                  className="object-cover object-left"
                />
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-400">1</span>
                <div className="flex items-center gap-2">
                  <p className="uppercase">The Starry Night</p>
                  <Image src={ArrowRightIcon} alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* image 2 */}
            <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-auto">
              <div className="w-full lg:w-[350px] xl:w-[500px] h-[300px] md:h-[300px] lg:h-[280px] xl:h-[360px] bg-blue-100 rounded-xl relative overflow-hidden">
                <Image
                  src={TheNightCafe}
                  alt="night cafe art"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-400">2</span>
                <div className="flex items-center gap-2">
                  <p className="uppercase">The Night Café</p>
                  <Image src={ArrowRightIcon} alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-none h-[60px] lg:h-[100px]" />

          {/* Group 2: Second Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 xl:gap-20 justify-end">
            {/* image 3 */}
            <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-auto">
              <div className="w-full lg:w-[350px] xl:w-[400px] h-[300px] md:h-[350px] lg:h-[350px] xl:h-[400px] bg-gray-600 rounded-xl relative overflow-hidden">
                <Image
                  src={TheRedVineyard}
                  alt="red vineyard art"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-400">3</span>
                <div className="flex items-center gap-2">
                  <p className="uppercase">The Red Vineyard</p>
                  <Image src={ArrowRightIcon} alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* image 4 */}
            <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-auto">
              <div className="w-full lg:w-[400px] xl:w-[500px] h-[400px] md:h-[550px] lg:h-[550px] xl:h-[660px] bg-purple-100 rounded-xl relative overflow-hidden">
                <Image
                  src={WardInTheHospital}
                  alt="ward in the hospital art"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-400">4</span>
                <div className="flex items-center gap-2">
                  <p className="uppercase">Ward in the Hospital in Arles</p>
                  <Image src={ArrowRightIcon} alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-none h-[60px] lg:h-[100px]" />

          {/* Group 3: Third Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 xl:gap-20 justify-end">
            {/* image 5 */}
            <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-auto">
              <div className="w-full lg:w-[400px] xl:w-[500px] h-[300px] md:h-[350px] lg:h-[320px] xl:h-[400px] bg-gray-600 rounded-xl relative overflow-hidden">
                <Image
                  src={PloughmanInTheFieldsNearArles}
                  alt="ploughman in the fields near arles art"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-400">5</span>
                <div className="flex items-center gap-2">
                  <p className="uppercase">
                    Ploughman in the Fields near Arles
                  </p>
                  <Image src={ArrowRightIcon} alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* image 6 */}
            <div className="flex flex-col gap-4 pt-0 lg:pt-11 w-full md:w-[80%] lg:w-auto">
              <div className="w-full lg:w-[450px] xl:w-[600px] h-[300px] md:h-[450px] lg:h-[450px] xl:h-[600px] bg-blue-300 rounded-xl relative overflow-hidden">
                <Image
                  src={PaulGauguinArmchair}
                  alt="paul gauguin armchair art"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-400">6</span>
                <div className="flex items-center gap-2">
                  <p className="uppercase">Paul Gauguin&apos;s Armchair</p>
                  <Image src={ArrowRightIcon} alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Text content */}
        <section className="flex flex-col gap-10 lg:gap-10 ">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium leading-tight xl:leading-[100px] uppercase">
            Van Gogh painted several landscapes with flowers, roses, lilacs, and
            sunflowers.
          </h2>

          <p className="text-base sm:text-lg lg:text-4xl font-medium  uppercase ">
            Some reflect his interests in the language of colour, and also in
            Japanese ukiyo-e. There are two series of dying sunflowers. The
            first was painted in Paris in 1887 and shows flowers lying on the
            ground.
          </p>
        </section>

        <hr className="border-none h-[100px]" />

        {/* Section Profile */}
        <section className="flex flex-col lg:flex-row justify-end items-center gap-10 lg:gap-5 xl:gap-40 py-20 lg:py-36">
          {/* Left: Vintage Portrait Image */}
          <div className="w-full lg:w-[42%] xl:w-[38%]">
            <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={PersonalProfile}
                alt="Vincent Van Gogh Profile"
                fill
                priority
                className="object-cover transform hover:scale-200 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>

          {/* Right: Career Timeline */}
          <div className="flex-1 w-full pt-6 lg:pt-12">
            <div className="flex flex-col gap-10 lg:gap-5">
              {[
                {
                  title: "Nuenen and Antwerp",
                  role: "Painting Intern",
                  year: "1883",
                },
                { title: "Paris", role: "Junior Painter", year: "1886" },
                {
                  title: "Gauguin's Visit",
                  role: "Experimental Artist",
                  year: "1888",
                },
                { title: "Saint-Rémy", role: "Senior Painter", year: "1889" },
                {
                  title: "Auvers-sur-Oise",
                  role: "Painting Studio Manager",
                  year: "1890",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start group"
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl md:text-2xl lg:text-3xl font-medium uppercase tracking-tight leading-none text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-xs lg:text-sm font-medium uppercase tracking-tight text-black">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-2xl md:text-2xl lg:text-3xl font-medium text-neutral-400 tabular-nums">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
