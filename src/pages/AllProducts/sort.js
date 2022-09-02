export const sortFunc = (sortSelected, data) => {
  let copy = null;
  switch (sortSelected) {
    case '이름순':
      copy = [...data];
      copy.sort((a, b) => {
        if (a.productName < b.productName) {
          return -1;
        } else if (a.grade > b.grade) {
          return 1;
        } else {
          return 0;
        }
      });
      return copy;
    case '한도순':
      copy = [...data];
      copy.sort((a, b) => b.supporterAmount - a.supporterAmount);
      return copy;
    default:
      return data;
  }
};
