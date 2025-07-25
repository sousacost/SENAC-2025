/*let url = 'https://barcodeapi.org/api/qrcode/       '

fetch(url, { cache: "no-store" })
  .then(response => {

    var tokens = response.headers.get('X-RateLimit-Tokens');
    console.log("Tokens remaining: " + tokens);

    response.blob().then(blob => {
      var img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
      
    });
});*/


var bubble_sort_classic = function (array) {
var length = array.length;
for (var i = 0; i <comprimento; i ++) {
  for (var j = 0; j <comprimento - i - 1; j ++) {
    if (matriz [j]> matriz [j + 1]) {
      array.swap (j, j + 1);
    }
  }
}
};