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
          overskrift="Vi er bæredygtige"
          text="Vi fokuserer på at tage bedre valg som hverken går på kompromis med din oplevelse eller planeten"
        />
        <CircleCard
          image="/ecofriendly.jpg"
          overskrift="Vi er inkluderende"
          text="Festivallen skal være et sted for alle. MANGLER EN SÆTNING "
        />
        <CircleCard
          image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
          overskrift="Vi samarbejder med lokale"
          text="Musikken er fra hele verden men alt hvad der kan købes på festivallen er fra lokale virksomheder."
        />
      </section>
      <div className="hidden md:block border w-3/4 mx-auto border-accent my-5"></div>
      <ImageAndText
        image="https://images.unsplash.com/photo-1505393912938-dbe54c9cce9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overskrift="Upcoming og store artister"
        text="Vi ved at musiksmag er en bred ting, så derfor har vi fundet de fedeste kunstnere indefor alt lige fra pop til rock og til hypertrash. Sammen med jer har vi sammensat det ultimative line-up hvor I kan finde nye artister såvel som store navne som Led Zeppelin, Pink floyd og mange flere."
      />
      <ImageAndText
        image="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overskrift="En uges fest"
        text="I år har vi valgt at tilbyde hele 3 forskellige scener med hver deres tema. SKRIV MERE TEKST"
        layout="reversed"
      />
    </main>
  );
}
