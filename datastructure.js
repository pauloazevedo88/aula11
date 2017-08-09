// console.log("HI");

// function Stack(){
//     this.data = [];
    
//     this.push = function(car){
//         this.data.push(car);
//     };

//     this.pop = function(){
//         var result = this.data[this.data.length-1]
//         this.data.pop(); //tira primeiro
//         return result;
//     }
// };

// function Car(brand, model){
//     this.brand = brand;
//     this.model = model;
// }

// var stack1 =  new Stack();

// stack1.push(2);
// stack1.push(3);
// stack1.push(4);
// stack1.push(5);

// //var b = this.data[this.data.length-1];

// var carro1 = new Car("honda", "civic");
// var carro2 = new Car("citroen", "c4");

// var ferroVelho = new Stack();

// ferroVelho.push(carro1);
// ferroVelho.push(carro1);

// ferroVelho.pop();
// ferroVelho.push(carro2);

// function Queue(){
//     this.data = [];
    
//     this.enqueue = function(element){
//         this.data.push(element);
//     }
//     this.dequeue = function(){
//         var result = this.data[0];
//         this.data.shift(); //tira ultimo
//         return result;
//     }

// };

// var queue = new Queue();

// queue.enqueue(carro1);


function Queue(){
    this.data = [];
    
    this.enqueue = function(element){
        this.data.push(element);
    }
    this.dequeue = function(){
        var result = this.data[0];
        this.data.shift(); //tira ultimo
        return result;
    }
};

var queue = new Queue();

function Book(image, title, descricao){
    this.image = image;
    this.title = title;
    this.descricao = descricao;
};

var book1 = new Book ("Historia-do-Novo-Nome.jpg","História do Novo Nome","A Amiga Genial Vol 2 Elena Ferrante (Autor) Lançado em julho de 2015 Edição em Português","1507-1-2.jpg");

queue.enqueue(book1);
queue.dequeue(book2);