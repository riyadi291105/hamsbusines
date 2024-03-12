document.addEventListener('DOMContentLoaded', function() {
  var modal = document.querySelector('.modal');
  var closeButton = document.querySelector('.close');
  var modalAwalInput = document.getElementById('modalAwal');
  var produksiInput = document.getElementById('produksi');
  var hitungButton = document.getElementById('hitung');
  var hasilP = document.getElementById('hasil');

  hitungButton.addEventListener('click', function() {
    var modalAwal = parseFloat(modalAwalInput.value);
    var produksi = parseFloat(produksiInput.value);
    var hasil = modalAwal + produksi;

    if (!isNaN(modalAwal) && !isNaN(produksi)) {
      hasilP.textContent = 'Hasil: ' + hasil;
      modalAwalInput.value = '';
      produksiInput.value = '';
      showModal();
    } else {
      alert('Masukkan nilai yang valid!');
    }
  });

  function showModal() {
    modal.style.display = 'block';
  }

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
