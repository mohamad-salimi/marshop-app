import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from "./Layout.module.css";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to={"/products"}>MarShop</Link>
        <Link to={"/checkout"}>
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      <div className={styles.children}>{children}</div>
      <footer className={styles.footer}>
        Developed by{" "}
        <Link to={"https://github.com/mohamad-salimi"}>Mohamad</Link> by 💙
      </footer>
    </div>
  );
}

export default Layout;
