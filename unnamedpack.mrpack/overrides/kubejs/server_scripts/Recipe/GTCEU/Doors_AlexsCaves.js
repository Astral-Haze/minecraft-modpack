//requires: gtceu
//requires: alexscaves
ServerEvents.recipes(event => {

event.remove({ id: 'alexscaves:pewen_door' })
event.remove({ id: 'alexscaves:thornwood_door' })


function door(Namespace, Wood) {
event.recipes.gtceu.assembler('astral:assembler_' + Namespace + '_' + Wood + '_door')
  .itemInputs(
    '1x ' + Namespace + ':' + Wood + '_trapdoor',
    '4x ' + Namespace + ':' + Wood + '_planks'
  )
  .inputFluids('gtceu:iron 16')
  .itemOutputs(
    Namespace + ':' + Wood + '_door'
  )
  .duration(400)
  .EUt(4)

event.shaped(
  Item.of(Namespace + ':' + Wood + '_door', 1),
  [
    'ABF',
    'ACD',
    'AAE'
  ],
  {
    A: Namespace + ':' + Wood + '_planks',
    B: Namespace + ':' + Wood + '_trapdoor',
    C: '#forge:rings/iron',
    D: '#forge:screws/iron',
    E: '#forge:tools/saws',
    F: '#forge:tools/screwdrivers'
  }
)

}

door(
	'alexscaves',
	'pewen'
	)
door(
	'alexscaves',
	'thornwood'
	)

//The ones that don't fit well in the functions:

})
