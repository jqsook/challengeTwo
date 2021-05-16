let cheese = 0;

// let clickQty = [];


//------------4 upgrade dictionaries----------

let clickAxes = {
pickaxe: {
price: 10,
quantity: 0,
multiplier: 1 //Change this back to 1
}
};

let clickTractors = {
tractor: {
price: 100,
quantity: 0,
multiplier: 2
}
};
    
let autoBoats = {
    boat: {
        price: 500,
        quantity: 0,
        multiplier: 20
    }
}

let autoTrucks = {
    truck: {
        price: 1000,
        quantity: 0,
        multiplier: 50
    }
}
//-------------FUNctions-------------------------------------
function mine() {
    cheese++

    truckClick()
    boatClick()
    tractrClick()
    axeClick()
    update()
}

function update() {
document.getElementById("chz-total").innerHTML = `${cheese}`//Put the summed mods here
document.getElementById("id-axe").innerHTML = `${clickAxes.pickaxe.quantity}`
document.getElementById("id-axePrice").innerHTML = `${clickAxes.pickaxe.price}`
document.getElementById("id-tractr").innerHTML = `${clickTractors.tractor.quantity}`
document.getElementById("id-trctPrice").innerHTML = `${clickTractors.tractor.price}`
document.getElementById("id-boat").innerHTML = `${autoBoats.boat.quantity}`
document.getElementById("id-btPrice").innerHTML = `${autoBoats.boat.price}`
document.getElementById("id-trk").innerHTML = `${autoTrucks.truck.quantity}`
document.getElementById("id-trkPrice").innerHTML = `${autoTrucks.truck.price}`
    
}
// -----------------Pick Axe---------------- //
function buyPickAxe() {
    if (cheese >= clickAxes.pickaxe.price) {
        clickAxes.pickaxe.quantity++  
        cheese -= clickAxes.pickaxe.price  //This part works
        console.log("you have a pick axe", clickAxes.pickaxe.quantity)
        
        update()
    } else {
        alert("You need more Doge")
    }
}
function axeClick() {
        if (clickAxes.pickaxe.quantity >= 1) {
        cheese += (clickAxes.pickaxe.quantity * clickAxes.pickaxe.multiplier);//THIS LEGIT WORKS!!!!!!
        console.log("You made it to axe click", cheese)
        update()
        } else {
            console.log("You made it to axeclick else", cheese)
        }
}
    
//----------------Tractor----------------// 
function buyTractor() {
    if (cheese > clickTractors.tractor.price) {
        clickTractors.tractor.quantity++
        cheese -= (clickTractors.tractor.price)
        // console.log("you have a new Tractor")
    } else {
        alert("You need more Doge")
    }
        update()
}
    function tractrClick() {
        if (clickTractors.tractor.quantity >= 1 && cheese >= 100) {
        cheese += (clickTractors.tractor.quantity * clickTractors.tractor.multiplier);
        console.log("You made it to trctrlick")
        update()
        } else {
        return ("You need more cheese")
        }
    }

//  -----------  Boat   ----------------------//
function buyBoat() {
    if (cheese > autoBoats.boat.price) {
        autoBoats.boat.quantity++
        cheese -= (autoBoats.boat.price)
        // console.log("you have a new Boat")
    } else {
        alert("You need more Doge")
    }
        update()
    }   

function boatClick() {
    if (autoBoats.boat.quantity >= 1 && cheese >= 500) {
        cheese += (autoBoats.boat.quantity * autoBoats.boat.multiplier);
        console.log("You made it to trctrlick")
        update()
        } else {
        return ("You need more Doge")
        }
}

// -------------Truck------------//
function buyTrucks() {
    if (cheese > autoTrucks.truck.price) {
        autoTrucks.truck.quantity++
        cheese -= (autoTrucks.truck.price)
        // console.log("you have a Truck")
    } else {
        alert("You need more Doge")
    }
        update()
}

function truckClick() {
        if (autoTrucks.truck.quantity >= 1 && cheese >= 900) {
        trckMod = trckQty * autoTrucks.truck.multiplier + cheese++;
        console.log("You made it to trctrlick", trckMod)
        update()
        } else {
        return ("You need more Doge")
        }
    }

//----------------SUM GLOBALS-----------//
    


// function sumMultip() {
//     let chz = cheese + (pckMod + trctMod + boatMod + trckMod)
//     console.log("sumMultip", cheese, chz)
    
    
//     axeRepeat()
//     tractorRepeat()
//     boatRepeat()
//     truckRepeat()
//     update()
    
    
//     }

    //-----------------INTERVAL FUNCTIONS----------------------
    // function startInterval() {
    // collectionInterval = setInterval(collectAutoUpgrades, 3000);
    // }
