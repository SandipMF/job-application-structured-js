import "./style.css";
import {App} from "./component/ui_component/App.js";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = ""; // Clear body if needed
  document.body.appendChild(App());

  // Then initialize event listeners
});
