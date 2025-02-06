addLayer("r", {
    name: "randomness", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#7F00FF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "randomness points", // Name of prestige currency
    baseResource: "randomness", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult(1) { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "r: QR(Quick Reset) for randomness points layer ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
upgrades: {
    11: {
	title: "Upgrade 1"
	description: "doubles point gain",
        cost: new Decimal(25),
        effect(): if (hasupgrade('r', 11)) gain = gain.times(2)
    	},
    21: {
	title: "Upgrade 1"
	description: "doubles point gain",
        cost: new Decimal(25),
        effect(): if (hasupgrade('r', 11)) gain = gain.times(2)
    	},
}	
})
