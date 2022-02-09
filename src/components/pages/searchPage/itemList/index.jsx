import styles from "./styles.module.scss";
import { ItemListPropTypes } from "../../../../utils/constants";
import Item from "../item";

const ItemList = ({ items }) => {
  const itemList = items.map((item, key) => (
    <Item key={`list-item-${key}`} item={item} />
  ));

  return <div className={styles.listContainer}>{itemList}</div>;
};

ItemList.propTypes = ItemListPropTypes;

ItemList.defaultProps = {
  items: [
    {
      id: "1",
      img: "",
      title: "ipod gen 1",
      price: {
        currency: "COP",
        amount: 500000,
        decimals: 0,
      },
      condition: "new",
      hasFreeShipping: true,
    },
    {
      id: "2",
      img: "",
      title: "ipod gen 2",
      price: {
        currency: "COP",
        amount: 750000,
        decimals: 0,
      },
      condition: "used",
      hasFreeShipping: false,
    },
  ],
};

export default ItemList;
