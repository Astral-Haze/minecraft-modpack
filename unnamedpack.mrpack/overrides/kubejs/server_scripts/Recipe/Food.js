// Listen to item tag event
ServerEvents.tags('item', event => {
	event
		.add(
			'forge:condiments/mayonnaise',
			'#forge:condiments/mayonaise'
		)
	event
		.add(
			'forge:leafyvegetables',
			'#forge:crops/alfalfa'
		)

	event
		.add(
			'forge:raisins',
			'kubejs:raisins_sculk'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:crops/tomato'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:crops/mango'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:crops/papaya'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:crops/guava'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:crops/grape'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:crops/banana'
		)
	event
		.add(
			'astral:ketchup_base',
			'#forge:nuts/walnut'
		)
	event
		.add(
			'astral:acid',
			'#forge:crops/lemon'
		)
	event
		.add(
			'astral:acid',
			'#forge:crops/lime'
		)
	event
		.add(
			'astral:acid',
			'#forge:vinegar'
		)
// Egg (Liquid)
	event
		.add(
			'astral:egg/liquid',
			'minecraft:egg'
		)
	event
		.add(
			'astral:egg/liquid',
			'kubejs:aquafaba'
		)
	event
		.add(
			'astral:egg/liquid',
			'kubejs:flax_egg'
		)
// Egg (Baking)
	event
		.add(
			'astral:egg/baking',
			'minecraft:egg'
		)
	event
		.add(
			'astral:egg/baking',
			'kubejs:aquafaba'
		)
	event
		.add(
			'astral:egg/baking',
			'kubejs:flax_egg'
		)
	event
		.add(
			'astral:egg/baking',
			'#forge:crops/avocado'
		)
	event
		.add(
			'astral:egg/baking',
			'#forge:crops/banana'
		)
// Egg (Solid)
	event
		.add(
			'astral:egg/solid',
			'minecraft:egg'
		)
	event
		.add(
			'astral:egg/solid',
			'#forge:crops/avocado'
		)
// Egg (Mayo)
	event
		.add(
			'astral:egg/mayo',
			'#forge:egg'
		)
	event
		.add(
			'astral:egg/mayo',
			'kubejs:aquafaba'
		)
	event
		.add(
			'astral:egg/mayo',
			'kubejs:flax_egg'
		)
	event
		.add(
			'astral:egg/mayo',
			'#forge:crops/avocado'
		)
	event
		.add(
			'astral:egg/mayo',
			'#forge:crops/banana'
		)

	event
		.add(
			'forge:ices',
			'gtceu:ice_dust'
		)
	event
		.add(
			'forge:flour',
			'gtceu:wheat_dust'
		)
	event
		.add(
			'forge:marshmallows',
			'#forge:marshmellows'
		)
// Honey
	event
		.add(
			'astral:honey',
			'#forge:jellies/applejelly'
		)
	event
		.add(
			'astral:honey',
			'#forge:honey'
		)


})
//  --------  Listen for the "recipes" server event  --------
ServerEvents.recipes(event => {
	// Aquafaba
	event
		.shapeless(
			Item.of('kubejs:aquafaba'),
				[
					'#forge:tool_pot',
					'#forge:crops/chickpea',
					'#forge:water'
				]
		)
	// Flax Egg
	event
		.shapeless(
			Item.of('kubejs:flax_egg'),
				[
					'#forge:tool_grinder',
					'#forge:crops/flax',
					'#forge:tool_mixingbowl',
					'#forge:water'
				]
		)
//MACERATE SCULK
	event
		.recipes.gtceu.macerator('astral:macerate_sculk_vein')
		.itemInputs(
		'minecraft:sculk_vein'
  )
		.itemOutputs(
    'kubejs:raisins_sculk'
  )
		.duration(98)
		.EUt(2)
	event
		.recipes.gtceu.macerator('astral:macerate_sculk')
		.itemInputs(
		'minecraft:sculk'
  )
		.itemOutputs(
    '9x kubejs:raisins_sculk'
  )
		.duration(98)
		.EUt(2)
	event
		.recipes.gtceu.macerator('astral:macerate_sculk_sensor')
		.itemInputs(
		'minecraft:sculk_sensor'
  )
		.itemOutputs(
    '4x kubejs:raisins_sculk'
  )
		.duration(392)
		.EUt(4)
//COCONUT MILK
	event
		.shapeless(
			Item.of('minecraft:milk_bucket'),
				[
    '#forge:crops/coconut',
    '#forge:tool_mixingbowl',
    'minecraft:bucket'
  ]
)
	event
		.recipes.gtceu.chemical_reactor('astral:shortening')
		.itemInputs('#forge:cookingoil')
		.notConsumable('gtceu:nickel_dust')
		.inputFluids('gtceu:hydrogen')
		.itemOutputs('kubejs:shortening')
		.duration(300)
		.EUt(4)
	event
		.recipes.gtceu.chemical_reactor('astral:shortening_from_seed_oil')
		.notConsumable('gtceu:nickel_dust')
		.inputFluids('gtceu:hydrogen')
		.inputFluids('gtceu:seed_oil 10')
		.itemOutputs('kubejs:shortening')
		.duration(300)
		.EUt(4)
	event
		.recipes.gtceu.chemical_reactor('astral:wax')
		.itemInputs('kubejs:shortening')
		.notConsumable('gtceu:nickel_dust')
		.inputFluids('gtceu:hydrogen')
		.itemOutputs('kubejs:wax')
		.duration(300)
		.EUt(4)

})