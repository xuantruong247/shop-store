import { Product } from "@/types";
import qr from "query-string";

const URL = `http://localhost:3000/api/stores/bd6e8049-e70e-404e-8810-d6af3476f719/products`;

interface Query {
  categoryId: string;
  colorId: string;
  sizeId: string;
  isFeatured: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qr.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
