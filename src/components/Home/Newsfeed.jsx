export default function Newsfeed() {
  const images = [
    "https://i.ibb.co.com/ZzfC8V5h/1.png",
    "https://i.ibb.co.com/ZzfC8V5h/2.png",
    "https://i.ibb.co.com/ZzfC8V5h/3.png",
    "https://i.ibb.co.com/ZzfC8V5h/4.png",
    "https://i.ibb.co.com/ZzfC8V5h/5.png",
    "https://i.ibb.co.com/ZzfC8V5h/6.png",
  ];

  return (
    <div className=" bg-white ">
      <div className="text-center my-10">
        <p className="text-sm tracking-widest text-gray-500">NEWSFEED</p>
        <h2 className="text-4xl font-bold mt-2">Instagram</h2>
        <p className="mt-3 text-gray-600">
          Follow us on social media for more discount & promotions
        </p>
        <p className="mt-2 font-medium">@3elegant_official</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-48 object-cover rounded-xl shadow-sm"
            alt={`Instagram ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
