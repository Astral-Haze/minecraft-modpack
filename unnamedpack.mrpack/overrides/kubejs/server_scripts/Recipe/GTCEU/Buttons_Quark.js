//requires: gtceu
//requires: quark
ServerEvents.recipes(event => {
event.remove({ id: 'quark:world/crafting/woodsets/ancient/button' })
event.remove({ id: 'quark:world/crafting/woodsets/azalea/button' })
event.remove({ id: 'quark:world/crafting/woodsets/blossom/button' })
event.remove({ id: 'quark:automation/crafting/gold_button' })
event.remove({ id: 'quark:automation/crafting/iron_button' })
   event.recipes.gtceu.cutter('ancient_button_lubricant')
        .itemInputs(
            'quark:ancient_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x quark:ancient_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('ancient_button_distilled_water')
        .itemInputs(
            'quark:ancient_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x quark:ancient_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('ancient_button_water')
        .itemInputs(
            'quark:ancient_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x quark:ancient_button'
        )
		.duration(50)
		.EUt(7)

   event.recipes.gtceu.cutter('azalea_button_lubricant')
        .itemInputs(
            'quark:azalea_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x quark:azalea_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('azalea_button_distilled_water')
        .itemInputs(
            'quark:azalea_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x quark:azalea_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('azalea_button_water')
        .itemInputs(
            'quark:azalea_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x quark:azalea_button'
        )
		.duration(50)
		.EUt(7)

   event.recipes.gtceu.cutter('blossom_button_lubricant')
        .itemInputs(
            'quark:blossom_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x quark:blossom_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('blossom_button_distilled_water')
        .itemInputs(
            'quark:blossom_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x quark:blossom_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('blossom_button_water')
        .itemInputs(
            'quark:blossom_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x quark:blossom_button'
        )
		.duration(50)
		.EUt(7)

    event.recipes.gtceu.cutter('iron_button_lubricant')
        .itemInputs(
            'minecraft:heavy_weighted_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x quark:iron_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('iron_button_distilled_water')
        .itemInputs(
            'minecraft:heavy_weighted_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x quark:iron_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('iron_button_water')
        .itemInputs(
            'minecraft:heavy_weighted_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x quark:iron_button'
        )
		.duration(50)
		.EUt(7)

    event.recipes.gtceu.cutter('gold_button_lubricant')
        .itemInputs(
            'minecraft:light_weighted_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x quark:gold_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('gold_button_distilled_water')
        .itemInputs(
            'minecraft:light_weighted_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x quark:gold_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('gold_button_water')
        .itemInputs(
            'minecraft:light_weighted_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x quark:gold_button'
        )
		.duration(50)
		.EUt(7)

event.shaped(
  Item.of('6x quark:iron_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'minecraft:heavy_weighted_pressure_plate'
  }
)
event.shaped(
  Item.of('6x quark:gold_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'minecraft:light_weighted_pressure_plate'
  }
)
event.shaped(
  Item.of('6x quark:ancient_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'quark:ancient_pressure_plate'
  }
)
event.shaped(
  Item.of('6x quark:azalea_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'quark:azalea_pressure_plate'
  }
)
event.shaped(
  Item.of('6x quark:blossom_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'quark:blossom_pressure_plate'
  }
)

})
