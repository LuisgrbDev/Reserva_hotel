class Quarto {
    constructor(numero, tipo, precoDiaria, reservado) {
        this.numero = numero;
        this.tipo = tipo;
        this.precoDiaria = precoDiaria;
        this.reservado = reservado = false;

    }

    estaDisponivel() {
      return !this.reservado
    }
}

class Hospede {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}



class Reserva {
    constructor(quarto, hospede, dataInicio, dataFim) {
        this.quarto = quarto;
        this.hospede = hospede;
        this.dataInicio =dataInicio;
        this.dataFim = dataFim;
    }

    calcularCustoTotal() {
        const diferencaEmMilissegundos =  this.dataInicio - this.dataFim;
        const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        let total = this.quarto.precoDiaria * diferencaEmDias
        console.log(total)
    }
}



class Hotel {

    constructor() {
        this.quartos = [];
        this.reservas = []
    }


    adicionarQuarto(quarto) {
       this.quartos.push(quarto)
    }

    reservaQuarto(quarto, hospede, dataInicio, dataFim) {
      if(!quarto.estaDisponivel()) {
        return alert("indisponivel")
      }
      alert("Reserva feita com sucesso!")
      quarto.reservado = true
    }

    exibirQuartosDisponiveis(quarto, hospede, dataInicio, dataFim) {
        if(quarto.estaDisponivel()) {
            console.log( this.quartos)  
        } 
    }
}

let meuHotel = new Hotel();
let novoQuarto = new Quarto(100, 'presidencial', 150, false);
let novoQuarto1 = new Quarto(101, 'presidencial', 150, false);



meuHotel.adicionarQuarto(novoQuarto);
meuHotel.adicionarQuarto(novoQuarto1);

let novoCli = new Hospede("fulnao", "fulano@mail.com");
let outroCLi = new Hospede("fulnao", "fulano@mail.com");

meuHotel.reservaQuarto(meuHotel.quartos[0], novoCli, "2024-01-01", "2024-01-05");
meuHotel.exibirQuartosDisponiveis(meuHotel.quartos[1],outroCLi,"2024-01-01", "2024-01-05")






