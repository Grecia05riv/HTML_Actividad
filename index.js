// Prueba de JavaScript con Node.js
const nombre = "Grecia";
const materia = "Desarrollo Web";
const tecnologias = ["HTML", "CSS", "JavaScript", "Node.js"];

function saludar(estudiante) {
    return `Hola ${estudiante}, JavaScript se está ejecutando correctamente con Node.js.`;
}

console.log("=== Prueba de Node.js ===");
console.log(saludar(nombre));
console.log(`Materia: ${materia}`);
console.log("Tecnologías utilizadas:", tecnologias.join(", "));
console.log(`Resultado de una operación en JavaScript: 10 + 5 = ${10 + 5}`);
