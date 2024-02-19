(function App() {
  const $canvas = document.createElement("canvas");
  const $unsupportedBrowser = document.createElement("p");

  if ($canvas) {
    $canvas.append("Bouncing ball animation");
    const _ctx = $canvas.getContext("2d");
    document.body.append($canvas);

    const _pixelRatio =
      window.devicePixelRatio > 1 ? window.devicePixelRatio : 1;

    const _stageWidth = document.body.clientWidth;
    const _stageHeight = document.body.clientHeight;
    $canvas.width = _stageWidth * _pixelRatio;
    $canvas.height = _stageHeight * _pixelRatio;
    _ctx.scale(_pixelRatio, _pixelRatio);
  } else {
    $unsupportedBrowser.append(
      "해당 브라우저에서 canvas를 지원하지 않습니다. canvas를 지원하는 브라우저를 사용해주세요."
    );
    document.body.append($unsupportedBrowser);
  }
})();
