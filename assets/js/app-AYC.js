// Pisos

function piso1(){
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");

    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso1.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}
function piso2(){
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    
    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso2.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}
function piso3(){
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    
    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso3.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}
function piso4(){
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    
    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso4.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}

// Limpiar canvas

function limpiar1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiar2() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiar3() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiar4() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiarTodo() {
    limpiar1();
    limpiar2();
    limpiar3();
    limpiar4();
}
    
// Muestra mensaje, pisos y caminos

    let text2;

function mensaje() {

    let p1;
    p1 = "ADMINISTRACION Y CONTABILIDAD";

    let sel2 = document.getElementById("hacia");
    text2= sel2.options[sel2.selectedIndex].text;
 
    document.getElementById('titulo').innerHTML = "<font size='1'>Recuerde que el punto <font color='red'><em><b>ROJO</b></em></font> es el origen y el punto <font color='blue'><em><b>AZUL</b></em></font> es el destino.</font> <br> A continuación se muestra el camino desde <font color='red'><em><b>" + p1 + "</b></em></font> hacia <font color='blue'><em><b>" + text2 + "</b></em></font>:"

}
function pisos(){
limpiarTodo();
    switch (text2) {
        case "INGRESO PRINCIPAL":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "SALA DE OPERACIONES MENORES":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "SALA DE RECUPERACIONES":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "HABITACIÓN 1":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "HABITACIÓN 2":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "ESTAR ESPERA (1°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "BAÑOS (1°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "DESINTROMETRÍA OSEA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "SALA DE RAYOS X":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "ELECTROTERAPIA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "RESONANCIA MAGNETÍCA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "MECANOTERAPIA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "HIDROTERAPIA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "ESTAR ESPERA (2°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "REABILITACIÓN TECNOLÓGICA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "EVALUACIÓN FISIOLÓGICA Y BIOQUÍMICA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO NUTRICIONISTA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO ORTOPEDISTA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO PSICOLOGÍA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO CARDIOLOGÍA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "ESTAR ESPERA (3°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR PIERNAS":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCICIO AEROBICO Y CALENTAMIENTO":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR BRAZOS":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
        case "BAÑOS (4°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
    }       
}
function caminos(){
    switch (text2) {
        case "INGRESO PRINCIPAL":
            AYC();
            IP();
            AYC_IP();
        break;
        case "SALA DE OPERACIONES MENORES":
            AYC();
            SOM();
            AYC_SOM();
        break;
        case "SALA DE RECUPERACIONES":
            AYC();
            SR();
            AYC_SR();
        break;
        case "HABITACIÓN 1":
            AYC();
            H1();
            AYC_H1();
        break;
        case "HABITACIÓN 2":
            AYC();
            H2();
            AYC_H2();
        break;
        case "ESTAR ESPERA (1°P)":
            AYC();
            EE1();
            AYC_EE1();
        break;
        case "BAÑOS (1°P)":
            AYC();
            B1();
            AYC_B1();
        break;
        case "DESINTROMETRÍA OSEA":
            AYC();
            DO();
            AYC_DO();
        break;
        case "SALA DE RAYOS X":
            AYC();
            RX();
            AYC_RX();
        break;
        case "ELECTROTERAPIA":
            AYC();
            ET();
            AYC_ET();
        break;
        case "RESONANCIA MAGNETÍCA":
            AYC();
            RM();
            AYC_RM();
        break;
        case "MECANOTERAPIA":
            AYC();
            MT();
            AYC_MT();
        break;
        case "HIDROTERAPIA":
            AYC();
            HT();
            AYC_HT();
        break;
        case "ESTAR ESPERA (2°P)":
            AYC();
            EE2();
            AYC_EE2();
        break;
        case "REABILITACIÓN TECNOLÓGICA":
            AYC();
            RT();
            AYC_RT();
        break;
        case "EVALUACIÓN FISIOLÓGICA Y BIOQUÍMICA":
            AYC();
            EFB();
            AYC_EFB();
        break;
        case "CONSULTORIO NUTRICIONISTA":
            AYC();
            CN();
            AYC_CN();
        break;
        case "CONSULTORIO ORTOPEDISTA":
            AYC();
            CO();
            AYC_CO();
        break;
        case "CONSULTORIO PSICOLOGÍA":
            AYC();
            CP();
            AYC_CP();
        break;
        case "CONSULTORIO CARDIOLOGÍA":
            AYC();
            CC();
            AYC_CC();
        break;
        case "ESTAR ESPERA (3°P)":
            AYC();
            EE3();
            AYC_EE3();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR PIERNAS":
            AYC();
            ZP();
            AYC_ZP();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCICIO AEROBICO Y CALENTAMIENTO":
            AYC();
            ZAC();
            AYC_ZAC();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR BRAZOS":
            AYC();
            ZB();
            AYC_ZB();
        break;
        case "BAÑOS (4°P)":
            AYC();
            B4();
            AYC_B4();
        break;
    }       
}

// Destino primer piso

function AYC() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 116, y = 118;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function IP() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 38, y = 195;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function SOM() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 305, y = 115;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function SR() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 205;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function H1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 287, y = 275;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function H2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 322, y = 275;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EE1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 90, y = 275;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 152, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

function AYC_IP() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    
    const lineas = [
        { x1: 116, y1: 138, x2: 116, y2: 212 },
        { x1: 121, y1: 206, x2: 47, y2: 206 }
    ];
    
    let indiceLineaActual = 0;
    let longitudDibujo = 0;

    function animar_linea() {
        contexto.beginPath();
        contexto.strokeStyle = "green";
        contexto.lineWidth = 10;

        contexto.moveTo(lineas[indiceLineaActual].x1, lineas[indiceLineaActual].y1);
        contexto.lineTo(
            lineas[indiceLineaActual].x1 + (lineas[indiceLineaActual].x2 - lineas[indiceLineaActual].x1) * longitudDibujo,
            lineas[indiceLineaActual].y1 + (lineas[indiceLineaActual].y2 - lineas[indiceLineaActual].y1) * longitudDibujo
        );

        contexto.stroke();
        contexto.closePath();

        longitudDibujo += 0.01; // Ajusta este valor para controlar la velocidad de dibujo

        if (longitudDibujo >= 1) {
            longitudDibujo = 0;
            indiceLineaActual++;

            if (indiceLineaActual >= lineas.length) {
                cancelAnimationFrame(fx_animar_linea);
                return;
            }
        }

        fx_animar_linea = requestAnimationFrame(animar_linea);
    }

    let fx_animar_linea = requestAnimationFrame(animar_linea);
}

function AYC_SOM() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    
    const lineas = [
        { x1: 116, y1: 138, x2: 116, y2: 165 },
        { x1: 116, y1: 160, x2: 270, y2: 160 },
        { x1: 265, y1: 165, x2: 265, y2: 120 },
        { x1: 265, y1: 125, x2: 295, y2: 125 }
    ];
    
    let indiceLineaActual = 0;
    let longitudDibujo = 0;

    function animar_linea() {
        contexto.beginPath();
        contexto.strokeStyle = "green";
        contexto.lineWidth = 10;

        contexto.moveTo(lineas[indiceLineaActual].x1, lineas[indiceLineaActual].y1);
        contexto.lineTo(
            lineas[indiceLineaActual].x1 + (lineas[indiceLineaActual].x2 - lineas[indiceLineaActual].x1) * longitudDibujo,
            lineas[indiceLineaActual].y1 + (lineas[indiceLineaActual].y2 - lineas[indiceLineaActual].y1) * longitudDibujo
        );

        contexto.stroke();
        contexto.closePath();

        longitudDibujo += 0.01; // Ajusta este valor para controlar la velocidad de dibujo

        if (longitudDibujo >= 1) {
            longitudDibujo = 0;
            indiceLineaActual++;

            if (indiceLineaActual >= lineas.length) {
                cancelAnimationFrame(fx_animar_linea);
                return;
            }
        }

        fx_animar_linea = requestAnimationFrame(animar_linea);
    }

    let fx_animar_linea = requestAnimationFrame(animar_linea);
}

function AYC_SR() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    
    const lineas = [
        { x1: 116, y1: 138, x2: 116, y2: 165 },
        { x1: 116, y1: 160, x2: 280, y2: 160 },
        { x1: 275, y1: 155, x2: 275, y2: 220 },
        { x1: 270, y1: 215, x2: 300, y2: 215 }
    ];
    
    let indiceLineaActual = 0;
    let longitudDibujo = 0;

    function animar_linea() {
        contexto.beginPath();
        contexto.strokeStyle = "green";
        contexto.lineWidth = 10;

        contexto.moveTo(lineas[indiceLineaActual].x1, lineas[indiceLineaActual].y1);
        contexto.lineTo(
            lineas[indiceLineaActual].x1 + (lineas[indiceLineaActual].x2 - lineas[indiceLineaActual].x1) * longitudDibujo,
            lineas[indiceLineaActual].y1 + (lineas[indiceLineaActual].y2 - lineas[indiceLineaActual].y1) * longitudDibujo
        );

        contexto.stroke();
        contexto.closePath();

        longitudDibujo += 0.01; // Ajusta este valor para controlar la velocidad de dibujo

        if (longitudDibujo >= 1) {
            longitudDibujo = 0;
            indiceLineaActual++;

            if (indiceLineaActual >= lineas.length) {
                cancelAnimationFrame(fx_animar_linea);
                return;
            }
        }

        fx_animar_linea = requestAnimationFrame(animar_linea);
    }

    let fx_animar_linea = requestAnimationFrame(animar_linea);
}

function AYC_H1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    
    const lineas = [
        { x1: 116, y1: 138, x2: 116, y2: 165 },
        { x1: 116, y1: 160, x2: 280, y2: 160 },
        { x1: 275, y1: 155, x2: 275, y2: 255 },
        { x1: 275, y1: 250, x2: 292, y2: 250 },
        { x1: 287, y1: 250, x2: 287, y2: 275 }
    ];
    
    let indiceLineaActual = 0;
    let longitudDibujo = 0;

    function animar_linea() {
        contexto.beginPath();
        contexto.strokeStyle = "green";
        contexto.lineWidth = 10;

        contexto.moveTo(lineas[indiceLineaActual].x1, lineas[indiceLineaActual].y1);
        contexto.lineTo(
            lineas[indiceLineaActual].x1 + (lineas[indiceLineaActual].x2 - lineas[indiceLineaActual].x1) * longitudDibujo,
            lineas[indiceLineaActual].y1 + (lineas[indiceLineaActual].y2 - lineas[indiceLineaActual].y1) * longitudDibujo
        );

        contexto.stroke();
        contexto.closePath();

        longitudDibujo += 0.01; // Ajusta este valor para controlar la velocidad de dibujo

        if (longitudDibujo >= 1) {
            longitudDibujo = 0;
            indiceLineaActual++;

            if (indiceLineaActual >= lineas.length) {
                cancelAnimationFrame(fx_animar_linea);
                return;
            }
        }

        fx_animar_linea = requestAnimationFrame(animar_linea);
    }

    let fx_animar_linea = requestAnimationFrame(animar_linea);
}
function AYC_H2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(116,138);
        contexto.lineTo(116,160);
        contexto.lineTo(275,160);
        contexto.lineTo(275,250);
        
        contexto.moveTo(116,160);
        contexto.lineTo(116,250);
        contexto.lineTo(322,250);
        contexto.lineTo(322,275);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function AYC_EE1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(116,138);
        contexto.lineTo(116,206);
        contexto.lineTo(90,206);
        contexto.lineTo(90,275);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function AYC_B1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(116,138);
        contexto.lineTo(116,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Destino segundo piso

function DO() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 165, y = 115;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function RX() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 118, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function ET() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function RM() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 180;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function MT() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 240;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function HT() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 203;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EE2() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 100, y = 170;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Camino segundo piso

function AYC_DO() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(240,250);
        contexto2.lineTo(220,250);
        contexto2.lineTo(220,125);
        contexto2.lineTo(175,125);

        contexto2.moveTo(235,250);
        contexto2.lineTo(235,300);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_RX() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(118,250);
        contexto2.lineTo(118,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(118,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_ET() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_RM() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,200);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_MT() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(300,250);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_HT() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,213);
        contexto2.lineTo(300,213);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_EE2() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(90,180);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(100,250);
        contexto2.lineTo(100,190);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// Destino tercer piso


function RT() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 165, y = 115;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EFB() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 168, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CN() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CP() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 180;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CO() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 240;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CC() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 203;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EE3() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 100, y = 170;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Camino tercer piso

function AYC_RT() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(240,250);
        contexto2.lineTo(220,250);
        contexto2.lineTo(220,125);
        contexto2.lineTo(175,125);

        contexto2.moveTo(235,250);
        contexto2.lineTo(235,300);
        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_EFB() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(168,250);
        contexto2.lineTo(168,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(168,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_CN() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_CP() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,200);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_CO() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(300,250);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_CC() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,213);
        contexto2.lineTo(300,213);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_EE3() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(90,180);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(100,250);
        contexto2.lineTo(100,190);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// Destino cuarto piso

function ZP() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 90, y = 200;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function ZAC() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 150, y = 100;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function ZB() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 300, y = 210;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B4() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 335, y = 118;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
// Camino cuarto piso

function AYC_ZP() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(90,180);
        contexto2.lineTo(90,200);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(90,250);
        contexto2.lineTo(90,220);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_ZAC() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,160);
        contexto2.lineTo(90,160);
        contexto2.lineTo(90,110);
        contexto2.lineTo(140,110);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,110);
        contexto2.lineTo(160,110);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_ZB() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,160);
        contexto2.lineTo(90,160);
        contexto2.lineTo(90,110);
        contexto2.lineTo(235,110);
        contexto2.lineTo(235,220);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(235,220);
        contexto2.lineTo(290,220);

        contexto2.moveTo(90,110);
        contexto2.lineTo(90,250);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function AYC_B4() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(116,160);
        contexto1.lineTo(60,160);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(116,138);
        contexto1.lineTo(116,206);
        contexto1.lineTo(116,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,160);
        contexto2.lineTo(90,160);
        contexto2.lineTo(90,110);
        contexto2.lineTo(275,110);
        contexto2.lineTo(275,160);
        contexto2.lineTo(335,160);
        contexto2.lineTo(335,138);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(235,220);
        contexto2.lineTo(335,220);
        contexto2.lineTo(335,138);

        contexto2.moveTo(90,110);
        contexto2.lineTo(90,250);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}