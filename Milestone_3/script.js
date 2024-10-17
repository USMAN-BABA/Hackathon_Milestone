var form = document.getElementById("resume-builder");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var phoneNumber = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = " \n\n<h2><b>RESUME</b></h2>\n\n <h3>Personal Information</h3>\n  <p><b>Name:</b>".concat(name, "</p>  \n  <p><b>Email:</b>").concat(email, "</p> \n  <p><b>Phone:</b>").concat(phoneNumber, "</p>\n  \n  <h3>Education</h3> \n  <p>").concat(education, "</p> \n\n   <h3>Experience</h3>\n    <p>").concat(experience, "</p>  \n    \n    <h3>Skills</h3> \n    <p>").concat(skills, "</p>\n     ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Error");
    }
});
