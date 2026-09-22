document.getElementById('registerForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Reset semua pesan error setiap kali tombol submit ditekan
    document.querySelectorAll('.error-text').forEach(function(el) {
        el.innerText = '';
    });

    // Ambil nilai dari setiap input
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const nama = document.getElementById('nama').value.trim();
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const alamat = document.getElementById('alamat').value.trim();
    const noTelp = document.getElementById('no_telp').value.trim();

    // a. Validasi Username (tidak kosong, min 3 karakter)
    if (username === '' || username.length < 3) {
        document.getElementById('err-username').innerText = 'Username tidak boleh kosong dan minimal 3 karakter.';
        isValid = false;
    }

    // b. Validasi Password (tidak kosong, min 8 karakter)
    if (password === '' || password.length < 8) {
        document.getElementById('err-password').innerText = 'Password tidak boleh kosong dan minimal 8 karakter.';
        isValid = false;
    }

    // c. Validasi Nama (tidak kosong)
    if (nama === '') {
        document.getElementById('err-nama').innerText = 'Nama tidak boleh kosong.';
        isValid = false;
    }

    // d. Validasi Tanggal Lahir (tidak kosong, tidak boleh melebihi tanggal hari ini)
    if (tanggalLahir === '') {
        document.getElementById('err-tanggal').innerText = 'Tanggal lahir tidak boleh kosong.';
        isValid = false;
    } else {
        const inputDate = new Date(tanggalLahir);
        const today = new Date();
        // Atur waktu hari ini ke jam 00:00:00 agar perbandingan hanya fokus pada tanggal
        today.setHours(0, 0, 0, 0);

        if (inputDate > today) {
            document.getElementById('err-tanggal').innerText = 'Tanggal lahir tidak boleh di masa depan.';
            isValid = false;
        }
    }

    // e. Validasi Alamat (tidak kosong)
    if (alamat === '') {
        document.getElementById('err-alamat').innerText = 'Alamat tidak boleh kosong.';
        isValid = false;
    }

    // f. Validasi Nomor Telepon (tidak kosong, harus berawalan 62)
    if (noTelp === '' || !noTelp.startsWith('62')) {
        document.getElementById('err-notelp').innerText = 'Nomor telepon tidak boleh kosong dan harus berawalan 62.';
        isValid = false;
    }

    // Jika ada satu saja form yang tidak valid, cegah form dikirim (prevent default)
    if (!isValid) {
        event.preventDefault();
    }
});