export function loadApplicationData() {
  const storedData = localStorage.getItem("job_applications");

  return storedData ? JSON.parse(storedData) : [];
}

export function storeApplicationData() {
  localStorage.setItem("job_applications", JSON.stringify(applicationsDataArr));
}
