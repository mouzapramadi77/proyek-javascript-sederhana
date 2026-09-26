// Fungsi penjumlahan
function tambah(a, b) {
    return a + b;
}

// Fungsi pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi utama yang dijalankan saat tombol diklik
function hitung() {
    // Ambil nilai dari kolom isian
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    const operasi = document.getElementById('operasi').value;
    const kotakHasil = document.getElementById('hasil-kalkulator');

    // Cek apakah yang diisi benar angka
    if (isNaN(angka1) || isNaN(angka2)) {
        kotakHasil.textContent = "⚠️ Masukkan angka yang benar!";
        return; // Berhenti jika salah
    }

    // Lakukan perhitungan
    let jawaban;
    if (operasi === 'tambah') {
        jawaban = tambah(angka1, angka2);
    } else {
        jawaban = kurang(angka1, angka2);
    }

    // Tampilkan hasil
    kotakHasil.textContent = `✅ Hasil: ${jawaban}`;
}

// Pesan di konsol peramban (bisa dilihat lewat F12)
console.log("Kalkulator siap digunakan!");
