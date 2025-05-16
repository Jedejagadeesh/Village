function jaggu(id) {
    document.getElementById('home').innerHTML=document.getElementById(id).innerHTML;
}
function jede() {
    var select = document.getElementById("people");
    var selectvalue = select.value;
    var target = document.getElementById(selectvalue);

    if (target) {
        document.getElementById("content").innerHTML = target.innerHTML;
    } else {
        document.getElementById("content").innerHTML = "<p>Please select a valid option.</p>";
    }
}

var elements = ['im1','im2','im3','im4','im5','im6','im7','im8','im9'];
var index = 0;

function showImagesSequentially() {
    index = 0;
    // Hide all images initially
    elements.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    // Show one image per second
    var m = setInterval(() => {
        if (index < elements.length) {
            document.getElementById(elements[index]).style.display = 'inline-block';
            index++;
        } else {
            clearInterval(m);
        }
    }, 300);
}
function jaggu(sectionId) {
    let sections = document.querySelectorAll('.main');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'village_gallary') {
        showImagesSequentially();
    }
}

