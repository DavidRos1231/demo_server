const db = require('./db/connection');
const axios = require('axios');

const pets = [
    "perro",
    "gato",
    "pajaro",
]

const razaperro=[
    "Pastor Aleman",
    "Labrador",
    "Pitbull",
    "Chihuahua",
]
const razagato=[
    "Siames",
    "Persa",
    "Bengala",
]

const razapajaro=[
    "Canario",
    "Perico",
    "Loro",
]
const nombresmascotas=[
    "Firulais",
    "Mimi",
    "Piolin",
    "Rocky",
    "Toby",
    "Luna",
    "Max",
    "Coco",
    "Simba",
    "Milo",
    "Lola",
    "Bella",    
]

const CreatePet = () => {
            var  name = nombresmascotas[Math.floor(Math.random() * nombresmascotas.length)];
            var raza
            var pet = pets[Math.floor(Math.random() * pets.length)];
            if(pet=="perro"){
                raza=razaperro[Math.floor(Math.random() * razaperro.length)];
            }
            if(pet=="gato"){
                raza=razagato[Math.floor(Math.random() * razagato.length)];
            }
            if(pet=="pajaro"){
                raza=razapajaro[Math.floor(Math.random() * razapajaro.length)];
            }
            var num1al10=Math.floor(Math.random() * 10);
            const sql = `INSERT INTO practica1.pets (name, type, breed, owner_id) VALUES ('${name}', '${pet}', '${raza}', '${num1al10}');`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log('Mascota creada!');
               /* const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Mascota creado', NOW())`;
                db.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log('Log creado!');
                });*/
            });

}

setInterval(CreatePet,2000);