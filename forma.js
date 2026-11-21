class FormaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;

    }

    toString(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheiro de ${this.saborRecheio}`)

    }
}

let boloFesta = new FormaDeBolo("chocolate", "nutella")
let boloPremoium = new  FormaDeBolo("baunilha", "coco")


boloFesta.toString()
boloPremoium.toString()