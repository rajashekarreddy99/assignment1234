
var acc = document.getElementsByClassName("accordionBtn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");

        var accordDescription = this.nextElementSibling;
        if (accordDescription.style.display === "block") {
            accordDescription.style.display = "none";
        } else {
            accordDescription.style.display = "block";
        }
    };
}

function validateInput() {
    var input = document.getElementById('myField').value;
    var correctValue = 'My Website';
    var errorMessage = document.getElementById('errorMessage');

    if (input !== correctValue) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}

function changeImage(imageUrl) {
    var imgElement = document.getElementById('displayImage');

    imgElement.src = "images/"+imageUrl;
    imgElement.alt = 'Image ' + imageUrl;
}

