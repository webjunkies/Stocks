function Game(error)
{
    //Instance variables
    this.error = error;
    
    //object varables
    var workButton = null;
    var upgradesButton = null;
    var workTab = null;
    var amount = 0;
    var showWork = false;
    
    //The first thing that should get called
    this.setup = function(context, canvas)
    {
        //creates the work page
        workTab = new work(canvas.innerWidth, canvas.innerHeight, this.error);
        
        //Create all the Items on the screen
        workButton = new Button(0, 300, 300, 80, "Work", this.error, context);
        upgradesButton = new Button(0, 400, 300, 80, "Upgrades", this.error, context);
        
        //Check for the mouse events
        canvas.addEventListener("mousedown", eventMouseDown);
        canvas.addEventListener("mouseup", eventMouseUp);
        
        //start the numbers
        workButton.setup(context, canvas);
        upgradesButton.setup(context, canvas);
        workTab.setup(context, canvas);
    }
    
    //updates all the game mechanics and numbers
    this.update = function(context, canvas)
    {
        workButton.update();
        upgradesButton.update();
    }
    
    //renders the screen(60 times a seccond)
    //or said as 60 frames per seccond
    this.render = function(context, canvas)
    {
        //"clears" the screen for the next frame
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        //call all render functions here
        if(showWork)
        {
            workTab.render(context);
        }
        workButton.render();
        upgradesButton.render();
        
        context.fillStyle = "#000000";
        context.font="40px Georgia";
        context.fillText(amount, 30, 30);
    }
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //called from the mouse being clicked
    eventMouseDown = function(e)
    {
        var mousex = e.pageX - error;
        var mousey = e.pageY - error;
        // just shows you where the mouse click is in the console
        console.log("x: " + e.pageX + " Y: " + e.pageY);
        
        //call all objects that need a mouse event down
        workTab.eventMouseDown(e);
        workButton.eventMouseDown(e);
        upgradesButton.eventMouseDown(e);
    }
    
    //called from the mouse being released
    eventMouseUp = function(e)
    {
        var mousex = e.pageX - error;
        var mousey = e.pageY - error;
        //console.log("x: " + e.clientX + " Y: " + e.clientY);
        
        //call all objects that need a mouse event up
        workTab.eventMouseUp(e);
        workButton.eventMouseUp(e);
        upgradesButton.eventMouseUp(e);
    }
    
    thisisamethod = function(){
        amount++;
    }
    
    showWorkPage = function(bool){
        showWork = bool;
    }
    
    getShouldShowWork = function(){
        return showWork;
    }
}