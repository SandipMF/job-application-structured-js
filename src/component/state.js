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

// Get current state (read-only)
export function getApplications() {
  return appState.applications;
}
