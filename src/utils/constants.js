import PropTypes from "prop-types";

const Routes = {
  HOME: "/",
  SEARCH: (query) => `/items?search=${query}`,
  ITEM_DETAILS: (id) => `/items/${id}`,
};

/* --- Messages --- */

const SEARCH_BAR_PLACEHOLDER = "Nunca dejes de buscar";

const SOLD_ITEM_COUNT_LABEL = "Vendidos";

const NEW_ITEM_LABEL = "Nuevo";

const USED_ITEM_LABEL = "Usado";

const NO_CONDITION_ADDED_LABEL = "Sin Especificar";

const PURCHASE_BUTTON_LABEL = "Comprar";

const PRODUCT_DESCRIPTION_TITLE = "Descripción del producto";

const FREE_SHIPPING_LABEL = "Envio Gratis";

const FREE_SHIPPING_SHORTHAND_LABEL = "EG";

const LOADING_LABEL = "Cargando Resultado";

const EMPTY_SET_LABEL =
  "No se encontraron resultados para su busqueda, inentelo de nuevo";

/* --- Component PropTypes --- */

const BreadcrumbsPropTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const BreadcrumbsLayoutPropTypes = {
  ...BreadcrumbsPropTypes,
  children: PropTypes.node,
};

const ItemPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number,
    }),
    img: PropTypes.string,
    condition: PropTypes.oneOf(["New", "PreOwned", "NotSpecified"]),
    hasFreeShipping: PropTypes.bool,
  }),
};

const ItemListPropTypes = {
  items: PropTypes.arrayOf(ItemPropTypes.item),
};

const ItemDetailPropTypes = {
  detail: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number,
    }),
    img: PropTypes.string,
    condition: PropTypes.oneOf(["New", "PreOwned", "NotSpecified"]),
    hasFreeShipping: PropTypes.bool,
    soldQuantity: PropTypes.number,
    description: PropTypes.string,
  }),
};

const ButtonPropTypes = {
  children: PropTypes.node,
  handleOnClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const ResultLayoutPropTypes = {
  renderResult: PropTypes.oneOf(["emptySet", "loading"]),
};

export {
  Routes,
  SEARCH_BAR_PLACEHOLDER,
  SOLD_ITEM_COUNT_LABEL,
  NEW_ITEM_LABEL,
  USED_ITEM_LABEL,
  NO_CONDITION_ADDED_LABEL,
  PURCHASE_BUTTON_LABEL,
  PRODUCT_DESCRIPTION_TITLE,
  FREE_SHIPPING_LABEL,
  FREE_SHIPPING_SHORTHAND_LABEL,
  LOADING_LABEL,
  EMPTY_SET_LABEL,
  BreadcrumbsPropTypes,
  BreadcrumbsLayoutPropTypes,
  ItemListPropTypes,
  ItemPropTypes,
  ItemDetailPropTypes,
  ButtonPropTypes,
  ResultLayoutPropTypes,
};
