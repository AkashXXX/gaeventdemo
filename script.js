// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Select elements
    const demoButton1 = document.getElementById('demoButton1');
    const demoButton2 = document.getElementById('demoButton2');
    const demoLink = document.getElementById('demoLink');
    const demoForm = document.getElementById('demoForm');
    const demoImage = document.getElementById('demoImage');
    
    // Button 1 Click Event
    demoButton1.addEventListener('click', function() {
        dataLayer.push({
            'event': 'buttonClick',
            'buttonId': 'demoButton1',
            'buttonName': 'Button 1'
        });
        console.log('GA Event Triggered: buttonClick for Button 1');
    });

    // Button 2 Click Event
    demoButton2.addEventListener('click', function() {
        dataLayer.push({
            'event': 'buttonClick',
            'buttonId': 'demoButton2',
            'buttonName': 'Button 2'
        });
        console.log('GA Event Triggered: buttonClick for Button 2');
    });

    // Link Click Event
    demoLink.addEventListener('click', function() {
        dataLayer.push({
            'event': 'linkClick',
            'linkId': 'demoLink',
            'linkUrl': 'https://www.google.com'
        });
        console.log('GA Event Triggered: linkClick for Google');
    });

    // Form Submission Event
    demoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from actually submitting
        dataLayer.push({
            'event': 'formSubmit',
            'formId': 'demoForm',
            'formFields': {
                'name': document.getElementById('name').value,
                'email': document.getElementById('email').value
            }
        });
        console.log('GA Event Triggered: formSubmit');
        alert("Form Submitted!");
    });

    // Image Click Event
    demoImage.addEventListener('click', function() {
        dataLayer.push({
            'event': 'imageClick',
            'imageId': 'demoImage',
            'imageAlt': 'Demo Image'
        });
        console.log('GA Event Triggered: imageClick');
    });

});
