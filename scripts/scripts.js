// Keep your scripts in here
var coll = document.getElementsByClassName("collapsible");
var i;

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

onerror = errorHandler;
function errorHandler(message, link, line) {
    message = "Error Encountered:\n\n";
    message += "URL: " + link + "\n";
    message += "Line: " + line + "\n";
    alert(message);
    return true;
}

// 33°00' +/-1°30'

function rangeDetector(){
    try {
        var tables = document.getElementsByClassName("alignment");
        for(var i=0; i<tables.length;i++){
            var body = tables[i].getElementsByTagName('tbody');
            for(var j=0; i<tables.length;j++){

            }
        }
    } catch (e) {
        console.log(e);
    }

    // range = range.replace(/°/g,".").replace(/'/g,"").split(" +/-");
    // console.log(range);
}