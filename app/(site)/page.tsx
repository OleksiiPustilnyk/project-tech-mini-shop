import productsArray from "@/utils/productsArray";
import ProductsListItem from "../../components/Products/ProductsListItem";
// import ShopLayout from "./layout";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <h1 className="container mx-auto flex items-center">Home</h1>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-3 min-h-[fit-content]">
          <div className="grid grid-cols-3 gap-4">
            {productsArray.map(
              ({ id, img, title, description, color, price, category }) => (
                <div className="grid items-center  rounded-xl">
                  <ProductsListItem
                    id={id}
                    img={img}
                    title={title}
                    description={description}
                    color={color}
                    price={price}
                    category={category}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
