import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  FREE_SHIPPING_SHORTHAND_LABEL,
  ItemPropTypes,
  NEW_ITEM_LABEL,
  Routes,
  USED_ITEM_LABEL,
  NO_CONDITION_ADDED_LABEL,
} from "../../../../utils/constants";

const Item = ({ item }) => {
  const {
    id,
    title,
    price,
    picture: img,
    condition,
    free_shipping: hasFreeShipping,
  } = item;
  const { currency, amount, decimals } = price;

  return (
    <Link to={Routes.ITEM_DETAILS(id)} className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <img src={img} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.mainInfo}>
          <div className={styles.itemPricing}>
            <span>
              {`${currency} ${amount}`}
              <span className={styles.pricingDecimals}>{decimals}</span>
            </span>
            {hasFreeShipping && (
              <div className={styles.freeShippingIcon}>
                {FREE_SHIPPING_SHORTHAND_LABEL}
              </div>
            )}
          </div>
          <span className={styles.itemTitle}>{title}</span>
        </div>
        <span className={styles.additionalInfo}>
          {condition === "New"
            ? NEW_ITEM_LABEL
            : "PreOwned"
            ? USED_ITEM_LABEL
            : NO_CONDITION_ADDED_LABEL}
        </span>
      </div>
    </Link>
  );
};

Item.propTypes = ItemPropTypes;

export default Item;
