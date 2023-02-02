let table = document.querySelector(".teamsTable")
let tableBody = document.querySelector(".tableBody")
let tableHead = document.querySelector(".tableHead")

fetch("./data.json")
    .then(Res => Res.json())
    .then(data => {
        // Store team names
        const teams = Object.keys(data)

        // Create table header
        let headerRow = document.createElement("tr")
        let headerData = document.createElement("th")
        let headerText = document.createTextNode("Tm")
        headerData.appendChild(headerText)
        headerRow.appendChild(headerData)

        for (let team1 of teams) {

            headerText = document.createTextNode(team1)
            let headerData2 = document.createElement("th")
            headerData2.appendChild(headerText)
            headerRow.appendChild(headerData2)

            let tableRow = document.createElement("tr")
            let tableData = document.createElement("td")
            let text  = document.createTextNode(team1)
            tableData.appendChild(text)
            tableRow.appendChild(tableData)

            for (let team2 of teams) {
                let tableData2 = document.createElement("td")
                if (team2 === team1) {
                    text = document.createTextNode("--")
                } else {
                    text = document.createTextNode(data[team1][team2]["W"])      
                }
                tableData2.appendChild(text)
                tableRow.appendChild(tableData2)
            }

            tableBody.appendChild(tableRow)
        }
        tableHead.appendChild(headerRow)
        tableBody.appendChild(headerRow.cloneNode(true))

 
    })
    .catch(err => {
        console.log(err)
        alert("Data not found")
    })


