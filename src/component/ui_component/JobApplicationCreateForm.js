export function createForm() {
  const div = document.createElement("div");

  div.className = "form-section";

  div.innerHTML = `
        <h3>Application Form</h3>
        <form class="application-form" id="createApplicationForm">
          <div>
            <label>Company:</label>
            <input type="text" id="company" required />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" id="role" required />
          </div>
          <div>
            <label>Type:</label>
            <select id="jobType" required>
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div id="locationDiv">
            <label>Location:</label>
            <input type="text" id="location" required />
          </div>

          <div>
            <label>Date:</label>
            <input type="date" id="date" required />
          </div>
          <div>
            <label>Status:</label>
            <select id="status" required>
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
  return div;
}
