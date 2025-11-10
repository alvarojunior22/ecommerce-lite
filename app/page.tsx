import ProductList from "./components/ProductList/ProductList";

function page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>
      <ProductList />
    </main>
  );
}

export default page;
