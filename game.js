function Game(canvas, context)
{
    //Instance variables
    this.error = error;
    var button = null;
    var amount = 0;
    var num = null;
    
    //The first thing that should get called
    this.setup = function(canvas, context)
    {
        //creates the "Player" and their data
        num = new numbers(0, 0);
        
        //Create all the Items on the screen
        button = new Button(0, 300, 300, 80, "Button", this.error);
        
        //Check for the mouse events
        canvas.addEventListener("mousedown", eventMouseDown);
        canvas.addEventListener("mouseup", eventMouseUp);
        
        //start the numbers
        num.setup(context);
    }
    
    //Runs the "Game loop"
    this.run = function()
    {
        //calls update every one seccond
        setInterval(this.update, 1000);
        //calls render 60 times a seccond
        setInterval(this.render, 1000 / 60);
    }
    
    //updates all the game mechanics and numbers
    this.update = function()
    {
        button.update();
        amount++;
    }
    
    //renders the screen(60 times a seccond)
    //or said as 60 frames per seccond
    this.render = function()
    {
        //"clears" the screen for the next frame
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        //call all render functions here
        button.render(context);
        context.fillStyle = "#000000";
        context.font="40px Georgia";
        context.fillText(amount, 30, 30);
    }
    
    //called from the mouse being clicked
    eventMouseDown = function(e)
    {
        mousex = e.pageX - error;
        mousey = e.pageY - error;
        // just shows you where the mouse click is in the console
        console.log("x: " + e.clientX + " Y: " + e.clientY);
        
        //call all objects that need a mouse event down
        button.eventMouseDown(mousex, mousey, this);
    }
    
    //called from the mouse being released
    eventMouseUp = function(e)
    {
        mousex = e.pageX - error;
        mousey = e.pageY - error;
        console.log("x: " + e.clientX + " Y: " + e.clientY);
        
        //call all objects that need a mouse event up
        button.eventMouseUp(mousex, mousey, this);
    }
}