const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { program, units, studentType } = req.body;
    
    const pricePerUnit = parseFloat(program);
    const numberOfUnits = parseInt(units);
    
    const miscFees = {
        new: {
            registration: 40,
            deposit: 100,
            entrance: 30,
            athletic: 55,
            cultural: 50,
            medical: 50,
            development: 46,
            id: 84,
            library: 1200,
            total: 1655
        },
        old: {
            registration: 40,
            athletic: 55,
            cultural: 50,
            medical: 50,
            development: 46,
            id: 30,
            library: 1200,
            total: 1449
        }
    };

    let miscFee = 0;
    if (studentType === 'new') {
        miscFee = miscFees.new.total;
    } else {
        miscFee = miscFees.old.total;
    }

    const tuitionFee = (pricePerUnit * numberOfUnits) + miscFee;

    res.json({ tuitionFee });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});