import ProductsListItem, {
  Props,
} from "../../../components/Products/ProductsListItem";

export default async function Home() {
  // витягую айтеми з бази
  const responce = await fetch(`${process.env.NEXTAUTH_URL}/api/productsDb`);
  const items = (await responce.json()).products as Props[];
  console.log(items);

  return (
    <main className=" overflow-hidden">
      <h1 className="container mx-auto flex items-center">Home</h1>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-3 min-h-[fit-content]">
          <div className="grid grid-cols-3 gap-4">
            {items.map(
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
