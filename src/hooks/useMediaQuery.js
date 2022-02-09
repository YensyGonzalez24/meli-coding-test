import useWindowSize from "./useWindowSize";

const useMediaQuery = (string) => {
  //Recieves sm:, md:, lg:, xl: as param

  let hasBreakpoints = false;
  const stringData = string.split(" ").reduce(
    (acum, curr) => {
      if (curr.charAt(2) !== ":") {
        acum.mobile.value.push(curr);
        // eslint-disable-next-line no-param-reassign
        acum.mobile.hasElements = true;
      } else if (acum[curr.slice(0, 2)] !== undefined) {
        acum[curr.slice(0, 2)].value.push(curr.slice(3));
        // eslint-disable-next-line no-param-reassign
        acum[curr.slice(0, 2)].hasElements = true;

        hasBreakpoints = true;
      }

      return acum;
    },
    {
      mobile: { order: 0, value: [], hasElements: false },
      sm: { order: 1, value: [], hasElements: false },
      md: { order: 2, value: [], hasElements: false },
      lg: { order: 3, value: [], hasElements: false },
      xl: { order: 4, value: [], hasElements: false },
    }
  );

  const { width } = useWindowSize(!hasBreakpoints);

  let size = "mobile";
  if (width >= 640) {
    size = "sm";
  }
  if (width >= 768) {
    size = "md";
  }
  if (width >= 1024) {
    size = "lg";
  }
  if (width >= 1280) {
    size = "xl";
  }

  const value = Object.values(stringData)
    .reverse()
    .find((curr) => {
      return curr.order <= stringData[size].order && curr.hasElements;
    });

  return value ? value.hasElements : false;
};

export default useMediaQuery;
