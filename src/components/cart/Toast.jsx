import { useCart } from "../../context/CartContext";
import style from "./Toast.module.css";

const Toast = () => {
  const { aviso } = useCart();

  return (
    <div className={style.contenedor} role="status" aria-live="polite">
      {aviso && (
        <div key={aviso.id} className={style.toast}> {aviso.texto} ✓ </div>
      )}
    </div>
  );
};

export default Toast;