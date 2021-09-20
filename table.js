const titles = {
    id: "id",
    FirstName: "FirstName",
    LastName: "LastName",
    ProfilUrl: "ProfilUrl",
    gender: "gender",
    hobby: "hobby"

 }
 
 const persons = [titles]

 const properties = [
'id',
'FirstName',
'LastName',
'ProfilUrl',
'gender',
'hobby'
]


  function add() {
event.preventDefault()
const person = {}
const form = document.querySelector('form')
for (let prop of properties){

person[prop] = form.elements[prop].value
} 
persons.push(person)
console.log(persons)
renderTable(persons)
}

function createTd(text) {
const td = document.createElement('td')
td.innerHTML = text
return td
}

function createTr(obj) {
const tr = document.createElement('tr')

for(let prop in obj){
 const td = createTd(obj[prop])
 tr.appendChild(td)
}
return tr
}

function createTable(listOfObjects) {
const table = document.createElement('table')
for (let obj of listOfObjects){
const tr = createTr(obj)
table.appendChild(tr)
}
return table
}

function renderTable(){
const table = createTable(persons)
const container = document.querySelector('div.list')
container.innerHTML = ''
container.appendChild(table)
}
renderTable()

