import styles from "./styles.module.scss";
import {
  FREE_SHIPPING_LABEL,
  ItemDetailPropTypes,
  NEW_ITEM_LABEL,
  PRODUCT_DESCRIPTION_TITLE,
  PURCHASE_BUTTON_LABEL,
  SOLD_ITEM_COUNT_LABEL,
  USED_ITEM_LABEL,
} from "../../../../utils/constants";
import { Button } from "../../../primitive";
import { useState } from "react";

const ItemDetail = ({ detail }) => {
  const {
    id,
    title,
    price,
    picture: img,
    condition,
    free_shipping: hasFreeShipping,
    sold_quantity: soldQuantity,
    description,
  } = detail;
  const { currency, amount, decimals } = price;

  const [purchaseIsLoading, setPurchaseIsLoading] = useState(false);

  const handleItemPurchase = () => {
    setPurchaseIsLoading(true);

    setTimeout(() => {
      setPurchaseIsLoading(false);
      alert(`Purchase Complete of item with id: ${id}`);
    }, 5000);
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.mainInfo}>
        <div className={styles.itemImage}>
          <img src={img} alt="" />
        </div>
        <div className={styles.itemInfo}>
          <span>{`${
            condition === "New" ? NEW_ITEM_LABEL : USED_ITEM_LABEL
          } - ${soldQuantity} ${SOLD_ITEM_COUNT_LABEL}`}</span>
          <h1>{title}</h1>
          <div className={styles.itemPricing}>
            <h2>
              {`${currency} ${amount}`}
              <span className={styles.pricingDecimals}>{decimals}</span>
            </h2>
            {hasFreeShipping && (
              <div className={styles.freeShippingIcon}>
                {FREE_SHIPPING_LABEL}
              </div>
            )}
          </div>
          <Button
            isLoading={purchaseIsLoading}
            handleOnClick={handleItemPurchase}
          >
            {PURCHASE_BUTTON_LABEL}
          </Button>
        </div>
      </div>
      <div className={styles.itemDescription}>
        <span className={styles.descriptionTitle}>
          {PRODUCT_DESCRIPTION_TITLE}
        </span>
        <span className={styles.descriptionBody}>{description}</span>
      </div>
    </div>
  );
};

ItemDetail.propTypes = ItemDetailPropTypes;

ItemDetail.defaultProps = {
  detail: {
    id: "1",
    img: "",
    title: "ipod gen 1",
    price: {
      currency: "COP",
      amount: 500000,
      decimals: 0,
    },
    condition: "New",
    hasFreeShipping: true,
    soldQuantity: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};

export default ItemDetail;
