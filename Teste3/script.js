async function getDataJson() {
    const response = await fetch('./data.json');
    return await response.json();
}

getDataJson().then((response) => {
    const data = response;

    const payloadDayWithoutBilling = data.filter(element => element.valor > 0);

    const totalValueBilling = payloadDayWithoutBilling.reduce((accumulator, currentValue) => accumulator + currentValue.valor, 0)

    const average = totalValueBilling / payloadDayWithoutBilling.length;
    const maxValue = findMoreBilling(payloadDayWithoutBilling);
    const minValue = findLessBilling(payloadDayWithoutBilling);

    alert('VALOR MÉDIO É DE: ' + average);
    alert('MAIOR VALOR É DE: ' + maxValue);
    alert('MENOR VALOR É DE: ' + minValue);
});

function findLessBilling(data) {

    var minVal = 0;

    data.forEach((element, index) => {

        const isFirstElement = index === 0;

        if (isFirstElement) {
            minVal =  element.valor;
        }

        if (!isFirstElement) {
            const currentValuesIsLess = element.valor < minVal;

            if(currentValuesIsLess){
                minVal = element.valor;
            }
        }       
    });

    return minVal;
}

function findMoreBilling(data) {

    var maxVal = 0;

    data.forEach((element, index) => {
        const isFirstElement = index === 0;

        if (isFirstElement) {
            maxVal =  element.valor;
        }

        if (!isFirstElement) {
            const currentValuesIsLess = element.valor > maxVal;

            if(currentValuesIsLess){
                maxVal = element.valor;
            }
        }       
    });

    return maxVal;
}


