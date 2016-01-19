/*
Things to do:
    decide how the context and canvas will be given to elements
        pass through parameters or as a object variable.
    create something like a button but just for the work tab 
        that will act like a animated item.
*/

function Button(xcor, ycor, wid, hei, tex, err, cont){
    this.context = cont;
    this.x = xcor;
    this.y = ycor;
    this.width = wid;
    this.height = hei;
    this.text = tex;
    this.color = "#FFA500";
    this.error = err;
    
    //first thing called to create the button object
<<<<<<< HEAD
    this.setup = function(context, canvas){}
=======
    this.setup = function(){};
>>>>>>> origin/master
    
    //the update function for the button object
    this.update = function(){};
    
    //the render function for the button object
    this.render = function(){
        //sets the original fill color
        this.context.fillStyle = this.color;
        //render the button
        this.context.fillRect(this.x, this.y, this.width, this.height);
        
        //if you want to display the text
        if(this.text !== null)
        {
            //text options
            var fontSize = 40;
            this.context.fillStyle = "white";
            this.context.font = fontSize + "px sans-serif";
            
            //text position
            var textSize = this.context.measureText(this.text);
            var textX = this.x + (this.width/2) - (textSize.width / 2);
            var textY = this.y + (this.height/2) + this.error;
            
            //render the text 
            this.context.fillText(this.text, textX, textY);
            this.context.fillStyle = "#FFA500";
        }
    };
    
    //When the user presses down change the buttons color to signal the user what they clicked
    this.eventMouseDown = function(e){
        var x = e.pageX;
        var y = e.pageY;
        //Checks if the click was inside this button
        if(x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height))
        {
            this.color = "#ff8333";
            if(this.text === "Hot Dog Stand" && getShouldShowWork() === true)
			{
                thisisamethod();
			}
            if(this.text === "Upgrades")
			{
                showWorkPage(false);
			}
            if(this.text === "Work")
			{
                showWorkPage(true);
			}
        }
    };
        
    //When the user releses their mouse button set the button to its original color
    this.eventMouseUp = function(e){
            this.color = "#FFA500";
    };
}