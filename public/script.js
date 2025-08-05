const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const student = {
    name: form.name.value,
    age: form.age.value,
    course: form.course.value,
    city: form.city.value,
    email: form.email.value,
  };

  const res = await fetch('/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

  const data = await res.json();
  form.reset();
  loadStudents();
});

async function loadStudents() {
  const res = await fetch('/api/students');
  const students = await res.json();

  studentList.innerHTML = '';
  students.forEach((s) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${s.name}</strong> (${s.course}) - ${s.email}
      <button onclick="deleteStudent('${s._id}')">Delete</button>
    `;
    studentList.appendChild(li);
  });
}

async function deleteStudent(id) {
  await fetch(`/api/students/${id}`, { method: 'DELETE' });
  loadStudents();
}

loadStudents();
