function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function hitung() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    const operasi = document.getElementById('operasi').value;
    const hasil = document.getElementById('hasil-kalkulator');

    if (isNaN(angka1) || isNaN(angka2)) {
        hasil.textContent = "⚠️ Masukkan angka yang benar!";
        return;
    }

    let jawaban;
    if (operasi === 'tambah') {
        jawaban = tambah(angka1, angka2);
    } else {
        jawaban = kurang(angka1, angka2);
    }

    hasil.textContent = `✅ Hasil: ${jawaban}`;
}

console.log("Kalkulator siap digunakan!");
