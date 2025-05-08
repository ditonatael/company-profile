import ProductCard from "../ProductCard";
import SkeletonCard from "../SkeletonCard";
import { Suspense } from "react";
import { handleGetProduct } from "~/lib/api";

export default async function ProductList() {
  const products = await handleGetProduct();
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <Suspense fallback={<SkeletonCard />}>
          <div className="flex flex-wrap justify-center gap-6">
            {products?.data.map((item: string, i: number) => {
              return <ProductCard key={i} item={item} />;
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
