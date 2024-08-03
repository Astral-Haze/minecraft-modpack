//requires: gtceu
//requires: alexscaves
ServerEvents.recipes(event => {

function RecipeButton(Wood) {
event.remove({ id: 'alexscaves:' + Wood + '_button' })
   event.recipes.gtceu.cutter('alexscaves:' + Wood + '_button_lubricant')
        .itemInputs(
            'alexscaves:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x alexscaves:' + Wood + '_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('alexscaves:' + Wood + '_button_distilled_water')
        .itemInputs(
            'alexscaves:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x alexscaves:' + Wood + '_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('alexscaves:' + Wood + '_button_water')
        .itemInputs(
            'alexscaves:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x alexscaves:' + Wood + '_button'
        )
		.duration(50)
		.EUt(7)
event.shaped(
  Item.of('6x alexscaves:' + Wood + '_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'alexscaves:' + Wood + '_pressure_plate'
  }
)


}

RecipeButton(
	'pewen'
	)
RecipeButton(
	'thornwood'
	)

})