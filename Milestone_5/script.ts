const form = document.getElementById("resume-builder") as HTMLFormElement

const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement

const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement

const downloadPdfButton = document.getElementById("downlond-pdf") as HTMLButtonElement

form.addEventListener("submit", (event :Event) => {
    event.preventDefault();

const name =(document.getElementById('name') as HTMLInputElement).value

const email =(document.getElementById('Email') as HTMLInputElement).value

const phoneNumber =(document.getElementById('phone') as HTMLInputElement).value

const education =(document.getElementById('education') as HTMLInputElement).value

const experience =(document.getElementById('work-experience') as HTMLInputElement).value

const skills =(document.getElementById('skills') as HTMLInputElement).value

const resumeData = { name,email,phoneNumber,education,experience,skills }
localStorage.setItem("resumeData", JSON.stringify(resumeData))


const resumeHTML = ` 

<h2><b>Editable RESUME</b></h2>

 <h3>Personal Information</h3>
  <p><b>Name:</b><span contentteditable = "true">${name}</span></p>  
  <p><b>Email:</b><span contentteditable = "true">${email}</span></p> 
  <p><b>Phone:</b><span contentteditable = "true">${phoneNumber}</span></p>
  
  <h3>Education</h3> 
  <p contentteditable = "true">${education}</p> 

   <h3>Experience</h3>
    <p contentteditable = "true">${experience}</span></p>  
    
    <h3>Skills</h3> 
    <p contentteditable = "true">${skills}</span></p>
     `;

   
        resumeDisplayElement.innerHTML =  resumeHTML
       

        const shareableUrl = 
        `${window.location.origin}?username=${encodeURIComponent}`;

        shareableLinkContainer.style.display = "block";
        shareableLinkElement.href = shareableUrl;
        shareableLinkElement.textContent = shareableUrl;
        

});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
    });
    
    // Prefill the form based on the username in the URL
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
  
    if (username) {
      // Autofill form if data is found in localStorage
  const savedResumeData = localStorage.getItem(username);
  
  if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
  resumeData.name;
  (document.getElementById('email') as HTMLInputElement).value =
  resumeData.email;
  (document.getElementById('Phone') as HTMLInputElement).value =
  resumeData.phone;
  (document.getElementById('education') as HTMLTextAreaElement).value =
  resumeData.education;
  (document.getElementById('experience') as HTMLTextAreaElement).value
  = resumeData.experience;
  (document.getElementById('skills') as HTMLTextAreaElement).value =
  resumeData.skills;
  }
  }
  });
  
  
  
  
  
