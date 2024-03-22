let objActivoConway;

class Conway {

    constructor(alto, ancho) {
        objActivoConway = this;
        this.alto = alto;
        this.ancho = ancho;
        this.celula = [];
        this.creaCelulas();
    }

    creaCelulas() {
        let i, j;
        for (i = 0; i < this.alto; i++) {
            this.celula[i] = [];
            for (j = 0; j < this.ancho; j++) {
                this.celula[i][j] = false;
            }
        }
    }

    activa(i, j) {
        if (this.posicionOK(i, j)) {
            this.celula[i][j] = true;
        }
    }

    noActiva(i, j) { //es el nuevo estado de la celula
        if (this.posicionOK(i, j)) {
            this.celula[i][j] = false;// solo cambia el true de activa a false
        }
    }

    estaViva(i, j) {
        if (this.posicionOK(i, j))
            return this.celula[i][j];
        else
            return false;
    }

    posicionOK(i, j) {
        return (i >= 0 && i < this.alto && j >= 0 && j < this.ancho);
    }

    inyectaAmbiente(idDiv) {
        this.init();
        let tabla, fila, celd, i, j;
        tabla = document.createElement("TABLE");
        tabla.setAttribute("class", "ambiente");
        for (i = 0; i < this.alto; i++) {
            fila = document.createElement("TR");
            for (j = 0; j < this.ancho; j++) {
                celd = document.createElement("TD");
                celd.setAttribute("id", `celula(${i},${j})`);
                if (this.estaViva(i, j)) {
                    celd.setAttribute("class", "celula viva");
                } else {
                    celd.setAttribute("class", "celula muerta");
                }
                objActivoConway = this;
                let st = "objActivoConway.cambiaEstado(" + i + "," + j + ")";
                celd.setAttribute("onclick", st);
                fila.appendChild(celd);
            }
            tabla.appendChild(fila)
        }
        document.getElementById(idDiv).appendChild(tabla);
    }


    cambiaEstado(fila, columna) {
        let celd = document.getElementById(`celula(${fila},${columna})`); //llama al elemento celula
        if (this.estaViva(fila, columna)) { //revisa si esta viva
            this.noActiva(fila, columna);  //si no esta viva
            celd.setAttribute("class", "celula viva"); // revive a la celula
        } else {
            this.activa(fila, columna); // si esta viva
            celd.setAttribute("class", "celula muerta"); // mata a la celula
        }
    }

    proximoturno() {
        let celu = [];
        for (let i = 0; i < this.alto; i++) {
            celu[i] = [];
            for (let j = 0; j < this.ancho; j++) {
                let v = this.vecinasVivas(i, j);
                if (this.estaMuerta(i, j) && v === 3)
                    celu[i][j] = true;
                else celu[i][j] = !!(this.estaViva(i, j) && (v === 2 || v === 3));
            }
        }
        this.celula = celu;
    }

    estaMuerta(i, j) {
        return !this.estaViva(i, j);
    }

    agregaPatron(fila, columna, nombrePatron) {
        let y = fila;
        let x = columna;
        if (nombrePatron === "pentaDecatlon") {
            console.log("llega");
            for (let i = x; i < (x + 8); i++) {
                for (let j = y; j < (y + 3); j++) {
                    console.log("activando " + i + "  ,  " + j);
                    this.activa(i, j);
                }
                this.celula[x + 1][y + 1] = false;
                this.celula[x + 6][y + 1] = false;
            }
        }
        if (nombrePatron === "sapo") {
            console.log("llega");
            for (let i = x; i < (x + 2); i++) {
                for (let j = y; j < (y + 4); j++) {
                    console.log("activando " + i + "  ,  " + j);
                    this.activa(i, j);
                }
                this.celula[x + 0][y + 3] = false;
                this.celula[x + 1][y + 0] = false;
            }
        }
        if (nombrePatron === "planeador") {
            console.log("llega");
            for (let i = x; i < (x + 3); i++) {
                for (let j = y; j < (y + 3); j++) {
                    console.log("activando " + i + "  ,  " + j);
                    this.activa(i, j);
                }
                this.celula[x + 1][y + 1] = false;
                this.celula[x + 1][y + 2] = false;
                this.celula[x + 2][y + 0] = false;
                this.celula[x + 2][y + 2] = false;
            }
        }
        if (nombrePatron === "octogono") {
            console.log("llega");
            for (let i = x; i < (x + 6); i++) {
                for (let j = y; j < (y + 6); j++) {
                    console.log("activando " + i + "  ,  " + j);
                    this.activa(i, j);
                }
                this.celula[x + 0][y + 0] = false;
                this.celula[x + 0][y + 5] = false;
                this.celula[x + 1][y + 1] = false;
                this.celula[x + 1][y + 4] = false;
                this.celula[x + 2][y + 2] = false;
                this.celula[x + 2][y + 3] = false;
                this.celula[x + 3][y + 2] = false;
                this.celula[x + 3][y + 3] = false;
                this.celula[x + 4][y + 1] = false;
                this.celula[x + 4][y + 4] = false;
                this.celula[x + 5][y + 0] = false;
                this.celula[x + 5][y + 5] = false;
            }
        }


    }


    vecinasVivas(i, j) {
        let total = 0;
        if (this.estaViva(i - 1, j - 1)) total++;
        if (this.estaViva(i, j - 1)) total++;
        if (this.estaViva(i + 1, j - 1)) total++;
        if (this.estaViva(i - 1, j)) total++;
        if (this.estaViva(i + 1, j)) total++;
        if (this.estaViva(i - 1, j + 1)) total++;
        if (this.estaViva(i, j + 1)) total++;
        if (this.estaViva(i + 1, j + 1)) total++;
        return total;
    }

    init() {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "./conway.css");

        document.head.appendChild(link);

    }
}