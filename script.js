const sketchbox = document.getElementById('sketchbox');
const sizeBtn = document.querySelector('#sizeChange');

window.addEventListener('load', makeRows(16, 16));

sizeBtn.addEventListener('click', () => {
    let size = prompt('Please Choose Any Grid Size Upto 100')
    if (size > 100) {
        alert('ERROR - Input Valid Number')
    } else {
        while (sketchbox.firstChild) {
        sketchbox.removeChild(sketchbox.lastChild);
      }
        makeRows(size, size);
    }
});

function makeRows(rows, cols) {
    sketchbox.style.setProperty('--grid-rows', rows);
    sketchbox.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', colourChange)
        sketchbox.appendChild(cell).className = "grid-item";
  };
};

function colourChange (el) {
        if (document.getElementById('black').checked){
            Object.assign(el.target.style, {
            backgroundColor: 'black'
        })
        } else if (document.getElementById('multi').checked) {
            randomColour(el);
    }
}

function randomColour(el) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    Object.assign(el.target.style, {
            backgroundColor: color
    })
}