function draw() {
  const canvas = document.getElementById("tutorial");
  const unsupportedBrowser = document.getElementById("unsupportedBrowser");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    /* --------------------------------- 예제 1 -------------------------------- */
    // ctx.fillstyle = "rgb(200,0,0)";
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = "rgba(0, 0, 200, 0.5";
    // ctx.fillRect(30, 30, 50, 50);

    /* --------------------------------- 예제 2 -------------------------------- */
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    /* ---------------------------------- 예제 3---------------------------------- */
    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();

    /* ---------------------------------- 예제 4 ---------------------------------- */
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouse (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
  } else {
    unsupportedBrowser.style.display = "block";
  }
}

draw();
