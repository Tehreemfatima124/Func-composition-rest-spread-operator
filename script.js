const makecofee =(cofee) => `${cofee} in a cup`
const addingcofee =(cofee) => `add sugar and ${cofee}`
const readycofee = (cofee) => `make a cofee ${cofee}`
const cofeeready = (cofee) => readycofee(addingcofee(makecofee(cofee)))
console.log(cofee('milk'))