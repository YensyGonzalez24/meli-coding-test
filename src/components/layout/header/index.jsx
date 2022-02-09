import { Formik, Form, Field } from "formik";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useClickOutsideComponent } from "../../../hooks";
import { Routes, SEARCH_BAR_PLACEHOLDER } from "../../../utils/constants";
import styles from "./styles.module.scss";

const Header = () => {
  const isNotMobile = useMediaQuery("lg:");

  const [searchBarIsOpen, setSearchBarIsOpen] = useState(isNotMobile);

  const navigate = useNavigate();

  useEffect(() => {
    setSearchBarIsOpen(isNotMobile);
  }, [isNotMobile]);

  const componentRef = useRef(null);

  useClickOutsideComponent(componentRef, () => {
    setSearchBarIsOpen(false);
  });

  const handleSearchSubmit = (values, { setSubmitting }) => {
    if (searchBarIsOpen) {
      setSubmitting(true);

      navigate(Routes.SEARCH(values.searchValue));
    } else {
      setSearchBarIsOpen(true);
    }
  };

  return (
    <div ref={isNotMobile ? null : componentRef} className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="/assets/images/logo-mercadolibre.png"
          alt=""
        />
        <div
          className={`${styles.searchBar} ${searchBarIsOpen && styles.isOpen}`}
        >
          <Formik
            initialValues={{ searchValue: "" }}
            onSubmit={handleSearchSubmit}
          >
            {(values, isSubmitting) => (
              <Form>
                <Field
                  type="text"
                  name="searchValue"
                  value={values.searchValue}
                  className={styles.searchInput}
                  placeholder={SEARCH_BAR_PLACEHOLDER}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  <img src="/assets/icons/search_icon_black.svg" alt="search" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Header;
