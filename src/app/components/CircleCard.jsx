export default function CircleCard(props) {
  return (
    <article className="flex flex-col gap-3 max-w-sm place-items-center text-center mx-auto sm:max-w-xs ">
      <img className=" w-36 md:w-44 rounded-full object-cover aspect-square" src={"/" + props.image + ".jpg"} alt={props.image} />
      <h2 className="font-bold text-2xl">{props.overskrift}</h2>
      <p className="text-lg">{props.text}</p>
    </article>
  );
}
