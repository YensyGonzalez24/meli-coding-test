import { useEffect, useState } from "react";
import { BreadcrumbLayout } from "../../components/layout";
import { ItemDetail } from "../../components/pages/itemPage";
import { useParams } from "react-router-dom";
import { getItemDetails } from "../../utils/api";
import { ResultLayout } from "../../components/layout";

const ItemPage = () => {
  const { id: itemId } = useParams();

  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getItemDetails(itemId);

      if (data) {
        setItemData(data.item);
      } else {
        setItemData("");
      }
    };

    getData();
  }, [itemId]);

  if (!itemData) {
    return <ResultLayout renderResult="loading" />;
  }

  if (itemData === "") {
    return <ResultLayout renderResult="emptySet" />;
  }
  return (
    <BreadcrumbLayout>
      <ItemDetail detail={itemData} />
    </BreadcrumbLayout>
  );
};

export default ItemPage;
