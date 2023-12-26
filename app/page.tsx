import ProductsList from "./components/products/ProductsList";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <h1 className="container mx-auto flex items-center">Home</h1>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-3 min-h-[fit-content]">
          <ProductsList />
        </div>
      </div>
    </main>
  );
}
