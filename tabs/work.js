function work(width, height, error)
{
    this.width = width;
    this.height = height;
    this.error = error;
    var hotDogStandButton = null;
    
    this.setup = function(context)
    {
        console.log(context);
        hotDogStandButton = new Button(400, 300, 300, 80, "Hot Dog Stand", this.error, context);
        hotDogStandButton.setup(context);
    }
    
    this.update = function(context){}
    
    this.render = function(context)
    {
        hotDogStandButton.render();
    }
    
    this.eventMouseDown = function(e)
    {
        hotDogStandButton.eventMouseDown(e);
    }
    
    this.eventMouseUp = function(e)
    {
        hotDogStandButton.eventMouseUp(e);
    }
}