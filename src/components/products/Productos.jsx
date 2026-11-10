import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config.js";

export const obtenerProductos = async () => {
  const productosRef = collection(db, "productos");
  const respuesta = await getDocs(productosRef);

  return respuesta.docs.map((documento) => ({
    ...documento.data(),
    id: documento.id,
  }));
};
