import { editApplication } from "../state";

export function editJobApplicationForm(editApplicationData, index) {
  const div = document.createElement("div");
  div.className = "edit-form";
  div.id = "editFormDiv";
  div.innerHTML = `
      <div class="edit-content">
        <h3>Edit Job Application</h3>
        <div class="edit-form-section">
          <form class="application-form" id="editApplicationForm">
            <div>
              <label>Company:</label>
              <input type="text" id="edit_company" />
            </div>
            <div>
              <label>Role:</label>
              <input type="text" id="edit_role" />
            </div>
            <div>
              <label>Type:</label>
              <select id="edit_jobType">
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
            <div id="edit_locationDiv">
              <label>Location:</label>
              <input type="text" id="edit_location" />
            </div>

            <div>
              <label>Date:</label>
              <input type="date" id="edit_date" />
            </div>
            <div>
              <label>Status:</label>
              <select id="edit_status">
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Rejected</option>
                <option>Hired</option>
              </select>
            </div>
            <div>
              <label>Note:</label>
              <textarea
                id="edit_note"
                rows="{3}"
                placeholder="Write your notes..."
              ></textarea>
            </div>
            <div>
              <button type="submit" class='updateBtn'>Update Application</button>
              <button type="button" class='cancelBtn' id='cancelEditForm'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
  `;
  div.style.display = "flex";

  const editForm = div.querySelector("#editApplicationForm");
  const jobTypeSelect = div.querySelector("#edit_jobType");
  const locationDiv = div.querySelector("#edit_locationDiv");
  const locationField = div.querySelector("#edit_location");

  const company = div.querySelector("#edit_company");
  const role = div.querySelector("#edit_role");
  const date = div.querySelector("#edit_date");
  const status = div.querySelector("#edit_status");
  const note = div.querySelector("#edit_note");

  // Set prefield application data
  company.value = editApplicationData.company;
  role.value = editApplicationData.role;
  jobTypeSelect.value = editApplicationData.jobType;
  locationField.value = editApplicationData.location;
  date.value = editApplicationData.date;
  status.value = editApplicationData.status;
  note.value = editApplicationData.note;

  // For handle location field
  jobTypeSelect.addEventListener("change", () => {
    const jobTypeSelectedValue = jobTypeSelect.value;
    if (jobTypeSelectedValue === "Onsite") {
      locationDiv.style.display = "flex";
      // locationField.required = true;
    } else {
      locationDiv.style.display = "none";
      // locationField.required = false;
    }
  });
  jobTypeSelect.dispatchEvent(new Event("change"));

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let errors = [];

    if (!company.value.trim()) errors.push("Company is required.");
    if (!role.value.trim()) errors.push("Role is required.");
    if (!jobTypeSelect.value) errors.push("Job Type is required.");
    if (!locationField.value.trim() && jobTypeSelect.value === "Onsite")
      errors.push(
        "Location is required if you select your job type as Onsite."
      );
    if (!date.value) errors.push("Date is required.");
    if (!status.value) errors.push("Status is required.");

    if (errors.length > 0) {
      alert("Please check this validation error: \n" + errors.join("\n"));
    } else {
      const editedApplication = {
        id: editApplicationData.id,
        company: company.value.trim(),
        role: role.value.trim(),
        jobType: jobType.value,
        location: jobType.value !== "Onsite" ? "" : locationField.value.trim(),
        date: date.value,
        status: status.value,
        note: note.value.trim(),
      };

      editApplication(editedApplication, index);

      div.style.display = "none";
    }
  });

  const cancelBtn = editForm.querySelector("#cancelEditForm");
  cancelBtn.addEventListener("click", () => {
    div.style.display = "none";
  });
  return div;
}
