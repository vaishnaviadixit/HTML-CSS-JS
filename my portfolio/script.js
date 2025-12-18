function scrollToSection(id) {
document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');


form.addEventListener('submit', e => {
e.preventDefault();
successMsg.textContent = "Message sent successfully!";
form.reset();
});