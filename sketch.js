//github link
//https://prajit-shandilya.github.io/My-Newspaper-App-Final/

/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/


//var engine, world;
var bg, bg1, bg2, bg22;
var hindiButton, engButton;
var liveTV;
var gamestate = "startpage";
var button;
var elink1, elink2, elink3, elink4, elink5;
var hlink1, hlink2, hlink3, hlink4, hlink5;
var elive1, elive2;
var hlive1, hlive2;
var hele;
var tlink;
var screen;


function preload() {
    bg = loadImage("resources/background2.jpg");
    bg1 = loadImage("resources/background3.jpg");
    bg2 = loadImage("resources/hindi.png");
    bg22 = loadImage("resources/bg22.jpg");
    hindiButtonImg = loadImage("resources/hinp.jpg");
    engButtonImg = loadImage("resources/engp.jpg");
    liveTVIMG = loadImage("resources/live.jpg");



}

function setup() {

    createCanvas(windowWidth, windowHeight);

    //engine = Engine.create();
    //world = engine.world;

    //enterButton = new EnterButton(displayWidth / 2, displayHeight / 2 + 250, 170, 70);
    //hindiButton = new HindiButton(displayWidth / 2 - 340, displayHeight / 2 + 250, 170, 70);
    //engButton = new EngButton(displayWidth / 2 + 340, displayHeight / 2 + 250);

    screen = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)
    screen.addImage("lable1", bg);
    screen.addImage("lable2", bg1);
    screen.addImage("lable3", bg2);
    screen.addImage("lable8", bg22);

    hindiButton = createSprite(windowWidth / 6 + 300, windowHeight / 2 + windowHeight / 4, windowWidth / 6, 70);
    hindiButton.addImage("lable4", hindiButtonImg);
    englishButton = createSprite(windowWidth - 670, windowHeight / 2 + windowHeight / 4, windowWidth / 6, 110);
    englishButton.addImage("lable5", engButtonImg);
    liveTV = createSprite(windowWidth / 2, windowHeight / 3, windowWidth / 6, 70);
    liveTV.addImage("lable6", liveTVIMG);


    hindiButton.visible = false;
    englishButton.visible = false;
    liveTV.visible = false;


    elink1 = createA("https://timesofindia.indiatimes.com/", "Times Of India News");
    elink1.position(windowWidth / 2 - 250, windowHeight / 6 - 30);
    elink1.style("font-size", "60px");
    elink1.style("color", "red");
    elink1.style("background-color", "white");

    button = createButton("Back To Main");
    button.position(windowWidth / 2 + windowWidth / 4 - 200, windowHeight - 200);
    button.style("width", "190px");
    button.style("height", "100px");
    button.style("font-size", "30px");
    button.style("color", "green");

    hlink1 = createA("https://www.jagran.com/", "Dainik Jagran News");
    hlink1.position(windowWidth / 3 + 100, windowHeight / 6 + 70);
    hlink1.style("font-size", "60px");
    hlink1.style("color", "red");
    hlink1.style("background-color", "yellow");


    hlink2 = createA("https://www.aajtak.in/", "Aaj Tak News");
    hlink2.position(windowWidth / 3 + 100, windowHeight / 3 - 10);
    hlink2.style("font-size", "60px");
    hlink2.style("color", "red");
    hlink2.style("background-color", "yellow");

    hlink3 = createA("https://zeenews.india.com/hindi", "Zee News India");
    hlink3.position(windowWidth / 3 + 100, windowHeight / 3 + 90);
    hlink3.style("font-size", "60px");
    hlink3.style("color", "red");
    hlink3.style("background-color", "yellow");

    hlink4 = createA("https://www.bbc.com/hindi", "BBC News Hindi");
    hlink4.position(windowWidth / 3 + 100, windowHeight / 2 + 10);
    hlink4.style("font-size", "60px");
    hlink4.style("color", "red");
    hlink4.style("background-color", "yellow");

    hlink5 = createA("https://www.indiatv.in/", "India Tv News");
    hlink5.position(windowWidth / 3 + 100, windowHeight / 2 + 110);
    hlink5.style("font-size", "60px");
    hlink5.style("color", "red");
    hlink5.style("background-color", "yellow");

    elink2 = createA("https://www.hindustantimes.com/", "Hindustan Times News");
    elink2.position(windowWidth / 2 - 250, 280);
    elink2.style("font-size", "60px");
    elink2.style("color", "red");
    elink2.style("background-color", "white");

    elink3 = createA("https://indianexpress.com/todays-paper/", "Indian Express News");
    elink3.position(windowWidth / 2 - 250, 390);
    elink3.style("font-size", "60px");
    elink3.style("color", "red");
    elink3.style("background-color", "white");

    elink4 = createA("https://www.ndtv.com/", "NDTV News");
    elink4.position(windowWidth / 2 - 250, 500);
    elink4.style("font-size", "60px");
    elink4.style("color", "red");
    elink4.style("background-color", "white");

    elink5 = createA("https://www.dailypioneer.com/", "The Pioneer News");
    elink5.position(windowWidth / 2 - 250, 610);
    elink5.style("font-size", "60px");
    elink5.style("color", "red");
    elink5.style("background-color", "white");

    elive1 = createA("https://www.ndtv.com/video/live/channel/ndtv24x7", "NDTV Live");
    elive1.position(windowWidth / 2 - 270, 170);
    elive1.style("font-size", "60px");
    elive1.style("color", "green");
    elive1.style("background-color", "white");

    elive2 = createA("https://www.timesnownews.com/live-tv", "Times Now Live");
    elive2.position(windowWidth / 2 - 270, 280);
    elive2.style("font-size", "60px");
    elive2.style("color", "green");
    elive2.style("background-color", "white");

    hlive1 = createA("https://zeenews.india.com/live-tv", "Zee News Live");


    hlive1.position(windowWidth / 2 - 270, 390);
    hlive1.style("font-size", "60px");
    hlive1.style("color", "green");
    hlive1.style("background-color", "white");

    hlive2 = createA("https://bharat.republicworld.com/livetv", "Republic Bharat Live");
    hlive2.position(windowWidth / 2 - 270, 500);
    hlive2.style("font-size", "60px");
    hlive2.style("color", "green");
    hlive2.style("background-color", "white");

    hele = createElement("h2");
    hele.html("Created By:Prajit Shandilya");
    hele.position(windowWidth / 2 - 200, windowHeight - 100);
    hele.style("font-size", "30px");

}

function draw() {
    background(220);
    //stroke("black");
    //strokeWieght(20);

    //Engine.update(engine);


    //database.update("/");




    //enterButton.display();
    //hindiButton.display();
    //engButton.display();
    if (gamestate === "startpage") {
        hindiButton.visible = true;
        englishButton.visible = true;
        liveTV.visible = true;
        elink1.hide();
        hlink1.hide();
        hlink2.hide();
        button.hide();
        hlink3.hide();
        hlink4.hide();
        hlink5.hide();
        elink2.hide();
        elink3.hide();
        elink4.hide();
        elink5.hide();
        elive1.hide();
        elive2.hide();
        hlive1.hide();
        hlive2.hide();
        //tlink.show();
        if (mousePressedOver(englishButton)) {
            gamestate = "englishpage";
        }
        if (mousePressedOver(hindiButton)) {
            gamestate = "hindipage";
        }
        if (mousePressedOver(liveTV)) {
            gamestate = "livepage";
        }
    }
    if (gamestate === "englishpage") {
        screen.changeImage("lable2", bg1);
        englishButton.visible = false;
        hindiButton.visible = false;
        liveTV.visible = false;
        elink1.show();
        button.show();
        elink2.show();
        elink3.show();
        elink4.show();
        elink5.show();
        elive1.hide();
        elive2.hide();
        hlive1.hide();
        hlive2.hide();
        //tlink.hide();

        button.mousePressed(() => {
            gamestate = "startpage";
            screen.changeImage("lable1", bg);
            elink1.hide();
            button.hide();
            hindiButton.visible = true;
            englishButton.visible = true;

        })
    }

    if (gamestate === "hindipage") {
        screen.changeImage("lable8", bg22);
        englishButton.visible = false;
        hindiButton.visible = false;
        liveTV.visible = false;
        elink1.hide();
        hlink1.show();
        hlink2.show();
        button.show();
        hlink4.show();
        hlink3.show();
        hlink5.show();
        elive1.hide();
        elive2.hide();
        hlive1.hide();
        hlive2.hide();
        //tlink.hide();

        button.mousePressed(() => {
            gamestate = "startpage";
            screen.changeImage("lable1", bg);
            hlink1.hide();
            elink1.hide();
            button.hide();
            hindiButton.visible = true;
            englishButton.visible = true;

        })

    }
    if (gamestate === "livepage") {
        screen.changeImage("lable2", bg1);
        englishButton.visible = false;
        hindiButton.visible = false;
        liveTV.visible = false;

        elink1.hide();
        elink2.hide();
        elink3.hide();
        elink4.hide();
        elink5.hide();
        hlink1.hide();
        hlink2.hide();
        hlink3.hide();
        hlink4.hide();
        hlink5.hide();
        button.show();
        elive1.show();
        elive2.show();
        hlive1.show();
        hlive2.show();

        button.mousePressed(() => {
            gamestate = "startpage";
            screen.changeImage("lable1", bg);

            hindiButton.visible = true;
            englishButton.visible = true;
            liveTV.visible = true;

        })
    }

    drawSprites();

    textSize(95);
    fill(0, 0, 360);
    textFont("Comic Sans Ms");
    text("My Newspaper", windowWidth / 6 + 400, windowHeight / 6 - 80);
}





/*function mouseClicked(engButton) {
        background(bg1);
        engButton.eNewsPage();
    }*/