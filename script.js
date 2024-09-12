// document.addEventListener('DOMContentLoaded', function () {
//     function showSection(sectionId) {
//         // Hide all sections
//         document.querySelectorAll('.section').forEach(section => {
//             section.classList.add('hidden');
//         });

//         // Show the selected section
//         document.getElementById(sectionId).classList.remove('hidden');
//     }

//     // Attach click event to navigation links
//     document.querySelectorAll('nav ul li a').forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
//             showSection(sectionId);
//         });
//     });

//     // Show the login section by default
//     showSection('login');

//     // Handle login form submission
//     document.getElementById('loginForm').addEventListener('submit', function (e) {
//         e.preventDefault();
//         alert('Login successful!');
//         showSection('home');
//     });

//     // Handle contact form submission
//     document.getElementById('contactForm').addEventListener('submit', function (e) {
//         e.preventDefault();
//         alert('Your message has been sent successfully!');
//         this.reset();
//     });
// });