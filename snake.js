//prepare the boxes
for(let j = 1; j < 401; j++){
    var newBox = document.createElement("img");
    newBox.src = "whitebox.gif";
    newBox.id = "box"+j;
    document.getElementById("square").appendChild(newBox);
}
//prepare the target and the primary snake
target=0;
let snakeBox = [46, 47, 48];
let direction= "right";
document.getElementById('box'+snakeBox[0]).src="blackbox.gif";
document.getElementById('box'+snakeBox[1]).src="blackbox.gif";
document.getElementById('box'+snakeBox[2]).src="blackbox.gif";

target_put();

function target_put(){
    target=Math.floor(Math.random() * 400);
    target_name='box'+target;
    document.getElementById(target_name).src="blackbox.gif";
};

//run application
var myVar = setInterval(snake_movement, 100);

//snake movement
function snake_movement(){
    //clear the snake
    document.getElementById('box'+snakeBox[0]).src="whitebox.gif";
    document.getElementById('box'+snakeBox[1]).src="whitebox.gif";
    document.getElementById('box'+snakeBox[2]).src="whitebox.gif";
    //get the new boxes for the snake
    snakeBox[0]=snakeBox[1];
    snakeBox[1]=snakeBox[2];
        if (direction=="right"){snakeBox[2]=snakeBox[2]+1;
        } else if (direction == "up"){snakeBox[2]=snakeBox[2]-20;
        } else if (direction == "left"){snakeBox[2]=snakeBox[2]-1;
        } else if (direction == "down"){snakeBox[2]=snakeBox[2]+20;} 

    //paint the new snake
    document.getElementById('box'+snakeBox[0]).src="blackbox.gif";
    document.getElementById('box'+snakeBox[1]).src="blackbox.gif";
        //control
        if (((snakeBox[2]%20)==1) && ((snakeBox[1]%20)==0))       { clearInterval(myVar);}
        else if (((snakeBox[2]%20)==0) && ((snakeBox[1]%20)==1))  { clearInterval(myVar);}
        else if (snakeBox[2]<0)                                { clearInterval(myVar);}   
        else if (snakeBox[2]>400)                              { clearInterval(myVar);}
        else {      document.getElementById('box'+snakeBox[2]).src="blackbox.gif";
        }
    if (snakeBox[2]==target)
        {target_put();};
};
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37) {direction="left";}
    else if(event.keyCode == 39) {direction="right";}
    else if(event.keyCode == 38) {direction="up";}
    else if(event.keyCode == 40) {direction="down";}
},false)
