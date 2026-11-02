
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// Display your existing SwiftCart website
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../index.html")
  );
});

// Test the backend
app.get("/api/status", (req, res) => {
  res.json({
    message: "SwiftCart backend is running!"
  });
});

// Sample products
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999
  },
  {
    id: 3,
    name: "Backpack",
    price: 1799
  }
];

// Send products to the browser
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`SwiftCart running at http://localhost:${PORT}`);
});
