# Etch-A-Sketch Project
In this project, I will create a makeshift sketchpad in a browser using DOM manipulation

## Tasks
* Create a 16x16 grid of square divs
* Create a hover event that changes the color of each div when the mouse hovers over it
* Add a button to the top of the screen
    * Clears current grid
    * Sends user a popup asking for how many squares per side to make the new grid
    * Grids should be generated in the same total space as before
    * Limit for user input should be a maximum of 100
* Try to make color variation from white to black and make each square darker as the mous passes through it more.

### Some Initial Ideas to Accomplish These Tasks
* Keep the whole system in a large div
    * This way when the clear command is run, it just removes all children from the larger cotainer div
* Have an array of different color tags
    * When the mouse hovers over a square, a counter will tick up moving to the next color in the array.
* Use viewport units to make sure each square is within the constraints of the window
    * Divide 100 by the number of squares to get an exact number