const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle;

function setup() {
  createCanvas(1360,620);

  engine = Engine.create();
  world = engine.world;

  division1 = new Divisions(135,505,20,230)
  division2 = new Divisions(335,505,20,230)
  division3 = new Divisions(535,505,20,230)
  division4 = new Divisions(735,505,20,230)
  division5 = new Divisions(935,505,20,230)
  division6 = new Divisions(1135,505,20,230)

  plinko1 = new Plinko(130,140,10)
  plinko2 = new Plinko(190,140,10)
  plinko3 = new Plinko(250,140,10)
  plinko4 = new Plinko(310,140,10)
  plinko5 = new Plinko(370,140,10)
  plinko6 = new Plinko(430,140,10)
  plinko7 = new Plinko(490,140,10)
  plinko8 = new Plinko(550,140,10)
  plinko9 = new Plinko(610,140,10)
  plinko10 = new Plinko(670,140,10)
  plinko11 = new Plinko(730,140,10)
  plinko12 = new Plinko(790,140,10)
  plinko13 = new Plinko(850,140,10)
  plinko14 = new Plinko(910,140,10)
  plinko15 = new Plinko(970,140,10)
  plinko16 = new Plinko(1030,140,10)
  plinko17 = new Plinko(1090,140,10)
  plinko18 = new Plinko(1150,140,10)
  plinko19 = new Plinko(1210,140,10)
  plinko20 = new Plinko(1270,140,10)

  plinko21 = new Plinko(100,200,10)
  plinko22 = new Plinko(160,200,10)
  plinko23 = new Plinko(220,200,10)
  plinko24 = new Plinko(280,200,10)
  plinko25 = new Plinko(340,200,10)
  plinko26 = new Plinko(400,200,10)
  plinko27 = new Plinko(460,200,10)
  plinko28 = new Plinko(520,200,10)
  plinko29 = new Plinko(580,200,10)
  plinko30 = new Plinko(640,200,10)
  plinko31 = new Plinko(700,200,10)
  plinko32 = new Plinko(760,200,10)
  plinko33 = new Plinko(820,200,10)
  plinko34 = new Plinko(880,200,10)
  plinko35 = new Plinko(940,200,10)
  plinko36 = new Plinko(1000,200,10)
  plinko37 = new Plinko(1060,200,10)
  plinko38 = new Plinko(1120,200,10)
  plinko39 = new Plinko(1180,200,10)
  plinko40 = new Plinko(1240,200,10)

  plinko41 = new Plinko(130,260,10)
  plinko42 = new Plinko(190,260,10)
  plinko43 = new Plinko(250,260,10)
  plinko44 = new Plinko(310,260,10)
  plinko45 = new Plinko(370,260,10)
  plinko46 = new Plinko(430,260,10)
  plinko47 = new Plinko(490,260,10)
  plinko48 = new Plinko(550,260,10)
  plinko49 = new Plinko(610,260,10)
  plinko50 = new Plinko(670,260,10)
  plinko51 = new Plinko(730,260,10)
  plinko52 = new Plinko(790,260,10)
  plinko53 = new Plinko(850,260,10)
  plinko54 = new Plinko(910,260,10)
  plinko55 = new Plinko(970,260,10)
  plinko56 = new Plinko(1030,260,10)
  plinko57 = new Plinko(1090,260,10)
  plinko58 = new Plinko(1150,260,10)
  plinko59 = new Plinko(1210,260,10)
  plinko60 = new Plinko(1270,260,10)

  plinko61 = new Plinko(100,320,10)
  plinko62 = new Plinko(160,320,10)
  plinko63 = new Plinko(220,320,10)
  plinko64 = new Plinko(280,320,10)
  plinko65 = new Plinko(340,320,10)
  plinko66 = new Plinko(400,320,10)
  plinko67 = new Plinko(460,320,10)
  plinko68 = new Plinko(520,320,10)
  plinko69 = new Plinko(580,320,10)
  plinko70 = new Plinko(640,320,10)
  plinko71 = new Plinko(700,320,10)
  plinko72 = new Plinko(760,320,10)
  plinko73 = new Plinko(820,320,10)
  plinko74 = new Plinko(880,320,10)
  plinko75 = new Plinko(940,320,10)
  plinko76 = new Plinko(1000,320,10)
  plinko77 = new Plinko(1060,320,10)
  plinko78 = new Plinko(1120,320,10)
  plinko79 = new Plinko(1180,320,10)
  plinko80 = new Plinko(1240,320,10)
}

function draw() {
  background("lightgreen");  
Engine.update(engine)

text (mouseX+","+mouseY,100,100)

division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
plinko20.display();

plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();
plinko30.display();
plinko31.display();
plinko32.display();
plinko33.display();
plinko34.display();
plinko35.display();
plinko36.display();
plinko37.display();
plinko38.display();
plinko39.display();
plinko40.display();

plinko41.display();
plinko42.display();
plinko43.display();
plinko44.display();
plinko45.display();
plinko46.display();
plinko47.display();
plinko48.display();
plinko49.display();
plinko50.display();
plinko51.display();
plinko52.display();
plinko53.display();
plinko54.display();
plinko55.display();
plinko56.display();
plinko57.display();
plinko58.display();
plinko59.display();
plinko60.display();

plinko61.display();
plinko62.display();
plinko63.display();
plinko64.display();
plinko65.display();
plinko66.display();
plinko67.display();
plinko68.display();
plinko69.display();
plinko70.display();
plinko71.display();
plinko72.display();
plinko73.display();
plinko74.display();
plinko75.display();
plinko76.display();
plinko77.display();
plinko78.display();
plinko79.display();
plinko80.display();


}

function mousePressed(){
  particle = new Particle(mouseX,10,10)
  particle.display();
}