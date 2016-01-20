// JavaScript Document

"use strict";
var canvas;
var context;
var game;
var width, height;
var amount, netWorth, amountFactor;
var column, row;
var menuButtons = [];

function setup(c)
{
	canvas = c;
	console.log(canvas);
	context = canvas.getContext("2d");
	
	//set the amount variables
	amount = 0.0; 
	netWorth = 0.0;
	amountFactor = 0.0;
	width = canvas.width;
	height = canvas.height;
	column = width / 5;
	row = height / 7;
	
	//Check for the mouse events
    canvas.addEventListener("mousedown", eventMouseDown);
    canvas.addEventListener("mouseup", eventMouseUp);
	
	game = new game();
	game.setup();
	
	//start the update loop and then call the first render() 
	setInterval(update, 1000 / 60);
	render();
}

//The master render function
function render()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	window.requestAnimationFrame(render);
	game.render();
}

function update()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function eventMouseDown(e)
{
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	
	for(var i = 0; i < menuButtons.length; i++)
	{
		menuButtons[i].eventMouseDown(e);
	}	
	
	//console.log("clicked at " + mouseX + ", " + mouseY);
}

function eventMouseUp(e)
{
	var mouseX = e.pageX;
	var mouseY = e.pageY;	
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//IS THE "GAME" IT HOLDS AND CALLS ALL OTHER FUNCTIONS TO RUN THE GAME
function game()
{
	var workButton,
		upgradesButton,
		companyButton,
		optionsButton,
		stocksButton,
		stockInfoButton,
		investorsButton,
		achievementsButton;
	
	this.setup = function()
	{
		console.log("game setup");
		//Create the Buttons
		workButton = new staticButton(0, row * 2, column - 5, row - 5, "work", "Work");
		upgradesButton = new staticButton(0, row * 3, column - 5, row - 5, "upgrades", "Upgrades");
		companyButton = new staticButton(0, row * 4, column - 5, row - 5, "company", "Company");
		optionsButton = new staticButton(0, row * 5, column - 5, row - 5, "options", "Options");
		stocksButton = new staticButton((column * 4) - 10, row * 2, column - 5, row - 5, "stocks", "Stocks");
		stockInfoButton = new staticButton((column * 4) - 10, row * 3, column - 5, row - 5, "stock_info", "Stock Info");
		investorsButton = new staticButton((column * 4) - 10, row * 4, column - 5, row - 5, "investors", "Investors");
		achievementsButton = new staticButton((column * 4) - 10, row * 5, column - 5, row - 5, "achievements", "Achievements");
		//add the buttons to the array
		menuButtons.push(workButton);
		menuButtons.push(upgradesButton);
		menuButtons.push(companyButton);
		menuButtons.push(optionsButton);
		menuButtons.push(stocksButton);
		menuButtons.push(stockInfoButton);
		menuButtons.push(investorsButton);
		menuButtons.push(achievementsButton);
	};
	
	this.render = function()
	{
		//call all other game render functions HERE!
		renderAmounts();
		shouldRender(menuButtons);
	};
	
	this.update = function()
	{
		//call all other game update functions HERE!
	};
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//THE STATIC BUTTON FUNCTION
function staticButton(x, y, width, height, id, text)
{
	this.id = id;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.text = text;
	this.canBeClicked = true;
	this.shouldRender = true;
	
	this.setup = function(){};
	
	this.render = function(x, y, width, height)
	{
		//the color of the button
		context.fillStyle = "#FFA500";
		
		//render the button itself
		context.fillRect(this.x, this.y, this.width, this.height);
		
		if(this.text !== null)
		{
			//Text options
			var fontSize = 50;
			context.fillStyle = "white";
			context.font = fontSize + "px sans-serif";
			
			//Text position
			var textSize = context.measureText(this.text);
			var textX = this.x + (this.width / 2) - (textSize.width / 2);
			var textY = this.y + (this.height/2) + (this.height / 9);
			
			//render the Text over the button
			context.fillText(this.text, textX, textY);
		}
	};
	
	this.update = function(){};
	
	this.eventMouseDown = function(e)
	{
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		
		if(this.canBeClicked)
		{
			if(mouseX >= this.x && mouseX <= (this.x + this.width) && mouseY >= this.y && mouseY <= (this.y + this.height))
			{
				clicked(this.id);
			}
		}
	};
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//THE DYNAMIC AND DISPLAY BUTTON FUNCTION
function dynamicButton()
{
	this.setup = function(){};
	
	this.render = function(x, y, width, height)
	{
		context.fillRect(x, y, width, height);
	};
	
	this.update = function(){};
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//EXTRA HELPER FUNCTIONS AND INDIVIDUAL FUNCTIONS
function renderAmounts()
{
	context.fillStyle = "#000000";
	context.font="40px Georgia";
	context.fillText("$" + amount, column, row);
	amount++;
	context.fillText("Net Worth: $" + netWorth, column * 3, row);
}

function shouldRender(listOfButtons)
{
	for(var i = 0; i < listOfButtons.length; i++)
	{
		listOfButtons[i].render();
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//DECIDES WHAT HAS BEEN PRESSED AND THEN ACTS UPON IT DYNAMICALLY
function clicked(id)
{
	switch(id)
	{
		case "work": console.log("work Button Pressed"); break;
		case "upgrades": console.log("Upgrades Button Pressed"); break;
		case "company": console.log("Company Button Pressed"); break;
		case "options": console.log("Options Button Pressed"); break;
		case "stocks": console.log("Stocks Button Pressed"); break;
		case "stock_info": console.log("Stock Info Button Pressed"); break;
		case "investors": console.log("Investors Button Pressed"); break;
		case "achievements": console.log("Achievements Button Pressed"); break;
		default: console.log("clicked Mouse button"); break;
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////