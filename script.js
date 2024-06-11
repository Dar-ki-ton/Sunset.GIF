// Canvas Setup
var cnv = document.getElementById("canvas");
var ctx = cnv.getContext(`2d`);
cnv.width = 500;
cnv.height = 400;

// Mountain and Sun Variables
var sunY = -300;
var lightY = 30;
var shadowY = 50;

// Star variables
var star1X = 600;
var star2X = 600;
var star3X = 600;

var star1Y = Math.random() * 200;
var star2Y = Math.random() * 200;
var star3Y = Math.random() * 200;

var starFrame = 0;

// Title variables
var day = `#5500A2`;
var night = `orange`;

// City Variables
var cityY = 400;

requestAnimationFrame(draw);

function draw() {
  // Sky
  ctx.fillStyle = `#3F007A`;
  ctx.fillRect(0, 0, 500, 400);

  sunset();

  shadowY -= 0.05;
  lightY -= 0.03;
  sunY += 0.5;
  if (sunY >= 600) {
    sunY = -300;
    shadowY = 50;
    lightY = 30;

    star1X = 600;
    star2X = 600;
    star3X = 600;

    star1X--;
    star2X -= 2;
    star3X -= 1.5;

    day = `#5500A2`;
    night = `orange`;

    cityY = 400;
  }

  if (shadowY <= 0) {
    shadowY = 0;
  }
  if (lightY <= 0) {
    lightY = 0;
  }

  // Star Images
  starImg(star1X, star1Y, 50, 45);
  starImg(star2X, star2Y, 50, 45);
  starImg(star3X, star3Y, 50, 45);

  // Star Animation
  if (sunY >= 150) {
    star1X--;
    star2X -= 2;
    star3X -= 1.5;

    day = `orange`;
    night = `#5500A2`;

    if (star1X <= -50) {
      star1X = 600;
      star1Y = Math.random() * 200;
    } else if (star2X <= -50) {
      star2X = 600;
      star2Y = Math.random() * 200;
    } else if (star3X <= -50) {
      star3X = 600;
      star3Y = Math.random() * 200;
    }
  }

  mountain();

  // City
  var city = document.getElementById(`image1`);
  ctx.drawImage(city, 0, cityY, 500, 250);

  cityY -= 0.25;
  if (cityY <= 200) {
    cityY = 200;
  }

  // Title
  ctx.fillStyle = day;
  ctx.font = `20px Impact`;
  ctx.fillText(`Day Ends,`, 20, 25);
  ctx.fillStyle = night;
  ctx.fillText(`Night Begins...`, 100, 25);

  requestAnimationFrame(draw);
}

function sunset() {
  // Sky to the Sun
  ctx.fillStyle = `#4C0091`;
  ctx.beginPath();
  ctx.arc(130, sunY, 300, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#5500A2`;
  ctx.beginPath();
  ctx.arc(130, sunY, 280, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#6100BA`;
  ctx.beginPath();
  ctx.arc(130, sunY, 250, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#6F00D4`;
  ctx.beginPath();
  ctx.arc(130, sunY, 225, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#7B00EC`;
  ctx.beginPath();
  ctx.arc(130, sunY, 200, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#8500FF`;
  ctx.beginPath();
  ctx.arc(130, sunY, 190, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#8512ED`;
  ctx.beginPath();
  ctx.arc(130, sunY, 180, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#8A1FE0`;
  ctx.beginPath();
  ctx.arc(130, sunY, 170, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#872DD2`;
  ctx.beginPath();
  ctx.arc(130, sunY, 160, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#843BC4`;
  ctx.beginPath();
  ctx.arc(130, sunY, 155, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#8142BD`;
  ctx.beginPath();
  ctx.arc(130, sunY, 140, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#8053AC`;
  ctx.beginPath();
  ctx.arc(130, sunY, 135, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#80629D`;
  ctx.beginPath();
  ctx.arc(130, sunY, 130, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#82708F`;
  ctx.beginPath();
  ctx.arc(130, sunY, 125, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#837C7C`;
  ctx.beginPath();
  ctx.arc(130, sunY, 120, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#8E8971`;
  ctx.beginPath();
  ctx.arc(130, sunY, 115, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#A3915C`;
  ctx.beginPath();
  ctx.arc(130, sunY, 110, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#BB9144`;
  ctx.beginPath();
  ctx.arc(130, sunY, 105, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#D09F2F`;
  ctx.beginPath();
  ctx.arc(130, sunY, 100, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#DC9E23`;
  ctx.beginPath();
  ctx.arc(130, sunY, 95, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = `#EE9811`;
  ctx.beginPath();
  ctx.arc(130, sunY, 90, 0, 2 * Math.PI);
  ctx.fill();

  // The Sun
  ctx.fillStyle = `#FF8C00`;
  ctx.beginPath();
  ctx.arc(130, sunY, 80, 0, 2 * Math.PI);
  ctx.fill();
}

function mountain() {
  // Mountain
  ctx.fillStyle = `#59A956`;
  ctx.beginPath();
  ctx.moveTo(0, 220);
  ctx.lineTo(10, 220);
  ctx.lineTo(20, 230);
  ctx.lineTo(30, 240);
  ctx.lineTo(50, 230);
  ctx.lineTo(60, 180);
  ctx.lineTo(70, 150);
  ctx.lineTo(150, 120);
  ctx.lineTo(180, 140);
  ctx.lineTo(200, 200);
  ctx.lineTo(220, 220);
  ctx.lineTo(250, 240);
  ctx.lineTo(275, 245);
  ctx.lineTo(300, 240);
  ctx.lineTo(305, 200);
  ctx.lineTo(320, 150);
  ctx.lineTo(325, 140);
  ctx.lineTo(330, 135);
  ctx.lineTo(340, 160);
  ctx.lineTo(360, 180);
  ctx.lineTo(380, 170);
  ctx.lineTo(400, 80);
  ctx.lineTo(450, 50);
  ctx.lineTo(480, 60);
  ctx.lineTo(500, 80);
  ctx.lineTo(500, 400);
  ctx.lineTo(0, 400);
  ctx.fill();

  // Mountain Shade I
  ctx.fillStyle = `#55A152`;
  ctx.beginPath();
  ctx.moveTo(0, 230 + shadowY);
  ctx.lineTo(5, 230 + shadowY);
  ctx.lineTo(25, 260 + shadowY);
  ctx.lineTo(60, 240 + shadowY);
  ctx.lineTo(70, 180 + shadowY);
  ctx.lineTo(80, 160 + shadowY);
  ctx.lineTo(150, 140 + shadowY);
  ctx.lineTo(170, 150 + shadowY);
  ctx.lineTo(180, 200 + shadowY);
  ctx.lineTo(240, 250 + shadowY);
  ctx.lineTo(280, 255 + shadowY);
  ctx.lineTo(320, 250 + shadowY);
  ctx.lineTo(325, 200 + shadowY);
  ctx.lineTo(335, 150 + shadowY);
  ctx.lineTo(340, 160 + shadowY);
  ctx.lineTo(360, 180 + shadowY);
  ctx.lineTo(400, 175 + shadowY);
  ctx.lineTo(420, 90 + shadowY);
  ctx.lineTo(460, 60 + shadowY);
  ctx.lineTo(480, 65 + shadowY);
  ctx.lineTo(500, 85 + shadowY);
  ctx.lineTo(500, 400);
  ctx.lineTo(0, 400);
  ctx.fill();

  // Mountain Shade II
  ctx.fillStyle = `#248C35`;
  ctx.beginPath();
  ctx.moveTo(0, 230 + shadowY);
  ctx.lineTo(5, 230 + shadowY);
  ctx.lineTo(20, 280 + shadowY);
  ctx.lineTo(75, 250 + shadowY);
  ctx.lineTo(90, 200 + shadowY);
  ctx.lineTo(150, 180 + shadowY);
  ctx.lineTo(160, 185 + shadowY);
  ctx.lineTo(165, 210 + shadowY);
  ctx.lineTo(230, 270 + shadowY);
  ctx.lineTo(280, 280 + shadowY);
  ctx.lineTo(330, 270 + shadowY);
  ctx.lineTo(340, 210 + shadowY);
  ctx.lineTo(350, 170 + shadowY);
  ctx.lineTo(360, 180 + shadowY);
  ctx.lineTo(410, 190 + shadowY);
  ctx.lineTo(430, 120 + shadowY);
  ctx.lineTo(480, 65 + shadowY);
  ctx.lineTo(500, 85 + shadowY);
  ctx.lineTo(500, 400);
  ctx.lineTo(0, 400);
  ctx.fill();

  // Mountain Lighting I
  ctx.fillStyle = `#9AB748`;
  ctx.beginPath();
  ctx.moveTo(300, 240);
  ctx.lineTo(305, 200);
  ctx.lineTo(320, 150);
  ctx.lineTo(325, 140);
  ctx.lineTo(330, 135);
  ctx.lineTo(335, 150);
  ctx.lineTo(325, 200 + lightY);
  ctx.lineTo(320, 250 + lightY);
  ctx.lineTo(310, 250 + lightY);
  ctx.fill();

  // Mountain Snow I
  ctx.fillStyle = `#83807C`;
  ctx.beginPath();
  ctx.moveTo(60, 180);
  ctx.lineTo(70, 150);
  ctx.lineTo(150, 120);
  ctx.lineTo(180, 140);
  ctx.lineTo(170, 180 + lightY);
  ctx.lineTo(160, 180 + lightY);
  ctx.lineTo(150, 170 + lightY);
  ctx.lineTo(130, 180 + lightY);
  ctx.lineTo(100, 180 + lightY);
  ctx.lineTo(90, 200 + lightY);
  ctx.fill();

  // Mountain Lighting II
  ctx.fillStyle = `#9AB748`;
  ctx.beginPath();
  ctx.moveTo(0, 220);
  ctx.lineTo(10, 220);
  ctx.lineTo(20, 230);
  ctx.lineTo(30, 240);
  ctx.lineTo(50, 230);
  ctx.lineTo(60, 180);
  ctx.lineTo(70, 150);
  ctx.lineTo(150, 120);
  ctx.lineTo(180, 140);
  ctx.lineTo(200, 200);
  ctx.lineTo(250, 240);
  ctx.lineTo(280, 255 + lightY);
  ctx.lineTo(240, 250 + lightY);
  ctx.lineTo(180, 200 + lightY);
  ctx.lineTo(170, 150 + lightY);
  ctx.lineTo(150, 140 + lightY);
  ctx.lineTo(80, 160 + lightY);
  ctx.lineTo(70, 180 + lightY);
  ctx.lineTo(55, 235 + lightY);
  ctx.lineTo(25, 250 + lightY);
  ctx.lineTo(5, 230 + lightY);
  ctx.lineTo(0, 230 + lightY);
  ctx.fill();

  // Snow Lighting I
  ctx.fillStyle = `white`;
  ctx.beginPath();
  ctx.moveTo(60, 180);
  ctx.lineTo(70, 150);
  ctx.lineTo(150, 120);
  ctx.lineTo(180, 140);
  ctx.lineTo(173, 168 + lightY);
  ctx.lineTo(170, 150 + lightY);
  ctx.lineTo(150, 140 + lightY);
  ctx.lineTo(80, 160 + lightY);
  ctx.lineTo(68, 185 + lightY);
  ctx.fill();

  // Mountain Lighting III
  ctx.fillStyle = `#9AB748`;
  ctx.beginPath();
  ctx.moveTo(380, 170);
  ctx.lineTo(400, 80);
  ctx.lineTo(450, 50);
  ctx.lineTo(480, 60);
  ctx.lineTo(480, 60);
  ctx.lineTo(500, 80);
  ctx.lineTo(500, 85 + lightY);
  ctx.lineTo(480, 65 + lightY);
  ctx.lineTo(420, 90 + lightY);
  ctx.lineTo(400, 175 + lightY);
  ctx.lineTo(390, 175 + lightY);
  ctx.fill();

  // Mountain Snow II
  ctx.fillStyle = `#83807C`;
  ctx.beginPath();
  ctx.moveTo(400, 80);
  ctx.lineTo(450, 50);
  ctx.lineTo(480, 60);
  ctx.lineTo(500, 80);
  ctx.lineTo(500, 100 + lightY);
  ctx.lineTo(470, 85 + lightY);
  ctx.lineTo(465, 90 + lightY);
  ctx.lineTo(460, 90 + lightY);
  ctx.lineTo(460, 110 + lightY);
  ctx.lineTo(420, 110 + lightY);
  ctx.lineTo(410, 90 + lightY);
  ctx.lineTo(390, 125);
  ctx.fill();

  // Snow Lighting II
  ctx.fillStyle = `white`;
  ctx.beginPath();
  ctx.moveTo(390, 125);
  ctx.lineTo(400, 80);
  ctx.lineTo(450, 50);
  ctx.lineTo(480, 60);
  ctx.lineTo(500, 80);
  ctx.lineTo(500, 85 + lightY);
  ctx.lineTo(480, 65 + lightY);
  ctx.lineTo(420, 90 + lightY);
  ctx.lineTo(418, 105 + lightY);
  ctx.lineTo(410, 90 + lightY);
  ctx.fill();
}

function starImg(x, y, width, height) {
  // Stars
  var star = document.getElementById(`image2`);

  ctx.drawImage(star, x, y, width, height);

  requestAnimationFrame(starImg);
}
