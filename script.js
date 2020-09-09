var balX1 = 50;
var balY1 = 50;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(255, 100, 255);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  // teken een cirkel
  ellipse(balX1,balY1,80,80);
  

  balX1= balX1 + 9;
  balY1 = balY1 + 5;

  
  if (balY1 > 720 || balX1 > 1280) {
  balY1 = 50
  balX1 = 50;

  //if (balX ===) {

  //}
}
}