function kirimPesan() {
  alert("Pesan terkirim!");
}

// Edit data sederhana
function editData() {
  let nama = prompt("Masukkan nama baru:");
  let email = prompt("Masukkan email:");
  let phone = prompt("Masukkan nomor HP:");
  let alamat = prompt("Masukkan alamat:");

  if(nama) document.getElementById("nama").innerText = nama;
  if(email) document.getElementById("email").innerText = email;
  if(phone) document.getElementById("phone").innerText = phone;
  if(alamat) document.getElementById("alamat").innerText = alamat;
}