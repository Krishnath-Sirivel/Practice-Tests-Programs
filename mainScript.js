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
    // Add them to the page
    container.appendChild(midterm);
    container.appendChild(exam);

}
