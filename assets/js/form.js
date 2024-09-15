document.getElementById("contact-form").addEventListener("submit", async function(event) {
    var submitButton = document.getElementById('submit');
        
        // Disable the button and change text
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';

    event.preventDefault(); // Prevent the default form submission


    // Collect form data
    const formData = new FormData(this);

    // Send the form data to Web3Forms using fetch
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Redirect to your custom success page
      window.location.href = "/thank-you/";
    } else {
      alert('There was an error submitting the form. Please try again.');
    }
  });