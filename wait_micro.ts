import *as rls from "readline-sync"
let llegoElColectivo : string = rls.question("¿esta viniendo el colectivo?")
//Asumamos que el usuario solo puede ingresar "S" para si o "N" para no.
while(llegoElColectivo == "N") {
    console.log("sigo esperando el colectivo");
    llegoElColectivo = rls.question("¿ya vino el colectivo")
} console.log("llego el colectivo");
