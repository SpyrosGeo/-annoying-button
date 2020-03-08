const evilButton = document.getElementById('evil-button');
const OFFSET = 100


evilButton.addEventListener('click', () => {
    alert('Nice Try Cheater!');
    window.close()
})
//get coords for mouse and button
document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect()
    const horizontalDinstanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
    const verticalDinstanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET

    //check if we are close enough to the button
    if (Math.abs(horizontalDinstanceFrom) <= horizontalOffset && Math.abs(verticalDinstanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDinstanceFrom * 7,
            buttonBox.y + verticalOffset / verticalDinstanceFrom * 7,

        )
    }
})

function setButtonPosition(left, top) {
    //dont let the button get offe the screen
    const winBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if (distanceFromCenter(left, winBox.left, buttonBox.width) < 0) {
        left = winBox.right - buttonBox.width - OFFSET
    }
    if (distanceFromCenter(left, winBox.right, buttonBox.width) > 0) {
        left = winBox.left + OFFSET
    }
    if (distanceFromCenter(top, winBox.top, buttonBox.height) < 0) {
        top = winBox.bottom - buttonBox.height - OFFSET
    }
    if (distanceFromCenter(top, winBox.bottom, buttonBox.height) > 0) {
        top = winBox.top + OFFSET
    }

    evilButton.style.top = `${top}px`;
    evilButton.style.left = `${left}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}