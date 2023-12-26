import ProductsListItem from "@/app/components/products/ProductsListItem";
import productsArray from "@/utils/productsArray";

interface Props {
  params: {
    category: string;
  };
}

export default function Category({ params }: Props) {
  return (
    <div>
      <h1>Products on category {params.category}</h1>
      <div className="grid grid-cols-3 gap-4">
        {productsArray.map(({ id, img, title, description, category }) => {
          if (category === params.category) {
            return (
              <div key={id} className="grid items-center rounded">
                <ProductsListItem
                  id={id}
                  img={img}
                  title={title}
                  description={description}
                  category={category}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
