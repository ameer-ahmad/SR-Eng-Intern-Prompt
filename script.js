let table = document.querySelector(".teamsTable")
let tableBody = document.querySelector(".tableBody")

fetch("./data.json")
    .then(Res => Res.json())
    .then(data => {
        const teams = Object.keys(data)

        for (let team1 of teams) {
            console.log(data[team1])
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
 
    })
    .catch(err => {
        console.log(err)
        alert("Data not found")
    })


