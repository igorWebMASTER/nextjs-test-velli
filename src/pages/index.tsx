import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Search } from "@/components/Search";

export default function Home() {
  const onDoSearch = () => {
    console.log("Searching...")
  }
  return (
    <>
      <Header />
      <main className="my-8 mx-40">
        <Search doSearch={onDoSearch} /> 
        <div className="container mx-auto px-6 mt-10">
          <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
          <p className="text-gray-500 font-medium">200+ Products</p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
