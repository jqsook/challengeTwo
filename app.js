let cheese = 0;

//------------4 upgrade dictionaries----------

let clickAxes = {
pickaxe: {
price: 10,
quantity: 0,
multiplier: 1 
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

let autoRockets = {
    rocket: {
        price: 10500,
        quantity: 0,
        multiplier: 500
    }
}
//-------------FUNctions-------------------------------------//
function mine() {
    cheese++

    sumMultip()
    update()
}

function update() {
document.getElementById("chz-total").innerHTML = `${cheese}`
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
        cheese -= clickAxes.pickaxe.price  
        clickAxes.pickaxe.price++  
        // console.log("you have a pick axe", clickAxes.pickaxe.quantity)
        update()
        
    } else {
        alert("You need more Doge")
    }
}
function axeClick() {
        if (clickAxes.pickaxe.quantity >= 1) {
        cheese += (clickAxes.pickaxe.quantity * clickAxes.pickaxe.multiplier);
        // console.log("You made it to axe click", cheese)
        update()
        } else {
            // console.log("You made it to axeclick else")
        }
}
    
//----------------Tractor----------------// 
function buyTractor() {
    if (cheese > clickTractors.tractor.price) {
        clickTractors.tractor.quantity++
        cheese -= clickTractors.tractor.price
        clickTractors.tractor.price++
        // console.log("you have a new Tractor")
        update()
    } else {
        alert("You need more Doge")
    }
}
function tractrClick() {
        if (clickTractors.tractor.quantity >= 1) {
        cheese += (clickTractors.tractor.quantity * clickTractors.tractor.multiplier);
        // console.log("You made it to trctrlick", cheese)
        update()
        } else {
        return ("You need more doge")
        }
    }

//  -----------  Boat   ----------------------//
function buyBoat() {
    if (cheese > autoBoats.boat.price && autoBoats.boat.quantity <= 4) { //Limited to 4 for the switch cases- I was trying to get the for in loops to work, but no go.
        autoBoats.boat.quantity++
        cheese -= (autoBoats.boat.price)
        autoBoats.boat.price
        update()
        // console.log("you have a new Boat")
    } else {
        (document.getElementById("btn-boat").disabled = true);
        alert("You need more Doge")
    }
        
    }   

function boatClick() {
    if (autoBoats.boat.quantity >= 1) {
        cheese += (autoBoats.boat.quantity * autoBoats.boat.multiplier)
        // console.log("You made it to Boat click", cheese)
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
        update()
        // console.log("you have a Truck")
    } else {
        alert("You need more Doge")
    }
        
}

function truckClick() {
        if (autoTrucks.truck.quantity >= 1) {
        cheese += (autoTrucks.truck.quantity * autoTrucks.truck.multiplier)
        // console.log("You made it to trctrlick")
        update()
        } else {
        return ("You need more Doge")
        }
    }

//--------------Rocket------------//
//Setup a display conditional of reveal the icon if doge >= 5,000 and an alert "elon says buy a rocket- icon will be placed in navbar as purchasable. maybe if it works add a tesla roadster for 50,000doge??"
function buyRockets() {
    if (cheese > autoRockets.rocket.price) {
        autoRockets.rocket.quantity++
        cheese -= (autoRockets.rocket.price)
        update()
    
        // console.log("you have a Truck")
    } else {
        alert("You need more Doge")
    }
        
}

function rocketClick() {
        if (autoRockets.rocket.quantity >= 1) {
        cheese += (autoRockets.rocket.quantity * autoRockets.rocket.multiplier)
        // console.log("You made it to trctrlick")
            update()
            
        } else {
        return ("You need more Doge")
        }
    }


//----------------Function container-----------//

function sumMultip() {
    truckClick()
    boatClick()
    tractrClick()
    axeClick()
    autoMater()
    
    // rocketClick()
    // teslaRoadsterClick()
}

    //-----------------INTERVAL FUNCTIONS----------------------
function autoMater() {
    switch (autoBoats.boat.quantity) {
        case 1:
            setInterval(autoMate, 5000)  
            console.log("You hit case 1");
            break;
        case 2:
            setInterval(autoMate, 4000)
            console.log("You hit case 2");
            break;
        case 3:
            setInterval(autoMate, 3000)
            console.log("You hit case 3");
            break;
        case 4:
            setInterval(autoMate, 2000)
            console.log("You hit case 4");
            break;
        default: 
            console.log("No more boats to purchase");
            
    }
}
function autoMate() {
    if (autoBoats.boat.quantity >= 1 && 11 >= autoBoats.boat.quantity) {
        setInterval(boatClick(), 1) //This doubles up the delay on the purchase- set to min amnt
        update()
        console.log("You hit automate if");
    }
}

///-----------FOR IN LOOPS-------------//
//Pulled these out and put into other vs window- lots of questions for the Ta's--

// let text = "";
// for (let x in clickAxes.pickaxe) {
//     text += clickAxes.pickaxe.price[1]; //This returns all the numbers in the pickaxe together.
//     console.log(1);
// }
// console.log(text)