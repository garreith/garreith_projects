const input = document.getElementById("studentName");
const addButton = document.getElementById("addButton");
const sortButton = document.getElementById("sortButton");
const list = document.getElementById("studentList");
const total = document.getElementById("total");

let students = [];

function renderStudents() {
    list.innerHTML = "";

    students.forEach((student, index) => {
        const li = document.createElement("li");

        li.textContent = student + " ";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = () => {
            const newName = prompt("Enter new name:", student);

            if (newName === null) return;

            const trimmed = newName.trim();

            if (trimmed === "") {
                alert("Name cannot be empty.");
                return;
            }

            const exists = students.some((s, i) =>
                i !== index && s.toLowerCase() === trimmed.toLowerCase()
            );

            if (exists) {
                alert("Student already exists.");
                return;
            }

            students[index] = trimmed;
            renderStudents();
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => {
            students.splice(index, 1);
            renderStudents();
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        list.appendChild(li);
    });

    total.textContent = students.length;
}

addButton.onclick = () => {
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a student name.");
        return;
    }

    const exists = students.some(
        student => student.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
        alert("Student already exists.");
        return;
    }

    students.push(name);
    input.value = "";
    renderStudents();
};

sortButton.onclick = () => {
    students.sort((a, b) => a.localeCompare(b));
    renderStudents();
};