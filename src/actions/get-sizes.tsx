import { Size } from "@/types";

const URL = `http://localhost:3000/api/stores/bd6e8049-e70e-404e-8810-d6af3476f719/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
