# ETCHE-E-SKETCH
ETCHE-E-SKETCH  is a grid based drawing board.
[Live Preview](https://sidoliver.github.io/sketch-board/)
## Features

- Create your own grid size
- Hover the mouse to change the box color
- Clear and Resize your grid layout using the Resize button

## Tools

To build this project I have used tools below:

- [HTML] - For skeleton!
- [css] - To style the HTML
- [Javascript] - To add functionality and features.


## User Touch Points


```sh
1. User will click the link
2. User will be shown a default grid layout
3. User can draw on the grid by hovering the mouse
4. User will be able to create custom grid by clicking the button
```
## User Constraints
```sh
1.User can not be able to enter a value more than 64
2.User can not left blank field
3.User can not enter value less than 0 or a string value.
```

## Javascript PSEUDO CODE
### Default screen
```sh
1.create a function 'defaultBox' which will take two functions 'boxSize' and 'fillBox'
2.function boxSize will be responsible for creating a box size by taking size as a parameter
3.function 'fillBox' will be responsibel for filling the main container with equal number of columns and rows by taking a number as an argument
4.create a function to generate random rgb color values and call this function inside the fillBox function

```
### Manual screen
```sh
1.Create a function to take user Input and convert that into string.
2.Restrict the user to provide a number between 1-64.
3.If user inputs a valid number than call the boxSize and fillBox function by passing user input as a parameter.
4.Create a function to remove the default screen and replace with the changes made by the user. 
```

