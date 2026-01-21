import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/service/products/product.service";

export default async function Home() {
  // Server-side fetch (SSR)
  const products = await getProducts()

  return (
    <main className="grid grid-cols-3 gap-6 p-8">
      <div>hola</div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </main>
  )
}