// Keep your scripts in here
var coll = document.getElementsByClassName("collapsible");
var i;
//Extends height on collapsible button click.
for (i= 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
//Allow for printing of errors that may occur during runtime
onerror = errorHandler;
function errorHandler(message, link, line) {
    message = "Error Encountered:\n\n";
    message += "URL: " + link + "\n";
    message += "Line: " + line + "\n";
    alert(message);
    return true;
}

//Takes base and a range and measures that against target element value. Changing the style background color to red/green accordingly
function rangeDetector(base, range, element) {
    try {
        var clean = element.innerHTML.replace(/'/g, ".").replace(/mm/g, "");
        var valueFloat = parseFloat(clean);
        if (valueFloat <= (base + range) && valueFloat >= (base - range)) {
            element.style.backgroundColor = "lawngreen";
        } else {
            element.style.backgroundColor = "red";
        }
    }catch (e) {
        console.log(e);

    }

}