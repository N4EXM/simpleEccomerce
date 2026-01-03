import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import headphone1 from "../assets/headphone1.jpg";
import QuantityInput from "../components/inputs/QuantityInput";
import { GBP_format } from "../utils/textUtils";


const ItemPage = () => {
  const [itemDetails, setItemDetails] = useState({
    id: 0,
    name: "Headphone 1",
    category: "Headphones",
    brand: "Samsung",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat debitis natus itaque dolor corrupti, officia, obcaecati harum ipsa et totam.",
    stockQuantity: 100,
    stock: true,
    discount: 0.5,
    rating: 3.5,
    image: headphone1,
  });

  // toggles
  const [isWishlisted, setIsWishlisted] = useState(false)

  // state
  const [quantity, setQuantity] = useState(0);

  return (
    <Layout>
      {/* main content */}
      <div className="col-span-12 row-span-11 row-start-3 w-full h-full grid grid-cols-12 grid-row-12 px-20">
        {/* image container */}
        <div className="col-span-6 row-span-6 w-full h-full p-10 flex">
          <div className="w-fit h-fit flex items-center justify-center p-2 rounded-md bg-white">
            <img src={itemDetails.image} alt="" className="w-3/4 h-3/4" />
          </div>
        </div>

        {/* details container */}
        <div className="col-span-6 row-span-6 w-full h-full flex flex-col gap-6 p-10 pl-0 pt-14">
          {/* category, name, stock and reviews */}
          <div className="flex flex-col gap-1 w-full h-fit">
            {/* category */}
            <p className="font-medium text-accent/50 dark:text-Daccent/50">
              {itemDetails.category}
            </p>

            {/* name and stock status */}
            <div className="flex flex-row items-center gap-4 w-fit h-fit">
              <h1 className="text-2xl font-medium text-text dark:text-Dtext">
                {itemDetails.name}
              </h1>
              <p
                className={`${
                  itemDetails.stock
                    ? "bg-thi/30 text-sec dark:bg-emerald-200/95 dark:text-pri dark:border-pri border-pri"
                    : "bg-rose-100 text-rose-600 dark:bg-rose-300 dark:text-rose-700 dark:border-rose-700 border-rose-700"
                } text-xs font-medium p-1 px-2.5 border rounded-xl `}
              >
                {itemDetails.stock ? "In Stock" : "Out Of Stock"}
              </p>
            </div>

            {/* stars */}
            <div className="flex flex-row items-center gap-2 w-fit h-fit pt-1">
              <div className="flex flex-row items-center gap-0">
                {Array.from({ length: 5 }, (_, index) => {
                  const ratingDifference = 5 - Math.floor(itemDetails.rating);

                  return (
                    <svg
                      key={index}
                      className={`${
                        index <= ratingDifference
                          ? "text-amber-400"
                          : "text-slate-300 dark:text-accent"
                      } text-xl rounded-md`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                      />
                    </svg>
                  );
                })}
              </div>
              <p className="dark:text-Daccent text-accent">
                {itemDetails.rating}
              </p>
            </div>
          </div>

          {/* price */}
          <div className="flex flex-row items-center gap-2">
            <p className="text-2xl text-text dark:text-Dtext font-medium">
              {itemDetails.discount !== null
                ? GBP_format(itemDetails.price - itemDetails.price * itemDetails.discount)
                : GBP_format(itemDetails.price)
              }
            </p>
            {itemDetails.discount !== null && (
              <>
                <svg
                  className="text-pri dark:text-Dpri"
                  xmlns="http://www.w3.org/2000/svg"
                  width={6}
                  height={6}
                  fill={"currentColor"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"></path>
                </svg>
                <p className="text-accent dark:text-Daccent line-through text-2xl font-medium">
                  {GBP_format(itemDetails.price)}
                </p>
              </>
            )}
          </div>

          {/* description */}
          <div className="flex w-full h-fit">
            <p className="text-accent dark:text-Daccent">
              {itemDetails.description}
            </p>
          </div>

          {/* quantity, add to cart and favourite */}
          <div className="flex flex-row items-center gap-4 w-full h-fit">
            
            {/* quantity */}
            <QuantityInput 
              initialValue={quantity}
              value={quantity}
              setValue={setQuantity}
              isDisabled={!itemDetails.stock}
            />

            {/* add to cart button */}
            <button
              className="w-fit h-fit px-4 p-2 py-1.5 text-sm/normal text-Dtext font-medium rounded-md bg-pri hover:bg-sec duration-200 flex flex-row items-center gap-2 dark:bg-Dpri dark:bg-Dsec"
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M15 13v-3h3V8h-3V5h-2v3h-3v2h3v3z"></path><path d="M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2L21.66 9h-2.18l-2.62 6h-6.18L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33z"></path></svg>
              Add To Cart
            </button>

            {/* wishlist button */}
            <button
              className={`p-2 bg-SBG rounded-full duration-200 ${isWishlisted ? 'text-rose-500' : 'text-pri'}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              {
                isWishlisted
                ? <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} 
                    fill={"currentColor"} viewBox="0 0 24 24">
                    <path d="M11.29 20.69c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.29-2.29-5.84-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41z"></path>
                  </svg>
                : <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16}  
                    fill={"currentColor"} viewBox="0 0 24 24">
                    <path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                  </svg>
              }
              
            </button>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemPage;
