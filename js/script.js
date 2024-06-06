function replaceName() {
  let name = prompt('Siapakah nama anda?', '');
  document.getElementById('name').innerHTML = name;
}

replaceName();

document.getElementById('formulir').addEventListener('submit', function (event) {
  event.preventDefault();
  const now = new Date();
  const dateTimeString = now.toLocaleString();

  const nama = document.getElementById('nama').value;
  const tglLahir = document.getElementById('tglLahir').value;
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
  const pesan = document.getElementById('pesan').value;

  const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;

  document.getElementById('result').value = resultText;

  alert('Pesan telah tersubmit');
  document.getElementById('nama').value = '';
  document.getElementById('tglLahir').value = '';
  document.getElementById('pesan').value = '';
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('img-slideshow');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
  plusDivs(1);
}, 5000);
