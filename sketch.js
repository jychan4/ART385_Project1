/*
Yew Journ Chan
Assignment 1 - Design Draw
*/

var stateKey;
var stateStatic = 0;	//Lebron James
var stateOne = 1; 		//Anthony Davis
var stateTwo = 2; 		//James Harden
var stateThree = 3; 	//Kawhi Leonard
var stateFour = 4; 		//Luka Doncic
var stateFive = 5; 		//Joel Embiid
var stateSix = 6; 		//Trae Young
var stateSeven = 7; 	//Paskal Siakam
var stateEight = 8; 	//Kemba Walker
var stateNine = 9; 		//Giannis Antetokoumpo
var stateTen = 10;

//load all images
let imgStar;
let imgStar1;
let imgGiannis;
let imgLebron;
let imgStatic;	
let imgRockets;
let imgHawks;
let imgRaptors;
let imgCeltics;
let imgLakers;
let imgClippers;
let imgSixers;
let imgMavs;
let imgBucks;

let img1;			
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let img25;
let img26;
let img27;
let img28;
let img29;


//load all gifs
let gif1;	//LBJ(1-2)
let gif2;
let gif3;	//AD(3-4)
let gif4;
let gif5;	//JH(5-6)
let gif6;
let gif7;	//KL(7-8)
let gif8;
let gif9;	//LD(9-10)
let gif10;
let gif11;	//JE(11-12)
let gif12;	
let gif13;	//TY(13-14)
let gif14;
let gif15;	//PS(15-16)
let gif16;
let gif17;	//KW(17-18)
let gif18;
let gif19;	//GA(19-20)
let gif20;

let cart1;
let cart2;
let cart3;
let cart4;
let cart5;
let cart6;
let cart7;
let cart8;
let cart9;



//-----------------------ASSETS---------------------------------------
function preload() {
	imgStar = loadImage('assets/allstar.jpg');			//allstar logo
	imgStar1 = loadImage('assets/allstar1.jpg');		//allstar logo static
	imgGiannis = loadImage('assets/teamGiannis.jpg');	//team Giannis logo
	imgLebron = loadImage('assets/teamLebron.jpg');		//team Lebron logo
	imgRockets = loadImage('assets/rockets.jpg');		//rockets logo
	imgLakers = loadImage('assets/lakers.jpg');			//lakers logo
	imgClippers = loadImage('assets/clippers.jpg');		//clippers logo
	imgCeltics = loadImage('assets/celtics.jpg');		//celtics logo
	imgHawks = loadImage('assets/hawks.jpg');			//hawks logo
	imgBucks = loadImage('assets/bucks.jpg');			//bucks logo
	imgMavs = loadImage('assets/mavs.jpg');				//mavs logo
	imgRaptors = loadImage('assets/raptors.jpg');		//raptors logo
	imgSixers = loadImage('assets/sixers.jpg');			//sixers logo

	//-----------------------------------
	imgStatic = loadImage('assets/LBJ1.jpg'); 	//LEBRON JAMES img(static-2)
  img1 = loadImage('assets/LBJ2.jpg');
 	img2 = loadImage('assets/LBJ3.jpg');
 	gif1 = loadImage('assets/LBJ1.gif');
	gif2 = loadImage('assets/LBJ2.gif');
	//------------------------------------
  img3 = loadImage('assets/AD1.jpg'); 		//ANTHONY DAVIS img(3-5)
	img4 = loadImage('assets/AD2.jpg');
	img5 = loadImage('assets/AD3.jpg');
	gif3 = loadImage('assets/AD1.gif');
	gif4 = loadImage('assets/AD2.gif');
	//------------------------------------
	img6 = loadImage('assets/JH1.jpg'); 		//JAMES HARDEN img(6-8)
	img7 = loadImage('assets/JH2.jpg');
	img8 = loadImage('assets/JH3.jpg');
	gif5 = loadImage('assets/JH1.gif');
	gif6 = loadImage('assets/JH2.gif');
	//------------------------------------
	img9 = loadImage('assets/KL1.jpg'); 		//KAWHI LEONARD img(9-11)
	img10 = loadImage('assets/KL2.jpg');
	img11 = loadImage('assets/KL3.jpg');
	gif7 = loadImage('assets/KL1.gif');
	gif8 = loadImage('assets/KL2.gif');
	//------------------------------------
	img12 = loadImage('assets/LD1.jpg'); 		//LUKA DONCIC img(12-14)
	img13 = loadImage('assets/LD2.jpg');
	img14 = loadImage('assets/LD3.jpg');
	gif9 = loadImage('assets/LD1.gif');
	gif10 = loadImage('assets/LD2.gif');
	//------------------------------------
	img15 = loadImage('assets/JE1.jpg'); 		//JOEL EMBIID img(15-17)
	img16 = loadImage('assets/JE2.jpg');
	img17 = loadImage('assets/JE3.jpg');
	gif11 = loadImage('assets/JE1.gif');
	gif12 = loadImage('assets/JE2.gif');
	//------------------------------------
	img18 = loadImage('assets/TY1.jpg'); 		//TRAE YOUNG img(18-20)
	img19 = loadImage('assets/TY2.jpg');
	img20 = loadImage('assets/TY3.jpg');
	gif13 = loadImage('assets/TY1.gif');
	gif14 = loadImage('assets/TY2.gif');
	//-------------------------------------
	img21 = loadImage('assets/PS1.jpg');		//PASKAL SIAKAM img(21-23)
	img22 = loadImage('assets/PS2.jpg');
	img23 = loadImage('assets/PS3.jpg');
	gif15 = loadImage('assets/PS1.gif');
	gif16 = loadImage('assets/PS2.gif');
	//-------------------------------------
	img24 = loadImage('assets/KW1.jpg'); 		//KEMBA WALKER img(24-26)
	img25 = loadImage('assets/KW2.jpg');
	img26 = loadImage('assets/KW3.jpg');
	gif17 = loadImage('assets/KW1.gif');
	gif18 = loadImage('assets/KW2.gif');
	//-------------------------------------
	img27 = loadImage('assets/GA1.jpg'); 		//GIANNIS ANTETOKOUMPO img(27-29)
	img28 = loadImage('assets/GA2.jpg');
	img29 = loadImage('assets/GA3.jpg');
	gif19 = loadImage('assets/GA1.gif');
	gif20 = loadImage('assets/GA2.gif');
	//-------------------------------------
	cart1 = loadImage('assets/LBJCartoon.gif');    //Player Animated Gifs
	cart2 = loadImage('assets/ADCartoon.gif');
	cart3 = loadImage('assets/JHCartoon.gif');
	cart4 = loadImage('assets/KLCartoon.gif');
	cart5 = loadImage('assets/LDCartoon.gif');
	cart6 = loadImage('assets/JECartoon.gif');
	cart7 = loadImage('assets/TYCartoon.gif');
	cart8 = loadImage('assets/KWCartoon.gif');
	cart9 = loadImage('assets/GACartoon.gif');

}

//---------------------FUNCTION-SETUP---------------------------------
function setup() {
	imageMode(CENTER);
	state = stateTen
	createCanvas(1000, 1000);
	background(0);
}	
//---------------------FUNCTION-DRAW----------------------------------
function draw() {
 
	if(state == stateTen) {
		background(0);
		drawTen();
	}
	else if(state == stateOne) {
		background(0);
		drawOne();
	}
	else if(state == stateTwo) {
		background(0);
		drawTwo();
	}
	else if(state == stateThree) {
		background(0);
		drawThree();
	}
	else if(state == stateFour) {
		background(0);
		drawFour();
	}
	else if(state == stateFive) {
		background(0);
		drawFive();
	}
	else if(state == stateSix) {
		background(0);
		drawSix();
	}
	else if(state == stateSeven) {
		background(0);
		drawSeven();
	}
	else if(state == stateEight) {
		background(0);
		drawEight();
	}
	else if(state == stateNine) {
		background(0);
		drawNine();
	}
	else if(state == stateStatic) {
		background(0);
		drawStatic();
	}
}	


//----------------------------------FUNCTIONS-------------------------------------
//---------------------------------LEBRON-JAMES-----------------------------------

function drawStatic() { 						 			              //Lebron James's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(imgStatic, width/2, height/2);
  	image(imgStar1,780,100);
  	textSize(50);
	  fill(255, 204, 100);
	  textFont('GEORGIA')
  	text('#23 LEBRON JAMES',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	textSize(20);
  	text('16x ALL STAR SELECTION (STARTER)', 100,130);  
  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		  fill(255, 204, 100);
		  textFont('GEORGIA')
  		text('LEBRON JAMES',320,150);
  		textSize(30);
  		text('[TEAM LEBRON]',390,200);
  		image(imgStar,520,600);
  		image(imgLebron,800,600);
  		image(imgLakers,220,600);
  		image(gif1, 350, 300);
  		image(gif2, 650, 300);
  		textSize(30);
  		text('(LAKERS SMALL FORWARD) \n(25 PTS/ 7.8 REBS/ 10.8 AST)', mouseX, mouseY);
		  fill(255, 204, 100);
	   } else if (keyCode == RIGHT_ARROW){
		    image(img2, width/2, height/2);
			
  	 } else if (keyCode == LEFT_ARROW){
  		  image(img1, width/2, height/2);
  	}
	}
//---------------------------------ANTHONY-DAVIS----------------------------------

function drawOne() { 										               //Anthony Davis's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img3, width/2,height/2);
  	image(imgStar1,780,100);
  	textSize(50);
  	fill(255, 204, 100);
  	text('#3 ANTHONY DAVIS',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
 	  textSize(20);
  	text('7x ALL STAR SELECTION (STARTER)', 100,130);  
  	if (mouseIsPressed) {
  	background(0);
  	textSize(50);
		fill(255, 204, 100);
		textFont('GEORGIA')
  	text('ANTHONY DAVIS',300,150);
  	textSize(30);
  	text('[TEAM LEBRON]',390,200);
  	image(imgStar,520,600);
  	image(imgLebron,800,600);
  	image(imgLakers,220,600);
  	image(gif3, 350, 300);
  	image(gif4, 650, 300);
  	textSize(30);
  	text('(LAKERS POWER FOWARD) \n(26.6 PTS/ 9 REBS/ 3.3 AST)', mouseX, mouseY);
  	fill(255, 204, 100);
  	
	   } else if (keyCode == RIGHT_ARROW){
		image(img5, width/2, height/2);
  
  	} else if (keyCode == LEFT_ARROW){
  		image(img4, width/2, height/2);
  	}
	}
//---------------------------------JAMES-HARDEN-----------------------------------

function drawTwo() { 										               //James Harden's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img7, width/2, height/2);
  	image(imgStar1,780,100);
  	fill(255,205,100);
  	textSize(50);
  	text('#13 JAMES HARDEN',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	textSize(20);
  	text('8x ALL STAR SELECTION (STARTER)', 100,130); 
  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		  fill(255, 204, 100);
		  textFont('GEORGIA')
  		text('JAMES HARDEN',320,150);
  		textSize(30);
  		text('[TEAM LEBRON]',390,200);
  		image(imgStar,520,600);
  		image(imgLebron,800,600);
  		image(imgRockets,220,600);
  		image(gif5, 350, 300);
  		image(gif6, 650, 300);
  		textSize(30);
  		text('(ROCKETS SHOOTING GUARD) \n  (35.3 PTS/ 6.5 REBS/ 7.3 AST)', mouseX, mouseY);
  		fill(255, 204, 100);
  
  	} else if (keyCode == RIGHT_ARROW){
		image(img8, width/2, height/2);

  	} else if (keyCode == LEFT_ARROW){
  		image(img6, width/2, height/2);
	}
	}
//---------------------------------KAWHI-LEONARD----------------------------------

function drawThree() { 										             //Kawhi Leonard's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img9, width/2, height/2);
  	image(imgStar1,780,100);
  	fill(255,204,100);
  	textSize(50);
  	text('#2 KAWHI LEONARD',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	fill(255, 204, 100);
  	textSize(20);
  	text('4x ALL STAR SELECTION (STARTER)', 100,130); 

  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255, 204, 100);
		textFont('GEORGIA')
  		text('KAWHI LEONARD',300,150);
  		textSize(30);
  		text('[TEAM LEBRON]',390,200);
  		image(imgStar,520,600);
  		image(imgLebron,800,600);
  		image(imgClippers,220,600);
  		image(gif7, 350, 300);
  		image(gif8, 650, 300);
  		textSize(30);
  		text('(CLIPPERS SMALL FORWARD) \n  (27.2 PTS/ 7.5 REBS/ 5.3 AST)', mouseX, mouseY);
  		fill(255, 204, 100);

  	} else if (keyCode == RIGHT_ARROW){
		image(img11, width/2, height/2);

  	}  else if (keyCode == LEFT_ARROW){
  		image(img10, width/2, height/2);
	}
	}
//----------------------------------LUKA-DONCIC------------------------------------

function drawFour() { 										            //Luka Doncic's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img12, width/2, height/2);
  	image(imgStar1,780,100);
  	fill(255,204,100);
  	textSize(50);
  	text('#77 LUKA DONCIC',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	textSize(20);
  	text('1x ALL STAR SELECTION (STARTER)', 100,130); 
  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255, 204, 100);
		textFont('GEORGIA')
  		text('LUKA DONCIC',330,150);
  		textSize(30);
  		text('[TEAM LEBRON]',390,200);
  		image(imgStar,520,600);
  		image(imgLebron,800,600);
  		image(imgMavs,220,600);
  		image(gif9, 350, 300);
  		image(gif10, 650, 300);
  		textSize(30);
  		text('(MAVERICKS SHOOTING GUARD) \n   (28.9 PTS/ 9.5 REBS/ 8.7 AST)', mouseX, mouseY);
  		fill(255, 204, 100);

  	} else if (keyCode == RIGHT_ARROW){
		image(img14, width/2, height/2);

  	} else if (keyCode == LEFT_ARROW){
  		image(img13, width/2, height/2);
	}
	}
//----------------------------------JOEL-EMBIID------------------------------------

function drawFive() { 										            //Joel Embiid's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img15, width/2, height/2);
  	image(imgStar1,780,100);
  	fill(255);
  	textSize(50);
  	text('#21 JOEL EMBIID',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	textSize(20);
  	text('3x ALL STAR SELECTION (STARTER)', 100,130); 
  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255);
		textFont('GEORGIA')
  		text('JOEL EMBIID',360,150);
  		textSize(30);
  		text('[TEAM GIANNNIS]',390,200);
  		image(imgStar,520,600);
  		image(imgGiannis,800,600);
  		image(imgSixers,220,600);
  		image(gif11, 350, 300);
  		image(gif12, 650, 300);
  		textSize(30);
  		text('					  	(76ERS CENTER) \n(22.9 PTS/ 11.9 REBS/ 3.2 AST)', mouseX, mouseY);
  		fill(255, 204, 100);

  	} else if (keyCode == RIGHT_ARROW){
		image(img17, width/2, height/2);

  	} else if (keyCode == LEFT_ARROW){
  		image(img16, width/2, height/2);
	}
	}
//-----------------------------------TRAE-YOUNG-------------------------------------

function drawSix() { 										               //Trae Young's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img20, width/2, height/2);
  	image(imgStar1,780,100);
  	textSize(50);
  	fill(255);
  	text('#11 TRAE YOUNG',100,100);
  	text('2020 NBA ALLSTAR SELECTION',120,710);
  	textSize(20);
  	text('1x ALL STAR SELECTION (STARTER)', 100,130); 
  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255);
		textFont('GEORGIA')
  		text('TRAE YOUNG',350,150);
  		textSize(30);
  		text('[TEAM GIANNNIS]',380,200);
  		image(imgStar,520,600);
  		image(imgGiannis,800,600);
  		image(imgHawks,220,600);
  		image(gif13, 350, 300);
  		image(gif14, 650, 300);
  		textSize(30);
  		text('		(HAWKS POINT GUARD) \n(29.7 PTS/ 4.4 REBS/ 9.2 AST)', mouseX, mouseY);
  		fill(255, 204, 100);

  	} else if (keyCode == RIGHT_ARROW){
		image(img18, width/2, height/2);

  	} else if (keyCode == LEFT_ARROW){
  		image(img19, width/2, height/2);
	}
	}
//----------------------------------PASKAL-SIAKAM-----------------------------------

function drawSeven() { 										             //Paskal Siakam's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img21, width/2, height/2);
  	image(imgStar1,780,100);
  	textSize(50);
  	fill(255);
  	text('#43 PASKAL SIAKAM',90,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	textSize(20);
  	text('1x ALL STAR SELECTION (STARTER)', 100,130); 

  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255);
		textFont('GEORGIA')
  		text('PASKAL SIAKAM',320,150);
  		textSize(30);
  		text('[TEAM GIANNNIS]',390,200);
  		image(imgStar,520,600);
  		image(imgGiannis,800,600);
  		image(imgRaptors,220,600);
  		image(gif15, 350, 300);
  		image(gif16, 650, 300);
  		textSize(30);
  		text('(RAPTORS POWER FORWARD) \n  (23.5 PTS/ 7.5 REBS/ 3.5 AST)', mouseX, mouseY);
  		fill(255, 204, 100);

  	} else if (keyCode == RIGHT_ARROW){
		image(img23, width/2, height/2);

  	}else if (keyCode == LEFT_ARROW){
  		image(img22, width/2, height/2);
	}
	}
//----------------------------------KEMBA-WALKER------------------------------------

function drawEight() { 										             //Kemba Walker's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img24, width/2, height/2);
  	image(imgStar1,780,100);
  	textSize(50);
  	fill(255);
  	text('#8 KEMBA WALKER',100,100);
  	text('2020 NBA ALLSTAR SELECTION', 120,710);
  	textSize(20);
  	text('4x ALL STAR SELECTION (STARTER)', 100,130); 

  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255);
		textFont('GEORGIA')
  		text('KEMBA WALKER',310,150);
  		textSize(30);
  		text('[TEAM GIANNNIS]',380,200);
  		image(imgStar,520,600);
  		image(imgGiannis,800,600);
  		image(imgCeltics,220,600);
  		image(gif17, 350, 300);
  		image(gif18, 650, 300);
  		textSize(30);
  		text('	(CELTICS POINT GUARD) \n(21.8 PTS/ 4.1 REBS/ 5.0 AST)', mouseX, mouseY);
  		fill(255, 204, 100);

  	} else if (keyCode == RIGHT_ARROW){
		image(img26, width/2, height/2);

  	} else if (keyCode == LEFT_ARROW){
  		image(img25, width/2, height/2);
	}
	}
//------------------------------GIANNIS-ANTETOKOUMPO--------------------------------

function drawNine() {										               //Giannnis Antetokoumpo's Slide
  	createCanvas(1000, 800);
  	background(0);
  	image(img27, width/2, height/2);
  	image(imgStar1,780,100);
  	textSize(37);
  	fill(255);
  	text('#34 GIANNIS ANTETOKOUMPO',100,100);
  	textSize(50);
  	text('2020 NBA ALLSTAR SELECTION',120,710);
  	textSize(20);
  	text('4x ALL STAR SELECTION (STARTER)', 100,130); 

  	if (mouseIsPressed) {
  		background(0);
  		textSize(50);
		fill(255);
		textFont('GEORGIA')
  		text('GIANNIS ANTETOKOUMPO',200,150);
  		textSize(30);
  		text('[TEAM GIANNNIS]',380,200);
  		image(imgStar,520,620);
  		image(imgGiannis,800,620);
  		image(imgBucks,220,620);
  		image(gif19, 300, 400);
  		image(gif20, 750, 400);
  		textSize(20);
  		text('(BUCKS PORWER FORWARD) \n (30 PTS/ 13.5 REBS/ 5.8 AST)', mouseX, mouseY);
  

  	} else if (keyCode == RIGHT_ARROW){
		image(img29, width/2, height/2);

  	} else if (keyCode == LEFT_ARROW){
  		image(img28, width/2, height/2);
	}
	}
//--------------------------------ANIMATED-SLIDE-------------------------------------

function drawTen(){                                    //Animated Gifs Slide
  createCanvas(1000,1200);
  background(255);
  fill(0);
  textFont('GEORGIA')
  textSize(35);
  text('ENTER PLAYER #NUMBER TO LEARN MORE',135,960);
  text('ENTER "Q" TO RETURN TO MENU SELECTION',130,1000);
  text("LEFT CLICK ON MOUSE TO PLAY HIGHLIGHTS",128,1040);
  fill(0);
  textSize(55);
	image(cart1,170,140);
  text("#0",237,150);
	image(cart2,490,140);
  text("#1",560,150);
	image(cart3,810,140);
  text("#2",870,150);
	image(cart4,170,460);
  text("#3",237,470);
	image(cart5,490,460);
  text("#4",560,470);
	image(cart6,810,460);
  text("#5",870,470);
	image(cart7,170,760);
  text("#6",237,770);
	image(cart8,490,760);
  text("#8",560,770);
  image(cart9,810,760);
  text("#9",870,770);    
}


//-----------------------------FUNCTION-KEY-PRESSED----------------------------------
function keyPressed() {
	print("key pressed function");
	print("key = "+ key);
	if(key == '0'){
		state = stateStatic;
	}
	if(key == '1'){
		print("changing to one");
		state = stateOne;
	}
	if(key == '2'){
		print("changing to two");
		state = stateTwo;
	}
	if(key == '3'){
		print("changing to three");
		state = stateThree;
	}
	if(key == '4'){
		print("changing to four");
		state = stateFour;
	}
	if(key == '5'){
		print("changing to five");
		state = stateFive;
	}
	if(key == '6'){
		print("changing to six");
		state = stateSix;
	}
	if(key == '7'){
		print("changing to seven");
		state = stateSeven;
	}
	if(key == '8'){
		print("changing to eight");
		state = stateEight;
	}
	if(key == '9'){
		print("changing to nine");
		state = stateNine;
	}
	if(key == 'q'){
		print("changing to animations");
		state = stateTen;
	}

}
//---------------------------------------------------------------------------------
