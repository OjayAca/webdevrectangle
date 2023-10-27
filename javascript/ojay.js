function calculateCircle() {
  const radius = parseFloat(document.getElementById("circleRadius").value);
  const diameter = 2 * radius;
  const area = Math.PI * Math.pow(radius, 2);
  const circumference = 2 * Math.PI * radius;

  document.getElementById("circleDiameter").textContent = diameter.toFixed(2);
  document.getElementById("circleArea").textContent = area.toFixed(2);
  document.getElementById("circleCircumference").textContent = circumference.toFixed(2);
} 