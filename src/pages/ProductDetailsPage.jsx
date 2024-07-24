import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../context/ProductContext";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoPricetag } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const productDetails = useProductsDetails(+id);

  return (
    <>
      {!productDetails ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <img src={productDetails.image} />
          <div className={styles.information}>
            <h3 className={styles.title}>{productDetails.title}</h3>
            <p className={styles.description}>{productDetails.description}</p>
            <p className={styles.category}>
              <SiOpenproject /> {productDetails.category}
            </p>
            <div>
              <span className={styles.price}>
                <IoPricetag />
                {productDetails.price} $
              </span>
              <Link to={"/products"}>
                <FaArrowLeft />
                <span>Back to Shop</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetailsPage;
