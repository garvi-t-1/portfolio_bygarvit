document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you can add code to handle form submission,
        // such as sending the form data to a server or displaying a success message.
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // For now, let's just reset the form
        form.reset();
    });
});
