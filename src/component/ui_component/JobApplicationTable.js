export function jobApplicationListTable(applicationsDataArr) {
  const div = document.createElement("div");

  // div.className = "application-list-section";
  div.innerHTML = `
        <h3>Job Application Table</h3>
        <div>
          <table class="application-list-table" id="applicationListTable">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <!-- Dynamic row -->
              ${applicationsDataArr
                .map((data, index) => {
                  return `
                <tr data-id="${data.id}">
                  <td>${data.company}</td>
                  <td>${data.role}</td>
                  <td>${data.jobType}</td>
                  <td>${data.status}</td>
                  <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                  </td>
                </tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </div>
    `;

  return div;
}
