import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoPricetag } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./ProductDetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) =>
    state.product.products?.find((i) => i.id === +id)
  );

  useEffect(() => {
    if (!productDetails) {
      dispatch(fetchProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
