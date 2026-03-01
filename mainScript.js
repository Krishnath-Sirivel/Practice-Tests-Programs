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
