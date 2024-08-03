//requires: gtceu
//requires: regions_unexplored
ServerEvents.recipes(event => {

function RecipeButton(Wood) {
event.remove({ id: 'regions_unexplored:' + Wood + '_button' })
   event.recipes.gtceu.cutter('regions_unexplored:' + Wood + '_button_lubricant')
        .itemInputs(
            'regions_unexplored:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x regions_unexplored:' + Wood + '_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('regions_unexplored:' + Wood + '_button_distilled_water')
        .itemInputs(
            'regions_unexplored:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x regions_unexplored:' + Wood + '_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('regions_unexplored:' + Wood + '_button_water')
        .itemInputs(
            'regions_unexplored:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x regions_unexplored:' + Wood + '_button'
        )
		.duration(50)
		.EUt(7)
event.shaped(
  Item.of('6x regions_unexplored:' + Wood + '_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'regions_unexplored:' + Wood + '_pressure_plate'
  }
)


}

RecipeButton(
	'baobab'
	)
RecipeButton(
	'blackwood'
	)
RecipeButton(
	'blue_bioshroom'
	)
RecipeButton(
	'brimwood'
	)
RecipeButton(
	'cobalt'
	)
RecipeButton(
	'cypress'
	)
RecipeButton(
	'dead'
	)
RecipeButton(
	'eucalyptus'
	)
RecipeButton(
	'green_bioshroom'
	)
RecipeButton(
	'joshua'
	)
RecipeButton(
	'kapok'
	)
RecipeButton(
	'larch'
	)
RecipeButton(
	'magnolia'
	)
RecipeButton(
	'maple'
	)
RecipeButton(
	'mauve'
	)
RecipeButton(
	'palm'
	)
RecipeButton(
	'pine'
	)
RecipeButton(
	'pink_bioshroom'
	)
RecipeButton(
	'redwood'
	)
RecipeButton(
	'socotra'
	)
RecipeButton(
	'willow'
	)
RecipeButton(
	'yellow_bioshroom'
	)


event.remove({ id: 'regions_unexplored:oak_button' })

})
