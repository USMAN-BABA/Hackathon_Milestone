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
    var resumeHTML = " \n\n<h2><b>Editable RESUME</b></h2>\n\n <h3>Personal Information</h3>\n  <p><b>Name:</b><span contentteditable = \"true\">".concat(name, "</span></p>  \n  <p><b>Email:</b><span contentteditable = \"true\">").concat(email, "</span></p> \n  <p><b>Phone:</b><span contentteditable = \"true\">").concat(phoneNumber, "</span></p>\n  \n  <h3>Education</h3> \n  <p contentteditable = \"true\">").concat(education, "</p> \n\n   <h3>Experience</h3>\n    <p contentteditable = \"true\">").concat(experience, "</span></p>  \n    \n    <h3>Skills</h3> \n    <p contentteditable = \"true\">").concat(skills, "</span></p>\n     ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Error");
    }
});
