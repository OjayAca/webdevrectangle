const shapeSelect = document.getElementById("shapeSelect");
const circleInputs = document.getElementById("circleInputs");
const rectangleInputs = document.getElementById("rectangleInputs");
const squareInputs = document.getElementById("squareInputs");

function showInputs() {
    circleInputs.style.display = "none";
    rectangleInputs.style.display = "none";
    squareInputs.style.display = "none";

    const selectedShape = shapeSelect.value;
    if (selectedShape === "circle") {
        circleInputs.style.display = "block";
    } else if (selectedShape === "rectangle") {
        rectangleInputs.style.display = "block";
    } else if (selectedShape === "square") {
        squareInputs.style.display = "block";
    }
}

shapeSelect.addEventListener("change", showInputs);
showInputs();

function calculateCircle() {
    const radius = parseFloat(document.getElementById("circleRadius").value);
    const circumferenceDiameter = Math.PI * radius * 2;
    const circumferenceRadius = 2 * Math.PI * radius;

    document.getElementById("circleCircumferenceDiameterResult").textContent = circumferenceDiameter.toFixed(2);
    document.getElementById("circleCircumferenceRadiusResult").textContent = circumferenceRadius.toFixed(2);
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById("rectangleLength").value);
    const width = parseFloat(document.getElementById("rectangleWidth").value);
    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById("rectangleAreaResult").textContent = area.toFixed(2);
    document.getElementById("rectanglePerimeterResult").textContent = perimeter.toFixed(2);
}

function calculateSquare() {
    const side = parseFloat(document.getElementById("squareSide").value);
    const area = side * side;
    const perimeter = 4 * side;

    document.getElementById("squareAreaResult").textContent = area.toFixed(2);
    document.getElementById("squarePerimeterResult").textContent = perimeter.toFixed(2);
}