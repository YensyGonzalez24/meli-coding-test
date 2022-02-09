import axios from "axios";

const getSearchItems = async (query) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}items?q=${query}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
};

const getItemDetails = async (itemId) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}items/${itemId}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
};

export { getItemDetails, getSearchItems };
