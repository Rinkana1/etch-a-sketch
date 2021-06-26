const container = $('#js-container');
const pixel = $('.pixel')
const colors = ['#ffffff', '#dddddd', '#bbbbbb', '#999999', '#777777', '#555555', '#333333', '#000000']

function createGrid(side) {
    square = side * side;
    var divList = '';
    for(var i = 0;i < square; i++) {
        divList += '<div class="pixel" id="js-pixel"></div>';
    }
    container.html(divList);
    var columns = '';

    for (var j = 0; j < side; j++) {
        columns += 'auto ';
    }
    $('.container').css('grid-template-columns', columns)
}

function color() {
    
}

createGrid(16);
