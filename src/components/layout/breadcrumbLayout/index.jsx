import { BreadcrumbsLayoutPropTypes } from "../../../utils/constants";
import { Breadcrumbs } from "../../primitive";

import styles from "./styles.module.scss";

const BreadcrumbLayout = ({ breadcrumbsItems, children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Breadcrumbs items={breadcrumbsItems} />
      {children}
    </div>
  );
};

BreadcrumbLayout.propTypes = BreadcrumbsLayoutPropTypes;

BreadcrumbLayout.defaultProps = {
  items: ["This layout must be used only if there are breadcrumbs present"],
};

export default BreadcrumbLayout;
