class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        this.ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };
    }

    atacar() {
        const ataque = this.ataques[this.tipo.toLowerCase()] || "um ataque básico";
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const herois = [
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Arthur", 35, "guerreiro"),
    new Heroi("Lee", 28, "monge"),
    new Heroi("Hanzo", 25, "ninja")
];

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}