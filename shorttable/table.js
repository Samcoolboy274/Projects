const table = document.createElement("table")
const th = document.createElement("th")
const tr = document.createElement("tr")
const td = document.createElement("td")
const td2 = document.createElement("td")
const td3 = document.createElement("td")
const tbody = document.createElement("tbody")
const naam = document.getElementById("naam")
const age = document.getElementById("age")
const job = document.getElementById("job")

document.body.appendChild(table)
table.appendChild(th)
table.appendChild(tbody)
th.appendChild(tr)
tr.appendChild(td)
tr.appendChild(td2)
tr.appendChild(td3)

td.innerHTML = "name"
td2.innerHTML = "age"
td3.innerHTML = "job"




