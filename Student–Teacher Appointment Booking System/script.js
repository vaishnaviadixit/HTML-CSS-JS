let appointments = JSON.parse(localStorage.getItem('appointments')) || [];


const form = document.getElementById('bookingForm');
const list = document.getElementById('appointmentList');


form.addEventListener('submit', function(e) {
e.preventDefault();


const student = document.getElementById('studentName').value.trim();
const teacher = document.getElementById('teacherName').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;


if (!student || !teacher || !date || !time) return;


appointments.push({ student, teacher, date, time });
localStorage.setItem('appointments', JSON.stringify(appointments));


form.reset();
renderAppointments();
});


function renderAppointments() {
list.innerHTML = '';


appointments.forEach(app => {
const li = document.createElement('li');
li.textContent = `${app.student} → ${app.teacher} | ${app.date} at ${app.time}`;
list.appendChild(li);
});
}


renderAppointments();