import styles from "./App.module.scss";
import MainLayout from "./components/layout/mainLayout";
import { Routes, Route } from "react-router-dom";

import ItemPage from "./pages/itemPage";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div className={styles.App}>
      <MainLayout>
        <Routes>
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/items" element={<SearchPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
