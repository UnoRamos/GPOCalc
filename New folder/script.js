function calculateFee() {
    const program = document.getElementById('program').value;
    const units = document.getElementById('units').value;
    const studentType = document.querySelector('input[name="studentType"]:checked').value;

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

    document.getElementById('tuitionFee').innerText = tuitionFee.toFixed(2);
}
