function Author(name, birthYear , nationality)
{
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title , Author , genre , price)
{
    this.title = title;
    this.Author = Author;
    this.genre = genre;
    this.price = price;
    

    this.getBookInfo = function()
    {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.Author.name}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: Rs${this.price}`);
        console.log("----------------------------------")
    }
}


let author1 = new Author("ARUNDHATI ROY" , 1970 , "Indian");
let author2 = new Author("BHASKAR CHATTOPADHYAY" , 1950, "Indian");
let author3 = new Author("RABINDRANATH TAGOR" , 1890 , "Indian");
let author4 = new Author("MANU JOSEPH" , 1950 , "Indian");

let book1 = new Book("PATANG" , author2 , "Thriller and Mysetry" , 700);
let book2 = new Book("THE GOD OF SMALL THINGS" , author1 , "Literacy Fiction" , 560);
let book3 = new Book("GRAIN OF SAND" , author3 , "Generic Fiction" , 650);
let book4 = new Book("GOR" , author3, "Literacy" , 450);
let book5 = new Book("SERIOUS MEN" , author4 , "Humour" , 900);


let bookstore =[book1 , book2 , book3 , book4 , book5];
console.log("Online Bookstore:");
console.log("-----------------------------------")
  bookstore.forEach((book) =>
   {
      book.getBookInfo();
  })

    
        
// console.log(book1 , book2 , book3 , book4 , book5)
// console.log(author1 , author2 , author3 , author4)