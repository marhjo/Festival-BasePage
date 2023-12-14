import Image from "next/image";
export default function CircleCard(props) {
  return (
    <article className="flex flex-col gap-3 max-w-sm place-items-center text-center mx-auto sm:max-w-xs ">
      <Image src={"/" + props.image + ".jpg"} className=" w-36 md:w-44 rounded-full object-cover aspect-square" width={320} height={320} alt={props.image} sizes="(max-width: 200px) 100vw, 200px" />
      <h2 className="font-bold text-2xl">{props.overskrift}</h2>
      <p className="text-lg">{props.text}</p>
    </article>
  );
}
