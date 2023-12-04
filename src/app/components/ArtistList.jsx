import ArtistCard from "./ArtistCard";
export default function ArtistList({ filtered }) {
  // props: {logo, name, genre}
  return (
    <div className="grid grid-cols-2 mx-3 md:grid-cols-3 md:mx-12 lg:grid-cols-4 gap-5 lg:mx-32 mb-16">
      {filtered.map((artist) => (
        <ArtistCard key={artist.slug} data={artist} />
      ))}
    </div>
  );
}
