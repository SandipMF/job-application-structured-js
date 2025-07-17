import { jobApplicationSummary } from "./JobApplicationSummary";
import { createForm } from "./JobApplicationCreateForm.js";
import { jobApplicationListTable } from "./JobApplicationTable.js";
import { editJobApplicationForm } from "./JobApplicationEditForm.js";
import {
  deleteApplication,
  initializeState,
  subscribeToApplications,
} from "../../state.js";

export function App() {
  const bodyContainer = document.createElement("div");

  //   For NAV
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <div>
        <h1>Job Application Tracker System</h1>
    </div>
  `;
  bodyContainer.appendChild(nav);

  //   for Summary
  const jobApplicationSummaryDiv = document.createElement("div");
  bodyContainer.appendChild(jobApplicationSummaryDiv);

  // From with Table
  const formWithTable = document.createElement("div");
  formWithTable.className = "form-with-table";

  // Form
  formWithTable.appendChild(createForm());

  // Table
  const tableWrapper = document.createElement("div");
  tableWrapper.className = "application-list-section";
  formWithTable.appendChild(tableWrapper);

  subscribeToApplications((applications) => {
    // Table update
    const newTable = jobApplicationListTable(applications);
    tableWrapper.innerHTML = "";
    tableWrapper.appendChild(newTable);

    const newJob = jobApplicationSummary(applications);
    jobApplicationSummaryDiv.innerHTML = "";
    jobApplicationSummaryDiv.append(newJob);

    // For Edit btn
    newTable.querySelectorAll(".editBtn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = button.dataset.index;
        const application = applications[index];
        // Edit Form
        bodyContainer.appendChild(editJobApplicationForm(application, index));
      });
    });

    // Delete
    newTable.querySelectorAll(".deleteBtn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = button.dataset.index;
        const application = applications[index];
        if (confirm(`Delete application for ${application.company}?`)) {
          deleteApplication(application.id);
        }
      });
    });
  });

  bodyContainer.appendChild(formWithTable);

  initializeState();
  return bodyContainer;
}
