const form = document.getElementById("resume-builder") as HTMLFormElement

const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

form.addEventListener("submit", (event :Event) => {
    event.preventDefault();

const name =(document.getElementById('name') as HTMLInputElement).value

const email =(document.getElementById('Email') as HTMLInputElement).value

const phoneNumber =(document.getElementById('phone') as HTMLInputElement).value

const education =(document.getElementById('education') as HTMLInputElement).value

const experience =(document.getElementById('work-experience') as HTMLInputElement).value

const skills =(document.getElementById('skills') as HTMLInputElement).value


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

     if(resumeDisplayElement){
        resumeDisplayElement.innerHTML =  resumeHTML
    } else{
        console.error("Error");
    }

})
