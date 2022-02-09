import styles from "./styles.module.scss";
import {
  LOADING_LABEL,
  EMPTY_SET_LABEL,
  ResultLayoutPropTypes,
} from "../../../utils/constants";

const ResultLayout = ({ result }) => {
  if (result === "loading") {
    return <div className={styles.dynamicInfoPanel}>{LOADING_LABEL}</div>;
  }

  if (result === "emptySet") {
    return <div className={styles.dynamicInfoPanel}>{EMPTY_SET_LABEL}</div>;
  }

  return null;
};

ResultLayout.propTypes = ResultLayoutPropTypes;

export default ResultLayout;
