# Etch-A-Sketch Project
In this project, I will create a makeshift sketchpad in a browser using DOM manipulation

## Tasks
* ~~Create a 16x16 grid of square divs~~
* ~~Create a hover event that changes the color of each div when the mouse hovers over it~~
* ~~Add a button to the top of the screen~~
    * ~~Clears current grid~~
    * ~~Sends user a popup asking for how many squares per side to make the new grid~~
    * ~~Grids should be generated in the same total space as before~~
    * ~~Limit for user input should be a maximum of 100~~
* ~~Try to make color variation from white to black and make each square darker as the mous passes through it more.~~

### Some Initial Ideas to Accomplish These Tasks
* Keep the whole system in a large div
    * This way when the clear command is run, it just removes all children from the larger cotainer div
* Have an array of different color tags
    * When the mouse hovers over a square, a counter will tick up moving to the next color in the array.
* Use viewport units to make sure each square is within the constraints of the window
    * Divide 100 by the number of squares to get an exact number

## Thoughts at the End
Personally for me, this was pretty easy since I already have a grasp on using jQuery. I didn't do the optional challenge of making every pixel be a random rgb value, but I think I effectively finished the project. I did learn how to automate making HTML DOM elements, and I have a much better grasp on CSS grid layout, so I think I still got some things out of this. I could've done this all using JavaScript and no jQuery, but to be honest, I got lazy and decided that jQuery was faster and easier.