import { ButtonPropTypes } from "../../../utils/constants";
import styles from "./styles.module.scss";

const Button = ({ children, handleOnClick, isLoading }) => {
  const getStyle = () => {
    if (isLoading) {
      return styles.isLoading;
    }

    return "";
  };

  return (
    <div className={`${styles.mlButton} ${getStyle()}`} onClick={handleOnClick}>
      {isLoading ? (
        <span className={styles.loader}>
          <span />
        </span>
      ) : (
        children
      )}
    </div>
  );
};

Button.propTypes = ButtonPropTypes;

Button.defaultProps = {
  handleOnClick: () => {},
};

export default Button;
