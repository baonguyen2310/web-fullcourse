function handleClick() {
    alert('Hello')
}

document.getElementById('btn2').onclick = handleClick

document.getElementById('btn3').addEventListener('click', handleClick)