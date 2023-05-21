const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let foodItems = [];

// Create a new food item
app.post('/api/fooditems/create', (req, res) => {
    const foodItemData = req.body;
    const foodItem = {
        id: foodItems.length + 1,
        ...foodItemData,
    };
    foodItems.push(foodItem);
    res.status(201).json(foodItem);
});

// Fetch all food items
app.get('/api/fooditems/create', (_req, res) => {
    res.json(foodItems);
});

const port = 3001; // Update with your desired port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
