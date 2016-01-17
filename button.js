function Button(x, y, width, height, text, error){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.color = "#FFA500";
    this.error = error;
    
    //first thing called to create the button object
    this.setup = function(context){}
    
    //the update function for the button object
    this.update = function(context){}
    
    //the render function for the button object
    this.render = function(context){
        //sets the original fill color
        context.fillStyle = this.color;
        //render the button
        context.fillRect(this.x, this.y, this.width, this.height);
        
        //if you want to display the text
        if(this.text != null)
        {
            //text options
            var fontSize = 40;
            context.fillStyle = "white";
            context.font = fontSize + "px sans-serif";
            
            //text position
            var textSize = context.measureText(this.text);
            var textX = this.x + (this.width/2) - (textSize.width / 2);
            var textY = this.y + (this.height/2) + error;
            
            //render the text 
            context.fillText(this.text, textX, textY);
            context.fillStyle = this.color;
        }
    }
    
    //When the user presses down change the buttons color to signal the user what they clicked
    this.eventMouseDown = function(mousex, mousey, game){
        //Checks if the click was inside this button
        if(mousex >= this.x && mousex <= (this.x + this.width)
            && mousey >= this.y && mousey <= (this.y + this.height))
        {
            this.color = "#ff8333";
        }
    }
        
    //When the user releses their mouse button set the button to its original color
    this.eventMouseUp = function(mousex, mousey, game){
            this.color = "#FFA500";
        
    }
}