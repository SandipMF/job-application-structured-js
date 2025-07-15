import { addApplication } from "../state";

export function createForm() {
  const div = document.createElement("div");

  div.className = "form-section";

  div.innerHTML = `
        <h3>Application Form</h3>
        <form class="application-form" id="createApplicationForm">
          <div>
            <label>Company:</label>
            <input type="text" id="company" />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" id="role" />
          </div>
          <div>
            <label>Type:</label>
            <select id="jobType">
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div id="locationDiv">
            <label>Location:</label>
            <input type="text" id="location" />
          </div>

          <div>
            <label>Date:</label>
            <input type="date" id="date"/>
          </div>
          <div>
            <label>Status:</label>
            <select id="status" >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Rejected</option>
              <option>Hired</option>
            </select>
          </div>
          <div>
            <label>Note:</label>
            <textarea
              id="note"
              rows="3"
              placeholder="Write your notes..."
            ></textarea>
          </div>
          <div class="div-footer-button-container">
            <button class="submitBtn" type="submit">Submit</button>
          </div>
        </form>
    `;

  // Handle Location Div
  const applicationForm = div.querySelector("#createApplicationForm");
  const jobTypeSelect = div.querySelector("#jobType");
  const locationDiv = div.querySelector("#locationDiv");
  const locationField = div.querySelector("#location");

  jobTypeSelect.addEventListener("change", () => {
    const jobTypeSelectedValue = jobTypeSelect.value;
    if (jobTypeSelectedValue === "Onsite") {
      locationDiv.style.display = "flex";
      locationField.required = true;
    } else {
      locationDiv.style.display = "none";
      locationField.required = false;
    }
  });

  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const company = applicationForm.querySelector("#company").value.trim();
    const role = applicationForm.querySelector("#role").value.trim();
    const jobType = applicationForm.querySelector("#jobType").value;
    const location = applicationForm.querySelector("#location").value.trim();
    const date = applicationForm.querySelector("#date").value;
    const status = applicationForm.querySelector("#status").value;
    const note = applicationForm.querySelector("#note").value.trim();

    let errors = [];

    if (!company) errors.push("Company is required.");
    if (!role) errors.push("Role is required.");
    if (!jobType) errors.push("Job Type is required.");
    if (!location && jobType === "Onsite")
      errors.push(
        "Location is required if you select your job type as Onsite."
      );
    if (!date) errors.push("Date is required.");
    if (!status) errors.push("Status is required.");

    if (errors.length > 0) {
      alert("Please check this validation error: \n" + errors.join("\n"));
    } else {
      const newApplication = {
        id: crypto.randomUUID(),
        company: company,
        role: role,
        jobType: jobType,
        location: jobType !== "Onsite" ? "" : location,
        date: date,
        status: status,
        note: note,
      };

      addApplication(newApplication);

      applicationForm.reset();

      applicationForm
        .querySelector("#jobType")
        .dispatchEvent(new Event("change"));
    }
  });

  return div;
}
