//requires: gtceu
ServerEvents.recipes(event => {
event.remove({ id: 'gtceu:shapeless/rubber_button' })
event.remove({ id: 'gtceu:shapeless/treated_wood_button' })

function RecipeButton(Wood) {
   event.recipes.gtceu.cutter('gtceu:' + Wood + '_button_lubricant')
        .itemInputs(
            'gtceu:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x gtceu:' + Wood + '_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('gtceu:' + Wood + '_button_distilled_water')
        .itemInputs(
            'gtceu:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x gtceu:' + Wood + '_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('gtceu:' + Wood + '_button_water')
        .itemInputs(
            'gtceu:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x gtceu:' + Wood + '_button'
        )
		.duration(50)
		.EUt(7)
event.shaped(
  Item.of('6x gtceu:' + Wood + '_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'gtceu:' + Wood + '_pressure_plate'
  }
)


}

RecipeButton(
	'rubber'
	)
RecipeButton(
	'treated_wood'
	)
})
