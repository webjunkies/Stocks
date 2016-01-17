function Button(x, y, width, height, text){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.color = "#FFA500";
    
    this.setup = function(context){
        
    }
    
    this.update = function(context){
        
    }
    
    this.render = function(context){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    
    this.event = function(mousex, mousey){
        if(mousex >= this.x && mousex <= (this.x + this.width)
            && mousey >= this.y && mousey <= (this.y + this.height))
        {
            this.color = "#000000";
        }
        
    }
}