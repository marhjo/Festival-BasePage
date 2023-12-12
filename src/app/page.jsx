import CircleCard from "./components/CircleCard.jsx";
import ImageAndText from "./components/ImageAndText.jsx";
import HeroBanner from "./components/HeroBanner.jsx";

export const metadata = {
  title: "FooFest",
  description: "Velkommen til årets musikfestival: Foo Festival. Find informationer om programmet, kunstnere, og deltag i fællesskabet.",
};

export default function Home() {
  return (
    <main className="pt-[72px]">
      <HeroBanner />
      <section className="py-10 px-5 flex flex-col gap-16 sm:flex-row sm:gap-10 md:px-20">
        <CircleCard image="ecofriendly" overskrift="We are ecofriendly" text="We are focused to take better choices with our festival that doesn't compromise your experience or our planet." />
        <CircleCard image="inclusive" overskrift="We are including" text="The festival embraces diversity, creating a welcoming space where everyone is invited to join in the celebration." />
        <CircleCard image="local" overskrift="We work with locales" text="The music comes from all around the world, but everything available for purchase at the festival is sourced from local businesses." />
      </section>
      <div className="hidden md:block border w-3/4 mx-auto border-accent my-5"></div>
      <ImageAndText
        image="concert.webp"
        overskrift="Upcoming and major artists"
        text="We understand that musical taste is diverse, so we've curated an incredible lineup spanning everything from pop and rock to hypertrash. Collaborating with you, we've crafted the ultimate roster, featuring both emerging talents and iconic names like Led Zeppelin, Pink Floyd, and many more." link="kunstnere" linktekst="Explore the line-up"
      />
      <ImageAndText image="program.webp" overskrift="A one week party" text="This year, we present a diverse program over 7 days featuring three unique stages, each with its own theme, delivering an exciting festival experience for everyone." layout="reversed" link="program" linktekst="Explore the program"/>
    </main>
  );
}
