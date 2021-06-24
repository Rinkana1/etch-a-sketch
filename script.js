const container = $('#js-container');
const pixel = $('.pixel')

function createGrid(side) {
    square = side * side;
    var divList = '';
    for(var i = 0;i < square; i++) {
        divList += '<div class="pixel" id="js-pixel"></div>';
    }
    container.html(divList);
    var columns;
    var pixelHeight = 95 / side;
    var pixelWidth = 100 / side;

    pixel.css({'height':`${pixelHeight}vh`,'width':`${pixelWidth}vw`})
    
    for(var j = 0; j < side; j++) {
        columns += "auto ";
    }
    
}

createGrid(16);