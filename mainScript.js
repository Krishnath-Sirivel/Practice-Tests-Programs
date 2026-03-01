document.getElementById("mainHeading").innerHTML = "Practice Tests";
document.getElementById("mainText").innerHTML = "There are many buttons below. Click on any button according to your program and start the test!";

//changes the css and js file that the html file is using
function switchMode(cssFile, jsFile) {
    document.getElementById("theme").href = cssFile;

    const oldScript = document.getElementById("logic");
    const newScript = document.createElement("script");
    newScript.src = jsFile;
    newScript.id = "logic";
    oldScript.replaceWith(newScript);
}

function hideButton(btn) {
    btn.style.display = "none";
}

function addButtons_CSCI_2050U() {
    const container = document.getElementById("buttonContainer");
    //midterm    
    const midterm = document.createElement("button");
    midterm.textContent = "Midterm";
    midterm.onclick = function() {
        alert("You clicked the button for the midterm for this course!");
    };
    //exam    
    const exam = document.createElement("button");
    exam.textContent = "Exam";
    exam.onclick = function() {
        alert("You clicked the button for the exam for this course!");
    };
    //back    
    const back = document.createElement("button");
    back.textContent = "Back";
    back.onclick = function() {
        switchMode("mainStyle.css", "mainScript.js");
    };
    // Add them to the page
    container.appendChild(midterm);
    container.appendChild(exam);
    container.appendChild(back);

}
