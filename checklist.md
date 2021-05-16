# Requirements:

<!-- User can click on an image to generate a resource (slap button)-->

<!-- Users have an up-to-date count of their resources (total counter displayed)-->

<!-- Users have at least 4 upgrades to purchase (axe, tractor, boat, truck)-->

Users can see how many of each resource they have and the amount of modification that resource provides (need to include price of the see below)

price of each item listed in button or icon for purchase <!--I had to add this as it was not listed in the requirements, but from a logical stand point it wouldnt make much sense without it.  So I could TECHNICALLY skip, but why????-->

At least 1 click upgrade and 1 automatic upgrade

Automatic upgrades are applied at least every 3 seconds, and the screen is updated to reflect this change

<!-- Users cannot purchase an upgrade if they do not have the resources -->

<!-- Purchasing an upgrade decreases the resource automatically -->

Upgrades have different modifier values

When a user buys an upgrade, the price of the upgrade goes up

# Stretch Goals:

Instead of a basic count, use images or icons to represent how many of a purchasable the user has
Prevent the user from writing a loop to click by setting a 'cooldown' between clicks
Disable the buttons a user cannot purchase and enable them if they have enough money
Unlock/hide upgrades until the user has enough resources at least once to afford the item
Consider how you could add bonuses that could increase the multiplier of automaticUpgrades
Try using localstorage to save your game progress between page reloads
Create a badge system to mark user milestones ex. award 'The Collector' for mining 1,000,000 total Cheese
Create a way to decrease the interval of automaticCollection
revent the collectionInterval from being started more than once

//THis probably needs to be inside the axeClick()
// function sumAxeQt(){
// var quantity = 0;
// for (clickAxes.pickaxe.quantity in clickAxes) {
// quantity += clickAxes.pickaxe[quantity];
// console.log("You got", quantity)
// }
// }sumAxeQt()
