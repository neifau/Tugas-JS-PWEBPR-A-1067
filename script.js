const buttons = document.querySelectorAll('button')

document.getElementsByClassName('iya')[0].addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    const img = document.getElementsByClassName('image')[0];
    img.src = './images/teknisi.png';
    document.getElementById('judul').innerText = 'Anda Berbohong!';
    document.getElementsByClassName('main-container')[0].style.backgroundColor = '#E12E2E';
    document.getElementsByTagName('p')[0].innerText = 'Anda adalah seorang Teknisi'
});

document.getElementsByClassName('tidak')[0].addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    const img = document.getElementsByClassName('image')[0];
    img.src = './images/mahasiswa.png';
    document.getElementById('judul').innerText = 'Anda Benar!';
    document.getElementsByClassName('main-container')[0].style.backgroundColor = '#6FD240';
    document.getElementsByTagName('p')[0].innerText = 'Anda adalah seorang Mahasiswa'
});
