export function jobApplicationSummary() {
  const div = document.createElement("div");

  div.className = "summary-row";
  div.innerHTML = `
      <div class="indevidual-status">Job Application: 0</div>
      <div class="indevidual-status">Applied: 0</div>
      <div class="indevidual-status">Interviewing: 0</div>
      <div class="indevidual-status hired">Hired: 0</div>
      <div class="rejected">Rejected: 0</div>
    `;

  return div;
}
