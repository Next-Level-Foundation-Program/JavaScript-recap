let movies = [
    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
    { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
    { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
    { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
    { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime" }
]

// 1. শুধু Sci-Fi movies, rating অনুযায়ী descending order এ সাজানো। তারপর শুধু title গুলা বের করো।

let sciFiMovies = movies?.filter((movie) => movie.genre === "Sci-Fi")?.sort((a, b) => b.rating - a.rating)?.map((movie) => `title: ${movie.title}, rating: ${movie.rating}`)?.forEach((movie) => console.log(`have to watch ${movie}`));

// console.log(sciFiMovies)

// ২। শুধু In-Stock products গুলা price অনুযায়ী ascending order এ সাজানো। তারপর শুধু name গুলা বের করো। Total price বের করো। (price * quantity)
let products = [
    {id: 1, name: "Laptop", price: 51000, category: "Electronics", quantity: 5, inStock: true},
    {id: 2, name: "Phone", price: 5500, category: "Electronics", quantity: 10, inStock: true},
    {id: 3, name: "Tablet", price: 3300, category: "Electronics", quantity: 0, inStock: false},
    {id: 4, name: "Monitor", price: 15000, category: "computer", quantity: 20, inStock: true},
    {id: 5, name: "Keyboard", price: 550, category: "computer", quantity: 15, inStock: true}
];

let inStockProducts = products?.filter((product) => product.inStock === true)?.sort((a, b) => a.price - b.price)?.map((product) => `name: ${product.name}, price: ${product.price}`)?.forEach((product) => console.log(`available product ${product}`));

// console.log(inStockProducts)

let totalPrice = products?.filter((product) => product.inStock === true)?.reduce((acc, current) => {
    return acc + (current.price * current.quantity)
}, 0);

console.log(totalPrice);