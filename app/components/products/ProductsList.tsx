import productsArray from "@/utils/productsArray";
import ProductsListItem from "./ProductsListItem";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {productsArray.map(({ id, img, title, description, category }) => (
        <div className="grid items-center border border-gray-400 rounded">
          <ProductsListItem
            id={id}
            img={img}
            title={title}
            description={description}
            category={category}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductsList;
