import ProductsListItem from "@/app/components/Products/ProductsListItem";
import productsArray from "@/utils/productsArray";

interface Props {
  params: {
    category: string;
  };
}

export default function Category({ params }: Props) {
  return (
    <div className=" ">
      <h1>
        Products in category:{" "}
        <span className="capitalize">{params.category}</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {productsArray.map(
          ({ id, img, title, description, color, price, category }) => {
            if (category === params.category) {
              return (
                <div key={id} className="grid items-center rounded">
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
              );
            }
          }
        )}
      </div>
    </div>
  );
}
