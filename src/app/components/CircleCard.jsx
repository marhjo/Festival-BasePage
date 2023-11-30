export default function CircleCard(props) {
  return (
    <article className="flex flex-col gap-3 max-w-sm place-items-center text-center mx-auto sm:max-w-xs ">
      <img className=" w-36 rounded-full object-cover aspect-square" src="/ecofriendly.jpg" alt="eco friendly" />
      <h2 className="font-bold text-lg">Overskrift</h2>
      <p>Dette er en kort tekst som skal beskrive ovenstående cirkel.</p>
    </article>
  );
}
