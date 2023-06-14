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
  } else {
    unsupportedBrowser.style.display = "block";
  }
}

draw();
