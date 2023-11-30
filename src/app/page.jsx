import CircleCard from "./components/CircleCard.jsx"

export default function Home() {
  return (
<main className="pt-[72px]">
<section className="py-10 px-5 flex flex-col gap-16 sm:flex-row sm:gap-10 md:px-20">
<CircleCard/>
<CircleCard/>
<CircleCard/>
</section>
</main>
  )
}
