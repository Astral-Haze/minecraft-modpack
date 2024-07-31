// Listen to item registry event
StartupEvents
	.registry('item', event => {
		// Aquafaba
		event
			.create('aquafaba')
			.displayName("Aquafaba")
			.food(food => {food
				.hunger(1)
				.saturation(1)
				.effect('minecraft:weakness', 2400, 1, 0.2)
			})
		// Flax Egg
		event.create('flax_egg')
			.displayName("Flax Egg")
			.food(food => {food
				.hunger(1)
				.saturation(1)
				.effect('minecraft:weakness', 2400, 1, 0.2)
			})
		// Chia Egg
		event
			.create('chia_egg')
			.displayName("Chia Egg")
			.food(food => {food
				.hunger(1)
				.saturation(1)
				.effect('minecraft:weakness', 2400, 1, 0.2)
			})
		// Shortening
		event
			.create('shortening')
			.displayName("Shortening")
			.food(food => {
				food.hunger(1)
				.saturation(0)
				.effect('minecraft:weakness', 2400, 1, 0.2)
				
			})
		event
			.create('butter_cacao')
			.displayName("Cacao Butter")
			.food(food => {
				food.hunger(1)
				.saturation(0)
				.effect('minecraft:weakness', 2400, 1, 0.2)
			})
		event
			.create('oil_coconut')
			.displayName("Coconut Oil")
			.food(food => {
				food.hunger(1)
				.saturation(0)
				.effect('minecraft:weakness', 2400, 1, 0.2)
			})
		// Wax
		event
			.create('wax')
			.displayName("Wax")
			.food(food => {
				food.hunger(0)
				.saturation(0)
				.effect('minecraft:weakness', 2400, 1, 0.2)
			})
		// Scraisins
		event
			.create('raisins_sculk')
			.displayName("Scraisins")
			.food(food => {food
				.hunger(2)
				.saturation(4.8)
				.effect('minecraft:darkness', 200, 1, 0.05)
			})
	}) 