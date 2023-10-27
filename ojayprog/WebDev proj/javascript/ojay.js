function calculateSquare() {
  const side = parseFloat(document.getElementById("squareSide").value);
  const area = Math.pow(side, 2);
  const perimeter = 4 * side;

  document.getElementById("squareArea").textContent = area.toFixed(2);
  document.getElementById("squarePerimeter").textContent = perimeter.toFixed(2);
}