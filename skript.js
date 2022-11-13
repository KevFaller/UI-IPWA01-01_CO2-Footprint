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
]


// show table data

function showtable(curarray){
    document.getElementById("mytable").innerHTML =`
        <tr class="bg-primary test-white fw-bold">
        <td>ID</td>
        <td>Name</td>
        <td>Land</td>
        <td>co2</td>
    `;
    //for checking arry is empty
    if(curarray==""){
        document.getElementById("error").innerHTML = `<span class="text-danger">Not Fount!!</span>`
    }
    else{
        document.getElementById("error").innerHTML = "";

        for(var i = 0; i < curarray.length; i++){
            document.getElementById("mytable").innerHTML += `
                <tr>
                    <td>${curarray[i].id}</td>
                    <td>${curarray[i].name}</td>
                    <td>${curarray[i].land}</td>
                    <td>${curarray[i].co2}</td>
                </tr>
            `
        
        }
    }
}

//calling show table data method
showtable(array);

//table filtered data array
var newarray=[];

//for searching method
document.getElementById("search").addEventListener("keyup", function(){

    var search = this.value.toLowerCase();

    newarray = array.filter(function (val){

        if(val.id.includes(search) || val.name.includes(search) || val.land.includes(search) || val.co2.includes(search)){
            var newobj = {id:val.id, name:val.name, land:val.land, co2:val.co2};
            return newobj;
        }
        
    })

    showtable(newarray);    
})
