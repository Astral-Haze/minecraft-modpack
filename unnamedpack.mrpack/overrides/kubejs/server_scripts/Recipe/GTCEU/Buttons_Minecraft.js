//requires: gtceu
ServerEvents.recipes(event => {
function RecipeButton(Wood) {
event.remove({ id: 'minecraft:' + Wood + '_button' })
   event.recipes.gtceu.cutter('gtceu:' + Wood + '_button_lubricant')
        .itemInputs(
            'minecraft:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x minecraft:' + Wood + '_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('gtceu:' + Wood + '_button_distilled_water')
        .itemInputs(
            'minecraft:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x minecraft:' + Wood + '_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('gtceu:' + Wood + '_button_water')
        .itemInputs(
            'minecraft:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x minecraft:' + Wood + '_button'
        )
		.duration(50)
		.EUt(7)
event.shaped(
  Item.of('6x minecraft:' + Wood + '_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'minecraft:' + Wood + '_pressure_plate'
  }
)


}

RecipeButton(
	'polished_blackstone'
	)
   event.recipes.gtceu.cutter('minecraft:cherry_button_lubricant')
        .itemInputs(
            'minecraft:cherry_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x minecraft:cherry_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('minecraft:cherry_button_distilled_water')
        .itemInputs(
            'minecraft:cherry_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x minecraft:cherry_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('minecraft:cherry_button_water')
        .itemInputs(
            'minecraft:cherry_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x minecraft:cherry_button'
        )
		.duration(50)
		.EUt(7)
   event.recipes.gtceu.cutter('minecraft:bamboo_button_lubricant')
        .itemInputs(
            'minecraft:bamboo_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x minecraft:bamboo_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('minecraft:bamboo_button_distilled_water')
        .itemInputs(
            'minecraft:bamboo_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x minecraft:bamboo_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('minecraft:bamboo_button_water')
        .itemInputs(
            'minecraft:bamboo_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x minecraft:bamboo_button'
        )
		.duration(50)
		.EUt(7)

})
