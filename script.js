// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the button element
    const demoButton = document.getElementById('demoButton');
    
    // Add event listener for button clicks
    demoButton.addEventListener('click', function() {
        // Push the event into the dataLayer for Google Tag Manager
        dataLayer.push({
            'event': 'buttonClick',
            'buttonId': 'demoButton',
            'buttonName': 'Click Me'
        });

        // Optional: Log the event to console for debugging
        console.log('GA Event Triggered: buttonClick');
    });

});
