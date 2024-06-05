import { Billboard } from "@/types";

const URL = `http://localhost:3000/api/stores/bd6e8049-e70e-404e-8810-d6af3476f719/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;
