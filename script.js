const sketchbox = document.getElementById('sketchbox');

function makeRows(rows, cols) {
    sketchbox.style.setProperty('--grid-rows', rows);
    sketchbox.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        sketchbox.appendChild(cell).className = "grid-item";
  };
};