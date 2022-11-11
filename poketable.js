
//Tipo del ataque que desea realizar
// donde :
//"Insecto"=0
//Siniestro"=1
//"Dragon" =2
//"Electrico"=3
//"Hada" =4
//"Lucha" =5
//"Fuego" =6
//"Volador"=7
//"Fantasma"=8
//"Planta" =9
//"Tierra" =10
//"Hielo" =11
//"Normal"=12
//"Veneno" =13
//"Psico" =14
//"Roca" =15
//"Acero" =16
//"Agua"=17
//""=18   (es cuando no posee tipo adiconal)

// traducir el tipo a espanol
const typeattack = ["Insecto", "Siniestro", "Dragon", "Electrico", "Hada", "Lucha", "Fuego", "Volador", "Fantasma", "Planta", "Tierra", "Hielo", "Normal", "Veneno", "Psico", "Roca", "Acero", "Agua", ""]


// Constantes defensa por tipo 

const def0 = bugdef = [1, 1, 1, 1, 1, 0.5, 2, 2, 1, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1]
const def1 = darkdef = [2, 0.5, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 1]
const def2 = dragondef = [1, 1, 2, 0.5, 2, 1, 0.5, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 0.5]
const def3 = electricdef = [1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1]
const def4 = fairydef = [0.5, 0.5, 0, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1]
const def5 = fightingdef = [0.5, 0.5, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 1]
const def6 = firedef = [0.5, 1, 1, 1, 0.5, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 2, 0.5, 2]
const def7 = flyingdef = [0.5, 1, 1, 2, 1, 0.5, 1, 1, 1, 0.5, 0, 2, 1, 1, 1, 2, 1, 1]
const def8 = ghostdef = [0.5, 2, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1]
const def9 = grassdef = [2, 1, 1, 0.5, 1, 1, 2, 2, 1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 0.5]
const def10 = grounddef = [1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0.5, 1, 0.5, 1, 2]
const def11 = icedef = [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 0.5, 1, 1, 1, 1, 2, 2, 1]
const def12 = normaldef = [1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const def13 = poisondef = [0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 2, 1, 1, 0.5, 2, 1, 1, 1]
const def14 = psychicdef = [2, 2, 1, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 1]
const def15 = rockdef = [1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 2, 2, 1, 0.5, 0.5, 1, 1, 2, 2]
const def16 = steeldef = [0.5, 1, 0.5, 1, 0.5, 2, 2, 0.5, 1, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1]
const def17 = waterdef = [1, 1, 1, 2, 1, 1, 0.5, 1, 1, 2, 1, 0.5, 1, 0, 1, 1, 0.5, 0.5]
const def18 = none = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const defenceType = [def0, def1, def2, def3, def4, def5, def6, def7, def8, def9, def10, def11, def12, def13, def14, def15, def16, def17, def18]


// llamar datos tipos.

//Tipo del ataque usado.
//Tipo pokemon atacado. 

function calcular() {

    // traer tipo del Html.
    let attack = document.getElementById("ataque").value;
    let poketype1 = document.getElementById("primertipo1").value;
    let poketype2 = document.getElementById("segundotipo2").value;
    let poketype3 = document.getElementById("teracristalizacion").value;

    let defenceType1 = defenceType[poketype1]
    let defenceType2 = defenceType[poketype2]
    let defenceType3 = defenceType[poketype3]

    //seleccionar la matriz de tipos apropoada. 
    //Resistencias pokemon atacado
    const defence1 = [def0[attack], def1[attack], def2[attack], def3[attack], def4[attack], def5[attack], def6[attack], def7[attack], def8[attack], def9[attack], def10[attack], def11[attack], def12[attack], def13[attack], def14[attack], def15[attack], def16[attack], def17[attack], def18[attack]]
    const defence2 = [def0[attack], def1[attack], def2[attack], def3[attack], def4[attack], def5[attack], def6[attack], def7[attack], def8[attack], def9[attack], def10[attack], def11[attack], def12[attack], def13[attack], def14[attack], def15[attack], def16[attack], def17[attack], def18[attack]]
    const defence3 = [def0[attack], def1[attack], def2[attack], def3[attack], def4[attack], def5[attack], def6[attack], def7[attack], def8[attack], def9[attack], def10[attack], def11[attack], def12[attack], def13[attack], def14[attack], def15[attack], def16[attack], def17[attack], def18[attack]]

    //Resistencias pokemon atacado
    let defencepoketype1 = [defenceType1[0], defenceType1[1], defenceType1[2], defenceType1[3], defenceType1[4], defenceType1[5], defenceType1[6], defenceType1[7], defenceType1[8], defenceType1[9], defenceType1[10], defenceType1[11], defenceType1[12], defenceType1[13], defenceType1[14], defenceType1[15], defenceType1[16], defenceType1[17], defenceType1[18]]

    let defencepoketype2 = [defenceType2[0], defenceType2[1], defenceType2[2], defenceType2[3], defenceType2[4], defenceType2[5], defenceType2[6], defenceType2[7], defenceType2[8], defenceType2[9], defenceType2[10], defenceType2[11], defenceType2[12], defenceType2[13], defenceType2[14], defenceType2[15], defenceType2[16], defenceType2[17], defenceType2[18]]

    let defencepoketype3 = [defenceType3[0], defenceType3[1], defenceType3[2], defenceType3[3], defenceType3[4], defenceType3[5], defenceType3[6], defenceType3[7], defenceType3[8], defenceType3[9], defenceType3[10], defenceType3[11], defenceType3[12], defenceType3[13], defenceType3[14], defenceType3[15], defenceType3[16], defenceType3[17], defenceType3[18]]

    // leer resultado 
    if (poketype2 == 18) {
        document.getElementById("resultado1").innerHTML = "Un ataque tipo " + typeattack[attack] + " golpea en propocion " + "x" + (defence1[poketype1] * defence2[poketype2] * defence3[poketype3]) + " a un pokemon de tipo " + typeattack[poketype1] + ".";
    } else {
        if (poketype3 == 18) {
            document.getElementById("resultado1").innerHTML = "Un ataque tipo " + typeattack[attack] + " golpea en propocion " + "x" + (defence1[poketype1] * defence2[poketype2] * defence3[poketype3]) + " a un pokemon de tipo " + typeattack[poketype1] + " / " + typeattack[poketype2] + ".";
        } else {
            document.getElementById("resultado1").innerHTML = "Un ataque tipo " + typeattack[attack] + " golpea en propocion " + "x" + (defence1[poketype1] * defence2[poketype2] * defence3[poketype3]) + " a un pokemon de tipo " + typeattack[poketype1] + " / " + typeattack[poketype2] + " " + " Teracristalizado a el tipo " + typeattack[poketype3] + "."
        }

    }
    // efectividades e imprimirlas.
    document.getElementById("resultado2").innerHTML = "Tu ataque de tipo " + typeattack[attack] + " afecta de la siquiente forma a los demas tipos :" + "<br>"
        + "<br>" + typeattack[0] + "  = x " + bugdef[attack]
        + "<br>" + typeattack[1] + "  = x " + darkdef[attack]
        + "<br>" + typeattack[2] + "  = x " + dragondef[attack]
        + "<br>" + typeattack[3] + "  = x " + electricdef[attack]
        + "<br>" + typeattack[4] + "  = x " + fairydef[attack]
        + "<br>" + typeattack[5] + "  = x " + fightingdef[attack]
        + "<br>" + typeattack[6] + "  = x " + firedef[attack]
        + "<br>" + typeattack[7] + "  = x " + flyingdef[attack]
        + "<br>" + typeattack[8] + "  = x " + ghostdef[attack]
        + "<br>" + typeattack[9] + "  = x " + grassdef[attack]
        + "<br>" + typeattack[10] + "  = x " + grounddef[attack]
        + "<br>" + typeattack[11] + "  = x " + icedef[attack]
        + "<br>" + typeattack[12] + "  = x " + normaldef[attack]
        + "<br>" + typeattack[13] + "  = x " + poisondef[attack]
        + "<br>" + typeattack[14] + "  = x " + psychicdef[attack]
        + "<br>" + typeattack[15] + "  = x " + rockdef[attack]
        + "<br>" + typeattack[16] + "  = x " + steeldef[attack]
        + "<br>" + typeattack[17] + "  = x " + waterdef[attack]



    // encontrar Efectividades y fortalezas  e imprimirlas.
    if (poketype2 == 18) {
        document.getElementById("resultado3").innerHTML = "tu pokemon con los tipos " + typeattack[poketype1] + " presenta las siguientes vulnerabilidades / fortalezas ante :" + " <br> "
            + "<br>" + typeattack[0] + "  = x " + defencepoketype1[0]
            + "<br>" + typeattack[1] + "  = x " + defencepoketype1[1]
            + "<br>" + typeattack[2] + "  = x " + defencepoketype1[2]
            + "<br>" + typeattack[3] + "  = x " + defencepoketype1[3]
            + "<br>" + typeattack[4] + "  = x " + defencepoketype1[4]
            + "<br>" + typeattack[5] + "  = x " + defencepoketype1[5]
            + "<br>" + typeattack[6] + "  = x " + defencepoketype1[6]
            + "<br>" + typeattack[7] + "  = x " + defencepoketype1[7]
            + "<br>" + typeattack[8] + "  = x " + defencepoketype1[8]
            + "<br>" + typeattack[9] + "  = x " + defencepoketype1[9]
            + "<br>" + typeattack[10] + "  = x " + defencepoketype1[10]
            + "<br>" + typeattack[11] + "  = x " + defencepoketype1[11]
            + "<br>" + typeattack[12] + "  = x " + defencepoketype1[12]
            + "<br>" + typeattack[13] + "  = x " + defencepoketype1[13]
            + "<br>" + typeattack[14] + "  = x " + defencepoketype1[14]
            + "<br>" + typeattack[15] + "  = x " + defencepoketype1[15]
            + "<br>" + typeattack[16] + "  = x " + defencepoketype1[16]
            + "<br>" + typeattack[17] + "  = x " + defencepoketype1[17]
 
    } else {

        if (poketype3 == 18) {
            document.getElementById("resultado3").innerHTML = "tu pokemon con los tipos " + typeattack[poketype1] + " / " + typeattack[poketype2] + " presenta las siguientes vulnerabilidades / fortalezas ante :" + " <br> "
                + "<br>" + typeattack[0] + "  = x " + defencepoketype1[0] * defencepoketype2[0]
                + "<br>" + typeattack[1] + "  = x " + defencepoketype1[1] * defencepoketype2[1]
                + "<br>" + typeattack[2] + "  = x " + defencepoketype1[2] * defencepoketype2[2]
                + "<br>" + typeattack[3] + "  = x " + defencepoketype1[3] * defencepoketype2[3]
                + "<br>" + typeattack[4] + "  = x " + defencepoketype1[4] * defencepoketype2[4]
                + "<br>" + typeattack[5] + "  = x " + defencepoketype1[5] * defencepoketype2[5]
                + "<br>" + typeattack[6] + "  = x " + defencepoketype1[6] * defencepoketype2[6]
                + "<br>" + typeattack[7] + "  = x " + defencepoketype1[7] * defencepoketype2[7]
                + "<br>" + typeattack[8] + "  = x " + defencepoketype1[8] * defencepoketype2[8]
                + "<br>" + typeattack[9] + "  = x " + defencepoketype1[9] * defencepoketype2[9]
                + "<br>" + typeattack[10] + "  = x " + defencepoketype1[10] * defencepoketype2[10]
                + "<br>" + typeattack[11] + "  = x " + defencepoketype1[11] * defencepoketype2[11]
                + "<br>" + typeattack[12] + "  = x " + defencepoketype1[12] * defencepoketype2[12]
                + "<br>" + typeattack[13] + "  = x " + defencepoketype1[13] * defencepoketype2[13]
                + "<br>" + typeattack[14] + "  = x " + defencepoketype1[14] * defencepoketype2[14]
                + "<br>" + typeattack[15] + "  = x " + defencepoketype1[15] * defencepoketype2[15]
                + "<br>" + typeattack[16] + "  = x " + defencepoketype1[16] * defencepoketype2[16]
                + "<br>" + typeattack[17] + "  = x " + defencepoketype1[17] * defencepoketype2[17]
 
        } else {
            document.getElementById("resultado3").innerHTML = "tu pokemon con los tipos " + typeattack[poketype1] + " / " + typeattack[poketype2] + " y Teracristalizado al tipo " + typeattack[poketype3] + " presenta las siguientes vulnerabilidades / fortalezas ante :" + " <br> "
                + "<br>" + typeattack[0] + "  = x " + defencepoketype1[0] * defencepoketype2[0] * defencepoketype3[0]
                + "<br>" + typeattack[1] + "  = x " + defencepoketype1[1] * defencepoketype2[1] * defencepoketype3[1]
                + "<br>" + typeattack[2] + "  = x " + defencepoketype1[2] * defencepoketype2[2] * defencepoketype3[2]
                + "<br>" + typeattack[3] + "  = x " + defencepoketype1[3] * defencepoketype2[3] * defencepoketype3[3]
                + "<br>" + typeattack[4] + "  = x " + defencepoketype1[4] * defencepoketype2[4] * defencepoketype3[4]
                + "<br>" + typeattack[5] + "  = x " + defencepoketype1[5] * defencepoketype2[5] * defencepoketype3[5]
                + "<br>" + typeattack[6] + "  = x " + defencepoketype1[6] * defencepoketype2[6] * defencepoketype3[6]
                + "<br>" + typeattack[7] + "  = x " + defencepoketype1[7] * defencepoketype2[7] * defencepoketype3[7]
                + "<br>" + typeattack[8] + "  = x " + defencepoketype1[8] * defencepoketype2[8] * defencepoketype3[8]
                + "<br>" + typeattack[9] + "  = x " + defencepoketype1[9] * defencepoketype2[9] * defencepoketype3[9]
                + "<br>" + typeattack[10] + "  = x " + defencepoketype1[10] * defencepoketype2[10] * defencepoketype3[10]
                + "<br>" + typeattack[11] + "  = x " + defencepoketype1[11] * defencepoketype2[11] * defencepoketype3[11]
                + "<br>" + typeattack[12] + "  = x " + defencepoketype1[12] * defencepoketype2[12] * defencepoketype3[12]
                + "<br>" + typeattack[13] + "  = x " + defencepoketype1[13] * defencepoketype2[13] * defencepoketype3[13]
                + "<br>" + typeattack[14] + "  = x " + defencepoketype1[14] * defencepoketype2[14] * defencepoketype3[14]
                + "<br>" + typeattack[15] + "  = x " + defencepoketype1[15] * defencepoketype2[15] * defencepoketype3[15]
                + "<br>" + typeattack[16] + "  = x " + defencepoketype1[16] * defencepoketype2[16] * defencepoketype3[16]
                + "<br>" + typeattack[17] + "  = x " + defencepoketype1[17] * defencepoketype2[17] * defencepoketype3[17]

        }
    }

}


// resultados en forma tabla
