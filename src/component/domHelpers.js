export function renderApplicationListData(applicationsDataArr) {
  const tbody = document.querySelector("#applicationListTable tbody");
  tbody.innerHTML = "";

  applicationsDataArr.forEach((data, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `<td>${data.company}</td>
    <td>${data.role}</td>
    <td>${data.jobType}</td>
    <td>${data.status}</td>
    <td>
        <button class="editBtn" onClick="onClickEditBtn(${index})">Edit</button>
        <button class="deleteBtn" onClick="onClickDeleteBtn(${index})">Delete</button>
    </td>
    `;

    tbody.appendChild(row);
  });
}
