//requires: gtceu
//requires: biomesoplenty
ServerEvents.recipes(event => {

function RecipeButton(Wood) {
event.remove({ id: 'gtceu:shaped/biomesoplenty/' + Wood + '_button' })
   event.recipes.gtceu.cutter('biomesoplenty:' + Wood + '_button_lubricant')
        .itemInputs(
            'biomesoplenty:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x biomesoplenty:' + Wood + '_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('biomesoplenty:' + Wood + '_button_distilled_water')
        .itemInputs(
            'biomesoplenty:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x biomesoplenty:' + Wood + '_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('biomesoplenty:' + Wood + '_button_water')
        .itemInputs(
            'biomesoplenty:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x biomesoplenty:' + Wood + '_button'
        )
		.duration(50)
		.EUt(7)
event.shaped(
  Item.of('6x biomesoplenty:' + Wood + '_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'biomesoplenty:' + Wood + '_pressure_plate'
  }
)


}


RecipeButton(
	'fir'
	)
RecipeButton(
	'redwood'
	)
RecipeButton(
	'mahogany'
	)
RecipeButton(
	'jacaranda'
	)
RecipeButton(
	'palm'
	)
RecipeButton(
	'willow'
	)
RecipeButton(
	'dead'
	)
RecipeButton(
	'magic'
	)
RecipeButton(
	'umbran'
	)
RecipeButton(
	'hellbark'
	)


})
