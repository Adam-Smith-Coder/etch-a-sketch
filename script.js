const sketchbox = document.getElementById('sketchbox');

function makeRows(rows, cols) {
    sketchbox.style.setProperty('--grid-rows', rows);
    sketchbox.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', colourChange)
        sketchbox.appendChild(cell).className = "grid-item";
  };
};

const radioButtons = document.querySelectorAll('input[name="colours"]');

function colourChange (el) {
    if (radioButtons.value = 'black') {
        Object.assign(el.target.style, {
            backgroundColor: black
        })
            console.log(backgroundColor)
    } else if (radioButtons.value = 'multi') {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        Object.assign(el.target.style, {
            backgroundColor: color
        })
        console.log(backgroundColor)
    }
}