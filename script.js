const container = $('#js-container');
const pixel = $('.pixel')
const reset = $('#js-reset')
const colors = ['rgb(255, 255, 255)', 'rgb(221, 221, 221)', 'rgb(187, 187, 187)', 'rgb(153, 153, 153)', 'rgb(119, 119, 119)', 'rgb(85, 85, 85)', 'rgb(51, 51, 51)', 'rgb(0, 0, 0)']

function createGrid(side) {
    square = side * side;
    var divList = '';
    for(var i = 0;i < square; i++) {
        divList += '<div class="pixel color_0" id="js-pixel" style="background-color: #ffffff;"></div>';
    }
    container.html(divList);
    var columns = '';

    for (var j = 0; j < side; j++) {
        columns += 'auto ';
    }
    $('.container').css('grid-template-columns', columns);
}




function color(item) {
    switch ($(item).css('background-color')) {
        case colors[0]:
            $(item).css('background-color', colors[1]);
            break;
        case colors[1]:
            $(item).css('background-color', colors[2]);
            break;
        case colors[2]:
            $(item).css('background-color', colors[3]);
            break;
        case colors[3]:
            $(item).css('background-color', colors[4]);
            break;
        case colors[4]:
            $(item).css('background-color', colors[5]);
            break;
        case colors[5]:
            $(item).css('background-color', colors[6]);
            break;
        case colors[6]:
            $(item).css('background-color', colors[7]);
            break;
    }
}
    
function clearGrid() {
    container.empty();

    let newGrid = prompt('How many pixels do you want on each side?')

    if(isNaN(newGrid)) {
        alert('This value must be a number!')
        console.error('NaN. GENERATING 16x16 GRID.')
        createGrid(16);
    } else if(Number.isInteger(newGrid)) {
        alert('You can\'t use decimals or fractions!')
        console.error('MUST BE INTEGER. GENERATING 16x16 GRID.')
    } else if(newGrid > 100) {
        alert('You can\'t have more than 100 pixels on each side!')
        console.error('TOO MANY PIXELS. GENERATING 16x16 GRID.')
        createGrid(16);
    } else if(newGrid < 0) {
        alert('This value is not valid!')
        console.error('CANNOT BE NEGATIVE. GENERATING 16x16 GRID.')
        createGrid(16);
    } else {
        createGrid(newGrid)
    }

    $('.pixel').mouseenter(function() {color(this)});
}



createGrid(16);

$('.pixel').mouseenter(function() {color(this)});
reset.click(clearGrid)
