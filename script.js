function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Nama dan email wajib diisi!");
    return false;
  }

  alert("Terima kasih sudah mendaftar fanclub!");
  return true;
}
