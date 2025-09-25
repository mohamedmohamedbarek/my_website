
const input = document.getElementById('bgInput');

input.addEventListener('change', function() {


const file = this.files[0];


if (file) {

const reader = new FileReader();

reader.onload = function(e) {


document.body.style.backgroundImage = `url(${e.target.result})`;


}
reader.readAs DataURL (file);


}

});