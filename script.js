// Obtenemos la fecha actual para mostrarla en el placeholder
const dateElement = document.getElementById('date');
const today = new Date();
dateElement.textContent = `Última actualización: ${today.toLocaleDateString()} - ${today.toLocaleTimeString()}`;
