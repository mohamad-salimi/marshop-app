import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useSelector } from "react-redux";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
