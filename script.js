// Show login options when login button is clicked
function showLoginOptions() {
    document.getElementById('initial-login').style.display = 'none';
    document.getElementById('login-options').style.display = 'block';
}

// Show specific login form based on role (user/admin/vendor)
function showLoginForm(role) {
    document.getElementById('login-options').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    
    // Update login title based on selected role
    const loginTitle = document.getElementById('login-title');
    loginTitle.textContent = role.charAt(0).toUpperCase() + role.slice(1) + ' Login';

    // Store the role for later use in login function
    document.getElementById('loginForm').setAttribute('data-role', role);
}

// Handle login submission
function handleLogin(event) {
    event.preventDefault();
    const role = document.getElementById('loginForm').getAttribute('data-role');

    // Simple login simulation
    alert(role + ' logged in successfully!');

    // Hide login form and show dashboard
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Show product update section only for vendors
    if (role === 'vendor') {
        document.getElementById('product-update').style.display = 'block';
    }
    initializeFullCalendar();
}
// Show event date picker section for admin/vendor
if (role === 'admin' || role === 'vendor') {
    document.getElementById('event-date-picker').style.display = 'block';
}

// Initialize FullCalendar after login
initializeFullCalendar();


// Initialize FullCalendar with necessary plugins and features
let calendar;
function initializeFullCalendar() {
var calendarEl = document.getElementById('fullCalendar');

calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Default view is monthly
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        { title: 'Wedding Expo', date: '2024-09-25' },
        { title: 'Corporate Seminar', date: '2024-10-05' },
        { title: 'Music Festival', date: '2024-10-18' }
    ]
});

calendar.render();
}

// Function to add event to FullCalendar dynamically
function addEventToCalendar(event) {
event.preventDefault();
const eventTitle = document.getElementById('eventTitle').value;
const eventDate = document.getElementById('eventDate').value;

if (eventTitle && eventDate) {
    // Add the new event to the calendar
    calendar.addEvent({
        title: eventTitle,
        date: eventDate
    });

    alert('Event added successfully!');
} else {
    alert('Please enter both title and date for the event.');
}
}

// Product update handling for vendors
function updateProduct(event) {
    event.preventDefault();
    alert("Product updated successfully!");
}

window.onload = function() {
    // Initialize empty dashboard or other functions on load if needed
};
