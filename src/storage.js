export function storeDataInLocalStorage(keyName, value) {
  localStorage.setItem(keyName, JSON.stringify(value));
}

export function fetchDataFromLocalStorage(keyName) {
  const storedData = localStorage.getItem("job_applications");
  return JSON.parse(storedData);
}
