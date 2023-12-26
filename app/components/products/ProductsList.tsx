import productsArray from "@/utils/productsArray";
import ProductsListItem from "./ProductsListItem";

type Props = {};

const ProductsList = (props: Props) => {
  return (
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
  );
};
export default ProductsList;
