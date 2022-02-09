import { useEffect, useState } from "react";
import { BreadcrumbLayout } from "../../components/layout";
import { ItemList } from "../../components/pages/searchPage";
import { getSearchItems } from "../../utils/api";
import { useQuery } from "../../utils/utils";
import { ResultLayout } from "../../components/layout";

const SearchPage = () => {
  const query = useQuery();
  const searchValue = query.get("search");

  const [items, setItems] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchItems(searchValue);

      if (data) {
        setItems(data.items);
        setBreadcrumbs(data.categories);
      } else {
        setItems([]);
      }
    };

    getData();
  }, [searchValue]);

  if (!items) {
    return <ResultLayout renderResult="loading" />;
  }

  if (items.length === 0) {
    return <ResultLayout renderResult="emptySet" />;
  }

  return (
    <BreadcrumbLayout breadcrumbsItems={breadcrumbs}>
      <ItemList items={items} />
    </BreadcrumbLayout>
  );
};

export default SearchPage;
