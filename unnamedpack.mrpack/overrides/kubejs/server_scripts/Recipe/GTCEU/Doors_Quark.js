//requires: gtceu
//requires: quark
ServerEvents.recipes(event => {

event.remove({ id: 'quark:world/crafting/woodsets/ancient/door' })
event.remove({ id: 'quark:world/crafting/woodsets/azalea/door' })
event.remove({ id: 'quark:world/crafting/woodsets/blossom/door' })


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
	'quark',
	'ancient'
	)
door(
	'quark',
	'azalea'
	)
door(
	'quark',
	'blossom'
	)

//The ones that don't fit well in the functions:

})
