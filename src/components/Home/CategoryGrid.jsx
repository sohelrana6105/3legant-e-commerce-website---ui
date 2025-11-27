export default function CategoryGrid() {
  const categories = [
    {
      id: 1,
      categoryName: "Golf Polo Shirt",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 2,
      categoryName: "Footwear",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 3,
      categoryName: "Glove Snow",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 4,
      categoryName: "Glove Clubs",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 5,
      categoryName: "Golf Balls",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 6,
      categoryName: "Glove Clubs",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 ">
      <h1 className="text-4xl text-black mb-12 text-center">
        Shop by Categories
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((c, i) => (
          <div key={i} className="w-[375px]">
            <img src={c.categoryImage} alt={c.categoryName} />
            <p className="mt-6 text-center">{c.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
