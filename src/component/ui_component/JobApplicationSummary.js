export function jobApplicationSummary(applications) {
  const totalCount = applications.length;
  const appliedCount = applications.filter(
    (data) => data.status === "Applied"
  ).length;
  const interviewingCount = applications.filter(
    (data) => data.status === "Interviewing"
  ).length;
  const hiredCount = applications.filter(
    (data) => data.status === "Hired"
  ).length;
  const rejectedCount = applications.filter(
    (data) => data.status === "Rejected"
  ).length;
  const div = document.createElement("div");

  div.className = "summary-row";
  div.innerHTML = `
      <div class="indevidual-status">Job Application: ${totalCount}</div>
      <div class="indevidual-status">Applied: ${appliedCount}</div>
      <div class="indevidual-status">Interviewing: ${interviewingCount}</div>
      <div class="indevidual-status hired">Hired: ${hiredCount}</div>
      <div class="rejected">Rejected: ${rejectedCount}</div>
    `;

  return div;
}
