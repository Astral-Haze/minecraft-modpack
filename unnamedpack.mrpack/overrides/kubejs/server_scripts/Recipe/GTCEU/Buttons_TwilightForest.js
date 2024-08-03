//requires: gtceu
//requires: twilightforest
ServerEvents.recipes(event => {

function RecipeButton(Wood) {
event.remove({ id: 'twilightforest:wood/' + Wood + '_button' })
event.remove({ id: 'gtceu:shaped/thetwilightforest/' + Wood + '_button' })
   event.recipes.gtceu.cutter('twilightforest:' + Wood + '_button_lubricant')
        .itemInputs(
            'twilightforest:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1)
        )
        .itemOutputs(
			'12x twilightforest:' + Wood + '_button'
        )
		.duration(25)
		.EUt(7)
    event.recipes.gtceu.cutter('twilightforest:' + Wood + '_button_distilled_water')
        .itemInputs(
            'twilightforest:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 3)
        )
        .itemOutputs(
			'12x twilightforest:' + Wood + '_button'
        )
		.duration(38)
		.EUt(7)
    event.recipes.gtceu.cutter('twilightforest:' + Wood + '_button_water')
        .itemInputs(
            'twilightforest:' + Wood + '_pressure_plate'
        )
        .inputFluids(
            Fluid.of('minecraft:water',4)
        )
        .itemOutputs(
			'12x twilightforest:' + Wood + '_button'
        )
		.duration(50)
		.EUt(7)
event.shaped(
  Item.of('6x twilightforest:' + Wood + '_button'),
  [
    'AB'
  ],
  {
    A: '#forge:tools/saws',
    B: 'twilightforest:' + Wood + '_pressure_plate'
  }
)


}
RecipeButton('twilight_oak')
RecipeButton('canopy')
RecipeButton('mangrove')
RecipeButton('dark')
RecipeButton('time')
RecipeButton('transformation')
RecipeButton('mining')
RecipeButton('sorting')

})
