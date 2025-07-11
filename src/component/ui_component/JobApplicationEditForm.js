export function editJobApplicationForm() {
  const div = document.createElement("div");
  div.className = "edit-form";
  div.id = "editFormDiv";
  div.innerHTML = `
      <div class="edit-content">
        <h3>Edit Job Application</h3>
        <div class="form-section">
          <form class="application-form" id="editApplicationForm">
            <div>
              <label>Company:</label>
              <input type="text" id="edit_company" required />
            </div>
            <div>
              <label>Role:</label>
              <input type="text" id="edit_role" required />
            </div>
            <div>
              <label>Type:</label>
              <select id="edit_jobType" required>
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
            <div id="edit_locationDiv">
              <label>Location:</label>
              <input type="text" id="edit_location" required />
            </div>

            <div>
              <label>Date:</label>
              <input type="date" id="edit_date" />
            </div>
            <div>
              <label>Status:</label>
              <select id="edit_status" required>
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

            <button type="submit">Update Application</button>
            <button type="button" onclick="closeEditForm()">Cancel</button>
          </form>
        </div>
      </div>
  `;
  return div;
}
