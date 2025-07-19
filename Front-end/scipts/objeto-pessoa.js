// Classe pai: Pessoa
// Classe filha: Servidor
// Classe filha: Professor
// Classe filha: Aluno

class Pessoa {
    constructor(id, nome, cpf, genero) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.genero = genero
    }
    exibirDetalhes() {
        return `ID: ${this.id}, 
                Nome: ${this.nome}, 
                CPF: ${this.cpf}, 
                Gênero: ${this.genero}`

    }
}

class Servidor extends Pessoa {
    constructor(id, nome, cpf, genero, cargo) {
        super(id, nome, cpf, genero)
        this.cargo = cargo
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}, 
        Cargo: ${this.cargo}`
    }
}

class Professor extends Pessoa {
    constructor(id, nome, cpf, genero, disciplina) {
        super(id, nome, cpf, genero)
        this.disciplina = disciplina
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}, 
        Disciplina: ${this.disciplina}`
    }
}

class Aluno extends Pessoa {
    constructor(id, nome, cpf, genero, matricula) {
        super(id, nome, cpf, genero)
        this.matricula = matricula
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}, 
        Matricula: ${this.matricula}`
    }
}

function Poo() {
    var servidor1 = new Servidor(0, "Sebastião", 99999999999, "Masculino", "Diretor")
    var professor1 = new Professor(1, "Renato", 88888888888, "Masculino", "Programação web")
    var aluno1 = new Aluno(2, "Jorge", 77777777777, "Masculino", 154896)

    alert(servidor1.exibirDetalhes())
    alert(professor1.exibirDetalhes())
    alert(aluno1.exibirDetalhes())
}