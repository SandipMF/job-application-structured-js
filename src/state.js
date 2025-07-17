import { fetchDataFromLocalStorage, storeDataInLocalStorage } from "./storage";

const state = {
  applications: [],
  listeners: [],
};

export const appState = new Proxy(state, {
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "applications") {
      // notify all listeners
      target.listeners.forEach((fn) => fn(value));
    }
    return true;
  },
});

// Allow components to subscribe to state changes
export function subscribeToApplications(callback) {
  appState.listeners.push(callback);
}

// Initialize from localStorage
export function initializeState() {
  const stored = fetchDataFromLocalStorage("job_applications");
  appState.applications = stored ? stored : [];
}

// Add new application
export function addApplication(newApplication) {
  appState.applications = [...appState.applications, newApplication];
  storeDataInLocalStorage("job_applications", appState.applications);
}

// Delete appliction
export function deleteApplication(id) {
  appState.applications = appState.applications.filter((app) => app.id !== id);
  storeDataInLocalStorage("job_applications", appState.applications);
}

// Edit application
export function editApplication(applicationData, index) {
  const updatedApplications = [...appState.applications];

  updatedApplications[index] = applicationData;

  appState.applications = updatedApplications;
  storeDataInLocalStorage("job_applications", updatedApplications);
}

// Get current state (read-only)
export function getApplications() {
  return appState.applications;
}
