ItemEvents
	.modification(event => {
		event
			.modify('minecraft:wheat_seeds', item => {
				item.foodProperties = food => {
					food.hunger(1)
					food.saturation(0.5)
				}
			})
		event
			.modify('minecraft:pumpkin_seeds', item => {
				item.foodProperties = food => {
					food.hunger(1)
					food.saturation(0.5)
				}
			})
		event
			.modify('minecraft:melon_seeds', item => {
				item.foodProperties = food => {
					food.hunger(1)
					food.saturation(0.5)
				}
			})
		event
			.modify('minecraft:sugar_cane', item => {
				item.foodProperties = food => {
					food.hunger(2)
					food.saturation(1)
				}
			})
		event
			.modify('minecraft:brown_mushroom', item => {
				item.foodProperties = food => {
					food.hunger(1)
					food.saturation(0.5)
				}
			})
		event
			.modify('minecraft:red_mushroom', item => {
				item.foodProperties = food => {
					food.saturation(0.5)
					food.saturation(0)
					food.effect('minecraft:nausea', 2400, 1, 0.9)
					food.effect('minecraft:weakness', 2400, 1, 0.9)
					food.effect('minecraft:poison', 600, 1, 0.5)
					food.effect('minecraft:blindness', 600, 1, 0.5)
				}
			})
		event
			.modify('minecraft:fern', item => {
				item.foodProperties = food => {
					food.hunger(1)
					food.saturation(0.5)
					food.effect('minecraft:slowness', 400, 1, 0.1)
					food.effect('minecraft:poison', 400, 1, 0.1)
				}
			})
		event
			.modify('minecraft:wither_rose', item => {
				item.foodProperties = food => {
					food.hunger(0)
					food.saturation(0)
					food.alwaysEdible(true)
					food.effect('minecraft:wither', 400, 1, 0.95)
					food.effect('minecraft:instant_damage', 400, 1, 0.35)
				}
			})
		event
			.modify('minecraft:pumpkin', item => {
				item.foodProperties = food => {
					food.hunger(5)
					food.saturation(0.5)
				}
			})
	}
)