import { jobApplicationSummary } from "./JobApplicationSummary";
import { createForm } from "./JobApplicationCreateForm";
import { jobApplicationListTable } from "./JobApplicationTable";
import { editJobApplicationForm } from "./JobApplicationEditForm";

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
  bodyContainer.appendChild(jobApplicationSummary());

  const formWithTable = document.createElement("div");
  formWithTable.className = "form-with-table";

  formWithTable.appendChild(createForm());
  formWithTable.appendChild(jobApplicationListTable());

  bodyContainer.appendChild(formWithTable);

  bodyContainer.appendChild(editJobApplicationForm());

  return bodyContainer;
}
