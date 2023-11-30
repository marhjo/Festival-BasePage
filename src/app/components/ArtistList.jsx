import ArtistCard from "./ArtistCard";
export default function ArtistList() {
  // props: {logo name genre}
  return (
    <div className="grid grid-cols-2 mx-3 md:grid-cols-3 md:px-12 lg:grid-cols-4 gap-5 lg:mx-36">
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
    </div>
  );
}
