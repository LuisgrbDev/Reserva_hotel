class Quarto {
    constructor(numero, tipo, precoDiaria, reservado) {
        this.numero = numero;
        this.tipo = tipo;
        this.precoDiaria = precoDiaria;
        this.reservado = reservado;
        reservado = false;

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
        // this.custoTotal = this.calcularCustoTotal();
    }

    calcularCustoTotal() {
        const diferencaEmMilissegundos = this.dataFim - this.dataInicio;
        const diasReservados = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        let total = this.quarto.precoDiaria * diasReservados;
        return `Reserva do quarto ${this.quarto.numero} realizada com sucesso!  Total Diaria: ${total}`
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
        if(quarto.estaDisponivel()){
            quarto.reservado = true
            let reserva = new Reserva(quarto, hospede,dataInicio,dataFim);
            this.reservas.push(reserva);
            return reserva
        }
         return `Quarto ${quarto.numero} Não esta Disponivel `
    //   if(!quarto.estaDisponivel()) {
    //     console.log("indisponivel")
    //   }
    //    console.log("Reserva feita com sucesso!")
    //   quarto.reservado = true

    }

    exibirQuartosDisponiveis(quarto, hospede, dataInicio, dataFim) {
        /*this.quartos.forEach(quarto => {if(!quarto.reservado) percorre cada 
            itens da lista e verifica se estão reservados */
        this.quartos.forEach(quarto => {
            if(!quarto.reservado){
                console.log(`Quarto Disponiveis:`)
                console.log(`Numero: ${quarto.numero}, Tipo: ${quarto.tipo}, Preço Diária: ${quarto.precoDiaria}`)
            }
        })
     
    }
}


//criando hotel e quartos
let meuHotel = new Hotel();
let novoQuarto = new Quarto(100, 'Standard', 150);
let novoQuarto1 = new Quarto(102, 'Suite', 200);
let novoQuarto2 = new Quarto(103, 'presidencial', 300);

// add quartos a lista de arrays
meuHotel.adicionarQuarto(novoQuarto);
meuHotel.adicionarQuarto(novoQuarto1);
meuHotel.adicionarQuarto(novoQuarto2);

//criando Hospede
let novoCli = new Hospede("fulnao", "fulano@mail.com");
let outroCLi = new Hospede("fulnao", "fulano@mail.com");

// exibindo quartos disponiveis antes da reserva

meuHotel.exibirQuartosDisponiveis()

// reservando quarto hotel
const reserva1 = meuHotel.reservaQuarto(meuHotel.quartos[2], novoCli, new Date("2024-01-01"),new Date( "2024-01-05"));
// exibindo reserva feita 
console.log(`\n \n ${reserva1.calcularCustoTotal()}`);
// exibindo quartos disponiveis depois da reserva
meuHotel.exibirQuartosDisponiveis()

// reservando do mesmo quarto hotel
const reserva2 = meuHotel.reservaQuarto(meuHotel.quartos[2], novoCli, new Date("2024-01-01"),new Date( "2024-01-05"));
// exibindo reserva sem sucesso
console.log(`\n \n ${reserva2}`);


meuHotel.exibirQuartosDisponiveis();








