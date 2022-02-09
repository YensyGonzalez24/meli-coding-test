import styles from "./styles.module.scss";

import Header from "../header";

const MainLayout = (props) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {props.children}
    </div>
  );
};

export default MainLayout;
