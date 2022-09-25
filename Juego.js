const read = require('prompt-sync')();

var final = false
var intentos1 = 0
var intentos2 = 0
var usuario1
var usuario2
var partida = 0
var usuario1correcto = false

juego();

function juego() {

    while (final = true) {
        console.info("inicia ronda usuario1");
        primernumero();
        segundonumero();
        console.info("termina ronda del usuario1");
        console.info("inicia ronda del usuario2");
        primernumero();
        segundonumero2();
        console.info("termina la ronda ")
        Partidas();


    };
};
function primernumero() {
    usuario1 = parseInt(read("Ingrese el primer numero: "));


    do {

        if (usuario1 <= 100 && usuario1 > 0) {
            usuario1correcto = true
            break
        } else {
            usuario1 = parseInt(read("numero incorrectoIngrese otro numero: "));
        }
    } while (usuario1correcto = true);

    console.clear();

}

function segundonumero() {

    if (usuario1correcto = true); {

        usuario2 = parseInt(read("Ingrese el segundo numero: "));

        do {
            do {

                if (usuario2 <= 100 && usuario2 > 0) {
                    usuario2correcto = true
                    break
                } else {
                    usuario2 = parseInt(read("numero incorrectoIngrese otro numero: "));
                }
            }
            while (usuario2correcto = true);

            var resta = 0

            if (usuario1 > usuario2) {

                resta = usuario1 - usuario2;
            } else {

                resta = usuario2 - usuario1;

            }
            intentos1 = intentos1 + 1;

            if (resta > 15) {
                console.info("estas lejos");
                usuario2 = parseInt(read("Ingrese otro numero: "));

            } else if (resta <= 15 && resta >= 10) {

                console.info("te estas acercando");
                usuario2 = parseInt(read("Ingrese otro numero: "));
            }

            else if (resta < 10 && resta >= 5) {

                console.info("cada vez mas cerca");
                usuario2 = parseInt(read("Ingrese otro numero: "))
            }
            else if (resta < 5 && resta >= 1) {

                console.info("tortafrita");
                usuario2 = parseInt(read("Ingrese otro numero: "));
            }
            else

                break
            ronda1 = true

        } while (ronda1 = true)
    }
}

function segundonumero2() {

    if (usuario1correcto = true);
    usuario2 = parseInt(read("Ingrese el segundo numero: "));

    do {
        do {

            if (usuario2 <= 100 && usuario2 > 0) {
                usuario2correcto = true
                break
            } else {
                usuario2 = parseInt(read("numero incorrectoIngrese otro numero: "));
            }
        }
        while (usuario2correcto = true);

        var resta2 = 0

        if (usuario1 > usuario2) {

            resta2 = usuario1 - usuario2;
        } else {

            resta2 = usuario2 - usuario1;

        } intentos2 = intentos2 + 1;

        if (resta2 > 15) {
            console.info("estas lejos");
            usuario2 = parseInt(read("Ingrese otro numero: "));

        } else if (resta2 <= 15 && resta2 >= 10) {

            console.info("te estas acercando");
            usuario2 = parseInt(read("Ingrese otro numero: "));
        }

        else if (resta2 < 10 && resta2 >= 5) {

            console.info("cada vez mas cerca");
            usuario2 = parseInt(read("Ingrese otro numero: "))
        }
        else if (resta2 < 5 && resta2 >= 1) {

            console.info("tortafrita");
            usuario2 = parseInt(read("Ingrese otro numero: "));
        }
        else {

            ronda1 = true
            partida = partida + 1
            break;
        }

    } while (ronda1 = true);
}

function Partidas() {

    if (partida < 3) {
        final = false
        return final
    } else {
        final = true;

    }

    if (final = true) {

        if (intentos1 < intentos2) {
            console.info("termina la partida ")
            console.info("EL GANADOR ES USUARIO 2");
        }
        else if (intentos2 < intentos1) {
            console.info("termina la partida ")
            console.info("EL GANADOR ES USUARIO 1");
        }

        else {
            console.info("termina la partida ")
            console.info("ES UN EMPATE JUEGEN OTRA PARTIDA");

        }

        console.info("los intentos del usuario 1 son " + intentos2);
        console.info("los intentos del usuario 2 son " + intentos1);
        intentos1 = 0
        intentos2 = 0
    };
}





