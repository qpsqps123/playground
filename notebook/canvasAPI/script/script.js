function draw() {
  const canvas = document.getElementById("tutorial");
  const unsupportedBrowser = document.getElementById("unsupportedBrowser");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    /* --------------------------------- 직사각형(rectangle) 연습 -------------------------------- */
    ctx.fillRect(30, 30, 40, 40);
    ctx.fillStyle = "rgb(255,100,100)";
    ctx.fillRect(40, 40, 40, 40);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.clearRect(35, 35, 20, 20);
    ctx.strokeRect(20, 20, 70, 70);

    /* ------------------------------- 선(line) 연습 ------------------------------- */
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 175);
    ctx.lineTo(150, 125);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(250, 275);
    ctx.lineTo(250, 225);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(350, 175);
    ctx.lineTo(350, 125);
    ctx.closePath();
    ctx.stroke();

    /* -------------------------------- 호(arc) 연습 ------------------------------- */
    ctx.beginPath();
    ctx.arc(400, 400, 100, 0, Math.PI * 2, false);
    ctx.stroke();

    // left eye
    ctx.beginPath();
    ctx.arc(350, 400, 25, 0, Math.PI, false);
    ctx.closePath();
    ctx.stroke();

    // left pupil(동공)
    ctx.beginPath();
    ctx.arc(350, 400, 10, 0, Math.PI, false);
    ctx.fill();

    // right eye
    ctx.beginPath();
    ctx.arc(450, 400, 25, 0, Math.PI, false);
    ctx.closePath();
    ctx.stroke();

    // right pupil
    ctx.beginPath();
    ctx.arc(450, 400, 10, 0, Math.PI, false);
    ctx.fill();

    // drawing rouneded right upper corner
    ctx.beginPath();
    ctx.moveTo(70, 200);
    ctx.lineTo(120, 200);
    ctx.arcTo(170, 200, 170, 250, 50);
    ctx.lineTo(170, 300);
    ctx.stroke();

    // 이차 & 삼차 베지어 곡선 연습 - 말풍선 만들기
    ctx.beginPath();
    ctx.moveTo(500, 200);
    ctx.quadraticCurveTo(450, 200, 450, 250);
    ctx.quadraticCurveTo(450, 300, 500, 300);
    ctx.lineTo(550, 300);
    ctx.bezierCurveTo(540, 320, 530, 325, 520, 330);
    ctx.bezierCurveTo(550, 330, 575, 315, 580, 300);
    ctx.quadraticCurveTo(630, 300, 630, 250);
    ctx.quadraticCurveTo(630, 200, 580, 200);
    ctx.lineTo(500, 200);
    ctx.stroke();

    // 글씨 쓰기
    // H
    ctx.beginPath();
    ctx.moveTo(500, 240);
    ctx.lineTo(500, 260);
    ctx.moveTo(500, 250);
    ctx.lineTo(515, 250);
    ctx.moveTo(515, 240);
    ctx.lineTo(515, 260);

    // E
    ctx.moveTo(530, 240);
    ctx.lineTo(545, 240);
    ctx.moveTo(530, 260);
    ctx.lineTo(530, 240);
    ctx.moveTo(530, 250);
    ctx.lineTo(545, 250);
    ctx.moveTo(530, 260);
    ctx.lineTo(545, 260);

    // Y
    ctx.moveTo(560, 240);
    ctx.lineTo(567, 250);
    ctx.moveTo(574, 240);
    ctx.lineTo(567, 250);
    ctx.moveTo(567, 250);
    ctx.lineTo(567, 260);
    ctx.stroke();

    // 느낌표 윗부분
    ctx.moveTo(590, 240);
    ctx.lineTo(598, 240);
    ctx.lineTo(596, 255);
    ctx.lineTo(592, 255);
    ctx.fill();

    // 느낌표 밑부분
    ctx.moveTo(592, 256);
    ctx.lineTo(596, 256);
    ctx.lineTo(596, 260);
    ctx.lineTo(592, 260);
    ctx.fill();
  } else {
    unsupportedBrowser.style.display = "block";
  }
}

draw();
