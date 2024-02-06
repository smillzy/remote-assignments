// logIn Form

// To catch the input info.
const form = document.querySelector('form');
form.addEventListener('submit', postData);

/**
 * Handles form submit and sends a POST request.
 *
 * @param {Event} event - Form submit event.
 */
function postData(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/log-in', {
        method: 'POST', // type of req
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}