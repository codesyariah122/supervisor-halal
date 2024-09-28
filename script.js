// JavaScript bisa digunakan untuk memberikan interaktivitas tambahan
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-90', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-opacity-90', 'shadow-lg');
    }
});


const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappMessageBox = document.getElementById('whatsapp-message-box');

    // Toggle tampilan box pesan saat tombol WhatsApp diklik
    whatsappButton.addEventListener('click', function() {
        if (whatsappMessageBox.style.display === 'none' || whatsappMessageBox.style.display === '') {
            whatsappMessageBox.style.display = 'block';
        } else {
            whatsappMessageBox.style.display = 'none';
        }
    });

    // Arahkan ke WhatsApp saat box pesan diklik
    whatsappMessageBox.addEventListener('click', function() {
        window.open('https://wa.me/628123456789?text=Halo, saya butuh bantuan.', '_blank');
    });
