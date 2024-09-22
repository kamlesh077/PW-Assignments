const http = require('http');

// Dummy Data for Men & Women Products
const menProducts = [
    { id: 1, name: 'Men T-Shirt', price: 499 },
    { id: 2, name: 'Men Jeans', price: 999 },
    { id: 3, name: 'Men Jacket', price: 1999 },
    { id: 4, name: 'Men Shoes', price: 1499 },
    { id: 5, name: 'Men Watch', price: 2499 },
    { id: 6, name: 'Men Hat', price: 299 },
    { id: 7, name: 'Men Sunglasses', price: 799 },
    { id: 8, name: 'Men Shorts', price: 699 },
    { id: 9, name: 'Men Belt', price: 499 },
    { id: 10, name: 'Men Wallet', price: 1299 }
];

const womenProducts = [
    { id: 1, name: 'Women Dress', price: 999 },
    { id: 2, name: 'Women Handbag', price: 1999 },
    { id: 3, name: 'Women Heels', price: 1499 },
    { id: 4, name: 'Women Necklace', price: 799 },
    { id: 5, name: 'Women Perfume', price: 1299 },
    { id: 6, name: 'Women Sunglasses', price: 899 },
    { id: 7, name: 'Women Scarf', price: 399 },
    { id: 8, name: 'Women Skirt', price: 799 },
    { id: 9, name: 'Women Hat', price: 499 },
    { id: 10, name: 'Women Watch', price: 1999 }
];

// Create Server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); // Set response type to JSON

    if (req.url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
    } else if (req.url === '/men') {
        res.writeHead(200);
        res.end(JSON.stringify(menProducts)); // Send Men Products
    } else if (req.url === '/women') {
        res.writeHead(200);
        res.end(JSON.stringify(womenProducts)); // Send Women Products
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Page not found' })); // Handle any other URL
    }
});

// Start Server
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
