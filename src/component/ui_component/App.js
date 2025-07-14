import { jobApplicationSummary } from "./JobApplicationSummary";
import { createForm } from "./JobApplicationCreateForm.js";
import { jobApplicationListTable } from "./JobApplicationTable.js";
import { editJobApplicationForm } from "./JobApplicationEditForm.js";
import { initializeState, subscribeToApplications } from "../state.js";

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
  jobApplicationSummaryDiv.className = "summary-row";
  // jobApplicationSummaryDiv.appendChild(jobApplicationSummaryDiv);
  bodyContainer.appendChild(jobApplicationSummaryDiv)//(jobApplicationSummary());

  // From with Table
  const formWithTable = document.createElement("div");
  formWithTable.className = "form-with-table";

  // Form
  formWithTable.appendChild(createForm());

  const tableWrapper = document.createElement("div");
  tableWrapper.className = "application-list-section";
  formWithTable.appendChild(tableWrapper);

  subscribeToApplications((applications) => {
    // Table
    const newTable = jobApplicationListTable(applications);
    tableWrapper.innerHTML = "";
    tableWrapper.appendChild(newTable);

    const newJob = jobApplicationSummary(applications);
    jobApplicationSummaryDiv.innerHTML = "";
    jobApplicationSummaryDiv.append(newJob);
  });

  bodyContainer.appendChild(formWithTable);

  // Edit Form
  bodyContainer.appendChild(editJobApplicationForm());

  initializeState();
  return bodyContainer;
}
