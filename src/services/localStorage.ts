export const setLocalStorage = (itemName: string, data: string) => {
  localStorage.setItem(itemName, JSON.stringify(data) || "");
};

export const getLocalStorage = (item: string) => {
  const newItem = JSON.parse(localStorage.getItem(`${item}`) || "");
  return newItem;
};
