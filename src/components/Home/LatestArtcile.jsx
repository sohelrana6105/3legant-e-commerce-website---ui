export default function LatestArtcile() {
  const article = [1, 2, 3];
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl text-black mb-12">Latest Article </h1>

      <div className="flex items-center gap-10">
        {article.map((_, i) => (
          <div key={i} className="h-[400px] w-[350px]">
            <img
              className="w-full h-80"
              src="https://i.ibb.co.com/hxqw5WFg/Ryder-cup.jpg"
              alt=""
            />

            <p className="text-xl font-bold">description</p>
            <button className="underline text-sm">Readmore</button>
          </div>
        ))}
      </div>
    </div>
  );
}
