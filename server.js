//Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());



const budget = {
    myBudget: [
    {
        title: 'Personal Expenses',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Market place',
        budget: 90
    },
    {
        title: 'Groceries',
        budget: 120
    },
    {
        title: 'Gas',
        budget: 60
    },
    {
        title: 'Travel',
        budget: 55
    },
    {
        title: 'Other',
        budget: 210
    },
    
]
};


app.use('/budget', (req, res) => {
    res.sendFile("C:\\Users\\mmanne2\\personal-budget1\\personal-budget1\\server.json");
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});