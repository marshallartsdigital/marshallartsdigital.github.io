function buyTickets() {
    // Redirect to ticket purchase page or handle ticket purchase
    window.location.href = 'https://marshall-arts.com/current-tours'; // Replace with actual ticket purchase URL
}

function toggleEventDetails(eventElement) {
    const eventDetails = eventElement.querySelector('.event-details');
    eventDetails.style.display = eventDetails.style.display === 'block' ? 'none' : 'block';
}

