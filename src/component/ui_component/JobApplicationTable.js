export function jobApplicationListTable() {
  const div = document.createElement("div");

  div.className = "application-list-section";
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
            </tbody>
          </table>
        </div>
    `;

  return div;
}
