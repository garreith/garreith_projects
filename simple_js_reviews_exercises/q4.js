const books = [
    {title:'Harry Potter and the Goblet of Fire', author:'J.K. Rowling', price:'Rp 100.000'},
    {title:'Harry Potter and the Chamber of Secrets', author:'J.K.Rowling', price:'Rp 145.000'},
    {title:'Harry Potter and the Prisoner of Azkaban', author:'J.K. Rowling', price:'Rp 155.000'}
]

console.log()

for (let x = 1; x < books.length + 1; x++){
    console.log('Book ' + x + ': ' + books[x - 1].title)
    console.log()
}