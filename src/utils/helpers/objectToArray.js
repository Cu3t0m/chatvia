export const objectToArr = (obj, res) => {
  for (let key in res) {
    obj.push({
      ...res[key],
      id: key,
    });
  }
};
