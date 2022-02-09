import styles from "./styles.module.scss";

import { BreadcrumbsPropTypes } from "../../../utils/constants";

const Breadcrumbs = ({ items }) => {
  return (
    <div className={styles.breadcrumbsContainer}>
      {items.map((item, index) => {
        return (
          <div
            key={`breadcrumb-item-${index}`}
            className={styles.breadcrumbItem}
          >
            {index > 0 && (
              <img src="/assets/icons/arrow_icon_gray.svg" alt="" />
            )}
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

Breadcrumbs.propTypes = BreadcrumbsPropTypes;

Breadcrumbs.defaultProps = {
  items: ["level one", "level two", "level three"],
};

export default Breadcrumbs;
