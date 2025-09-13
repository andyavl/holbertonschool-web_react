interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  { firstName: "Alice", lastName: "Johnson", age: 22, location: "New York" },
  { firstName: "Bob", lastName: "Smith", age: 24, location: "California" },
];

const table = document.createElement("table");

table.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
  ${studentsList.map(s => `<tr><td>${s.firstName}</td><td>${s.location}</td></tr>`).join("")}
`;

document.body.appendChild(table);
