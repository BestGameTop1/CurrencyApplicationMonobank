let url = "https://api.monobank.ua/bank/currency"


fetch(url).then(data => {
    return data.json()
}).then(data => {
    let dataSet = data
    console.log(dataSet)

    for (key = 0; key < dataSet.length; key++) {
        let row = document.createElement('tr')
        row.innerHTML = `<tr>${key}</tr>`
        document.querySelector('table').appendChild(row)

        for (i in dataSet[key]){
            let row = document.createElement('tr')
            row.innerHTML = `
                <td>${dataSet[key][i]}</td>
            `
            document.querySelector('table').appendChild(row)
        }
    }
})



