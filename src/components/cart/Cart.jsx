import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function Cart({ product = {} }) {
  const {
    discountPrice = 0,
    images,
    name,
    averageRating = 0,
    category = "none",
    price = 0,
    shortDescription = "none",
  } = product;

  return (
    <div className="max-w-64">
      <div>
        <img
          className="w-64 h-80 relative"
          src={images ? images : "https://i.ibb.co.com/gLY0mj2x/T-shirt.png"}
          alt={name}
        />
        <p className="absolute flex flex-col top-4 left-4 gap-2">
          <span className="bg-white text-black text-sm px-3 w-9/12">Hot</span>
          <span className="bg-green-600 text-white text-sm rounded px-4">
            {discountPrice && `-${discountPrice}%`}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-1 ">
        <Rating style={{ maxWidth: 70 }} value={averageRating} readOnly />
        <p className="text-sm ">{shortDescription}</p>
        <p className="text-sm">{category}</p>
        <p className="text-sm">$ {price}</p>
      </div>
    </div>
  );
}
