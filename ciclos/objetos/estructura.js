function persona (nombre,apellido,edad){
this.nombre = nombre;
this.apellido = apellido;
this.adad = edad;

const persona1 = new Persona("marta ","yolf", 25);

console.log(persona1);

const persona2 = new Persona("Diego", "De Granda", 35);

console.log(persona2);

Persona.prototype.telefono = "555-555-5555";

//  propiedad 

persona1.nacionalidad = "panama";

console.log(persona1);
console.log(persona2);

//  metodo 

Persona.prototype.saludar = function () {
console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();
}