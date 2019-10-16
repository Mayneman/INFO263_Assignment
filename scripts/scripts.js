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

// function rangeDetector(base, range, element) {
//     try {
//         var clean = element.innerHTML.replace(/°/g, ".").replace(/mm/g, "");
//         if (clean <= base + range && clean >= base - range) {
//             console.log("colour:red");
//             element.style.color="red";
//         } else {
//             element.style.color="green";
//             console.log("colour:green");
//         }
//     }catch (e) {
//         console.log(e);
//
//     }
//
// }

//Get Red/Green Text
// function rangeDetector() {
//     try {
//         //Get all alignment tables
//         var tables = document.getElementsByClassName("alignment");
//         for (var i = 0; i < tables.length; i++) {
//             //Get all table bodys
//             var body = tables[i].getElementsByTagName('tbody');
//             for (var j = 0; j < tables.length; j++) {
//                 //Get all table rows
//                 var rows = tables[j].getElementsByTagName('tr');
//                 for (var k = 0; k < rows.length; k++) {
//                     var cells = tables[k].getElementsByTagName('td');
//                     for (var l = 0; l < cells.length; l++) {
//                         if (cells[l].label == 'target') {
//                             console.log(cells[l]);
//                         }
//
//                     }
//                 }
//             }
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

    // range = range.replace(/°/g,".").replace(/'/g,"").split(" +/-");
    // console.log(range);
// }