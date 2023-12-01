import Image from "next/image";
import Link from "next/link";
import CalenderLogo from "../../components/CalenderLogo";
import LocationLogo from "../../components/LocationLogo";
export default function Kunstner() {
  return (
    <main className="pt-[72px]">
      <Link className="underline px-3" href="/kunstnere" prefetch={false}>
        Tilbage til kunstnere
      </Link>

      <div className="bandsection md:flex md:justify-center md:px-10 mx-auto py-5 md:py-10">
        <Image
          className="aspect-square object-cover w-full md:w-4/12"
          src="https://images.unsplash.com/photo-1467779009031-53938b78ca38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvY2slMjBiYW5kfGVufDB8fDB8fHww"
          alt="band"
          width={500}
          height={300}
        />
        <div className="bandinfo px-5 pt-3 md:pt-0 pb-5">
          <h1 className="text-3xl font-bold">Terminalist</h1>
          <h2 className="text-xl font-semibold mb-5">Hypertrash</h2>
          <div className="flex gap-10 mb-6">
            <p className="flex gap-2">
              <span><CalenderLogo/></span>16 januar 14-16
            </p>
            <p className="flex gap-2">
              <span><LocationLogo/></span>Midgard
            </p>
          </div>
          <div className="bandmedlemmer flex flex-wrap gap-x-10 mb-10">
            <p>Peter Hansen</p>
            <p>Christopher bla petersen</p>
            <p>Ib boesen</p>
          </div>
          <p className="font-thin max-w-prose">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. </p>
        </div>
      </div>
    </main>
  );
}
