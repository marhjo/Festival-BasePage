import CircleCard from "./components/CircleCard.jsx";
import ImageAndText from "./components/ImageAndText.jsx";
import HeroBanner from "./components/HeroBanner.jsx";

export const metadata = {
  title: "FooFest",
  description:
    "Velkommen til årets musikfestival: Foo Festival. Find informationer om programmet, kunstnere, og deltag i fællesskabet.",
};

export default function Home() {
  return (
    <main className="pt-[72px]">
      <HeroBanner />
      <section className="py-10 px-5 flex flex-col gap-16 sm:flex-row sm:gap-10 md:px-20">
        <CircleCard
          image="/ecofriendly.jpg"
          overskrift="Overskrift"
          text="Her skal der være en kort tekst som beskriver ovenstående"
        />
        <CircleCard
          image="/ecofriendly.jpg"
          overskrift="Overskrift"
          text="Her skal der være en kort tekst som beskriver ovenstående"
        />
        <CircleCard
          image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
          overskrift="Overskrift"
          text="Her skal der være en kort tekst som beskriver ovenstående"
        />
      </section>
      <div className="hidden md:block border w-3/4 mx-auto border-accent my-5"></div>
      <ImageAndText
        image="https://images.unsplash.com/photo-1505393912938-dbe54c9cce9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overskrift="Overskrift"
        text="Dette skal være en mellem lang tekst som beskriver denne sektion. Den skal tiltrække læserens opmærksomhed"
      />
      <ImageAndText
        image="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overskrift="Overskrift"
        text="Dette skal være en mellem lang tekst som beskriver denne sektion. Den skal tiltrække læserens opmærksomhed"
        layout="reversed"
      />
    </main>
  );
}
