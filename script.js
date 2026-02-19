function sendMail() {
  // Prevent the form from submitting normally so the script can run
  event.preventDefault(); 

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_xgzr3ce";
  const templateID = "template_l157np2";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        // Manually redirect to the success page
        window.location.href = "popup.html";
    })
    .catch(err => console.log(err));
}