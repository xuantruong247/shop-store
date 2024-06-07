import { Category } from "@/types";

const URL = `http://localhost:3000/api/stores/bd6e8049-e70e-404e-8810-d6af3476f719/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  
  // Kiểm tra phản hồi để đảm bảo nó là đối tượng duy nhất
  const category: Category = await res.json();
  return category;
};

export default getCategory;
