import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/config.js";

const productosRef = collection(db, "productos");

export const obtenerProductos = async () => {
  const respuesta = await getDocs(productosRef);

  return respuesta.docs.map((documento) => ({
    ...documento.data(),
    id: documento.id,
  }));
};

export const crearProducto = async (producto) => {
  const nuevoProducto = await addDoc(productosRef, producto);
  return { ...producto, id: nuevoProducto.id };
};

export const actualizarProducto = async (id, producto) => {
  await updateDoc(doc(db, "productos", id), producto);
  return { ...producto, id };
};

export const eliminarProducto = async (id) => {
  await deleteDoc(doc(db, "productos", id));
};
