
const persona = {
    nombre: "yolf", edad: 30, direccion: { calle: "las guias", ciudad: "Rio hato", }, saludar() {
        console.log(`hola, mi nombre es 
    ${persona.nombre}`);
    },
};
console.log(persona);
console.log(persona.nombre);
persona.saludar();
persona.telefono = "555-555-5555";
console.log(persona.telefono);
persona.despedir = () => { console.log("Adios"); }; persona.despedir();
console.log(persona.direccion.calle); delete 
persona.telefono; 
console.log(persona.telefono); delete 
persona.despedir;
console.log(persona.despedir());