const evilButton = document.getElementById('evil-button');



evilButton.addEventListener('click', () => {
    alert('Nice Try Cheater!');
    window.close()
})
document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
})