import CircleCard from "./components/CircleCard.jsx";
import ImageAndText from "./components/ImageAndText.jsx";

export const metadata = {
  title: "Foofest",
  description:
    "Velkommen til årets musikfestival: Foofest. Find informationer om programmet, kunstnere, og deltag i fællesskabet.",
};

export default function Home() {
  return (
    <main className="pt-[72px]">
      <section className="py-10 px-5 flex flex-col gap-16 sm:flex-row sm:gap-10 md:px-20">
        <CircleCard
          image="ecofriendly"
          overskrift="Overskrift"
          text="Her skal der være en kort tekst som beskriver ovenstående"
        />
        <CircleCard
          image="ecofriendly"
          overskrift="Overskrift"
          text="Her skal der være en kort tekst som beskriver ovenstående"
        />
        <CircleCard
          image="ecofriendly"
          overskrift="Overskrift"
          text="Her skal der være en kort tekst som beskriver ovenstående"
        />
      </section>

      <ImageAndText
        image="inclusive"
        overskrift="Overskrift"
        text="Dette skal være en mellem lang tekst som beskriver denne sektion. Den skal tiltrække læserens opmærksomhed"
      />
      <ImageAndText
        image="inclusive"
        overskrift="Overskrift"
        text="Dette skal være en mellem lang tekst som beskriver denne sektion. Den skal tiltrække læserens opmærksomhed"
        layout="reversed"
      />
    </main>
  );
}
