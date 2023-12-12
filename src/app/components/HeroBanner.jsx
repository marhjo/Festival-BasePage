import LogoDesktop from "./LogoDesktop";

export default function HeroBanner() {
  return (
    <section
      className="w-full h-full sm:max-h-[32rem] grid md:pr-[50%] bg-cover sm:bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1484494789010-20fc1a011197?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-background bg-opacity-70 h-full pl-16 pr-5 pt-10">
        <img className="w-3/4" src="./foo-festival-logo.svg" alt="" />
        <p className="text-3xl mt-10">15. januar - 21. januar</p>
        <p className="text-3xl mb-4">København</p>
        <p className="max-w-prose text-xl hidden sm:block mb-3">
          Vi tager 120 kunstnere fra alle af musikkens verdenshjørner og samler
          dem i en uge med masser af fed stemning og energi
        </p>
      </div>
    </section>
  );
}
