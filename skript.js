var array = [
    {
        id:"1",
        name:"Apple",
        land:"USA",
        co2:"343546",
    },
    {
        id:"2",
        name:"Microsoft",
        land:"USA",
        co2:"34568",

    },
    {
        id:"3",
        name:"Audi",
        land:"Deutschland",
        co2:"4545678",
    },
    {
        id:"4",
        name:"BMW",
        land:"Deutschland",
        co2:"6445678",
    },
    {
        id:"5",
        name:"Zoo-Paris",
        land:"Frankreich",
        co2:"4556786",
    },
    {
        id:"6",
        name:"Nokia",
        land:"Finnland",
        co2:"92749",
    },
    {
        id:"7",
        name:"IU-Fernhochschule",
        land:"Deutschland",
        co2:"337",
    },
    {
        id:"8",
        name:"Lind-Schokolade",
        land:"Schweiz",
        co2:"8763",
    }
];

// Zeigt die Tabellendaten an
function showTable(curArray) {
    var tableContent = `
        <tr class="bg-primary test-white fw-bold">
            <td>ID</td>
            <td>Name</td>
            <td>Land</td>
            <td>CO2</td>
        </tr>
    `;
    var tableElement = document.getElementById("mytable");
    var errorElement = document.getElementById("error");

    if (curArray.length === 0) {
        errorElement.innerHTML = `<span class="text-danger">Not Found!!</span>`;
    } else {
        errorElement.innerHTML = "";

        for (var i = 0; i < curArray.length; i++) {
            tableContent += `
                <tr>
                    <td>${sanitizeInput(curArray[i].id)}</td>
                    <td>${sanitizeInput(curArray[i].name)}</td>
                    <td>${sanitizeInput(curArray[i].land)}</td>
                    <td>${sanitizeInput(curArray[i].co2)}</td>
                </tr>
            `;
        }
    }

    tableElement.innerHTML = tableContent;
}

// Aufruf der Funktion zur Anzeige der Tabelle mit den Ursprungsdaten
showTable(array);

// Gefilterte Datensätze in einem neuen Array
var newArray = [];

document.getElementById("search").addEventListener("keyup", function() {
    var search = sanitizeInput(this.value.toLowerCase());
    newArray = array.filter(function(val) {
        return val.land.toLowerCase().includes(search) || val.name.toLowerCase().includes(search);
    });

    showTable(newArray);
});

// Funktion zur Säuberung der Benutzereingaben von potenziell schädlichem Code
function sanitizeInput(input) {
    var tempElement = document.createElement("div");
    tempElement.textContent = input;
    return tempElement.innerHTML;
}
