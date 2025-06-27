function goToStep2() {
  const name = document.getElementById("namaInput").value;
  if (name.trim() === "") return alert("Masukkan namamu dulu!");
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("modalUcapan").classList.remove("hidden");
  document.getElementById("namaOutput").innerText = name;
}

function goToStep3() {
  document.getElementById("modalUcapan").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function tambahHarapan() {
  const container = document.getElementById("harapanContainer");
  const input = document.createElement("input");
  input.setAttribute("name", "harapan[]");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Tulis harapan...");
  input.className = "w-full border border-gray-300 rounded px-4 py-2";
  container.appendChild(input);
}

function tampilkanHasil() {
  const name = document.getElementById("namaInput").value;
  const hasilNama = document.getElementById("hasilNama");
  const daftar = document.getElementById("daftarHarapan");
  daftar.innerHTML = "";

  document.getElementsByName("harapan[]").forEach((input) => {
    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;
      daftar.appendChild(li);
    }
  });

  hasilNama.innerText = name;
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("hasilUcapan").classList.remove("hidden");
}
