let reservations = JSON.parse(localStorage.getItem('reservations')) || [];


const form = document.getElementById('orderForm');
const list = document.getElementById('reservationList');


form.addEventListener('submit', function(e) {
e.preventDefault();


const name = document.getElementById('customerName').value.trim();
const email = document.getElementById('customerEmail').value.trim();
const date = document.getElementById('eventDate').value;
const guests = document.getElementById('guestCount').value;
const menu = document.getElementById('menuType').value;


if(!name || !email || !date || !guests || !menu) return;


reservations.push({ name, email, date, guests, menu });
localStorage.setItem('reservations', JSON.stringify(reservations));


form.reset();
renderReservations();
});


function renderReservations() {
list.innerHTML = '';


reservations.forEach(res => {
const li = document.createElement('li');
li.textContent = `${res.name} | ${res.email} | ${res.date} | Guests: ${res.guests} | Menu: ${res.menu}`;
list.appendChild(li);
});
}


renderReservations();