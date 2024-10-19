var form = document.getElementById("resume-builder");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("downlond-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var phoneNumber = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = { name: name, email: email, phoneNumber: phoneNumber, education: education, experience: experience, skills: skills };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    var resumeHTML = " \n\n<h2><b>Editable RESUME</b></h2>\n\n <h3>Personal Information</h3>\n  <p><b>Name:</b><span contentteditable = \"true\">".concat(name, "</span></p>  \n  <p><b>Email:</b><span contentteditable = \"true\">").concat(email, "</span></p> \n  <p><b>Phone:</b><span contentteditable = \"true\">").concat(phoneNumber, "</span></p>\n  \n  <h3>Education</h3> \n  <p contentteditable = \"true\">").concat(education, "</p> \n\n   <h3>Experience</h3>\n    <p contentteditable = \"true\">").concat(experience, "</span></p>  \n    \n    <h3>Skills</h3> \n    <p contentteditable = \"true\">").concat(skills, "</span></p>\n     ");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableUrl = "".concat(window.location.origin, "?username=").concat(encodeURIComponent);
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableUrl;
    shareableLinkElement.textContent = shareableUrl;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('Phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
