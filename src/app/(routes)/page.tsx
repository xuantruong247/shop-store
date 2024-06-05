import getBillboard from "@/actions/get-billboard";
import getProduct from "@/actions/get-product";
import Billboard from "@/components/billboard";
import ProductList from "@/components/porduct-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProduct({
    isFeatured: true,
    categoryId: "",
    colorId: "",
    sizeId: "",
  });
  const billboard = await getBillboard("42f1b0f9-8000-4011-9b56-4522a8628421");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
