//requires: gtceu
//requires: regions_unexplored
ServerEvents.recipes(event => {

event.remove({ id: 'regions_unexplored:oak_door' })
event.remove({ id: 'regions_unexplored:baobab_door' })
event.remove({ id: 'regions_unexplored:blackwood_door' })
event.remove({ id: 'regions_unexplored:blue_bioshroom_door' })
event.remove({ id: 'regions_unexplored:brimwood_door' })
event.remove({ id: 'regions_unexplored:cobalt_door' })
event.remove({ id: 'regions_unexplored:cypress_door' })
event.remove({ id: 'regions_unexplored:dead_door' })
event.remove({ id: 'regions_unexplored:eucalyptus_door' })
event.remove({ id: 'regions_unexplored:green_bioshroom_door' })
event.remove({ id: 'regions_unexplored:joshua_door' })
event.remove({ id: 'regions_unexplored:kapok_door' })
event.remove({ id: 'regions_unexplored:larch_door' })
event.remove({ id: 'regions_unexplored:magnolia_door' })
event.remove({ id: 'regions_unexplored:maple_door' })
event.remove({ id: 'regions_unexplored:mauve_door' })
event.remove({ id: 'regions_unexplored:palm_door' })
event.remove({ id: 'regions_unexplored:pine_door' })
event.remove({ id: 'regions_unexplored:pink_bioshroom_door' })
event.remove({ id: 'regions_unexplored:redwood_door' })
event.remove({ id: 'regions_unexplored:socotra_door' })
event.remove({ id: 'regions_unexplored:willow_door' })
event.remove({ id: 'regions_unexplored:yellow_bioshroom_door' })


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
	'regions_unexplored',
	'baobab'
	)
door(
	'regions_unexplored',
	'blackwood'
	)
door(
	'regions_unexplored',
	'blue_bioshroom'
	)
door(
	'regions_unexplored',
	'brimwood'
	)
door(
	'regions_unexplored',
	'cobalt'
	)
door(
	'regions_unexplored',
	'cypress'
	)
door(
	'regions_unexplored',
	'dead'
	)
door(
	'regions_unexplored',
	'eucalyptus'
	)
door(
	'regions_unexplored',
	'green_bioshroom'
	)
door(
	'regions_unexplored',
	'joshua'
	)
door(
	'regions_unexplored',
	'kapok'
	)
door(
	'regions_unexplored',
	'larch'
	)
door(
	'regions_unexplored',
	'magnolia'
	)
door(
	'regions_unexplored',
	'maple'
	)
door(
	'regions_unexplored',
	'mauve'
	)
door(
	'regions_unexplored',
	'palm'
	)
door(
	'regions_unexplored',
	'pine'
	)
door(
	'regions_unexplored',
	'pink_bioshroom'
	)
door(
	'regions_unexplored',
	'redwood'
	)
door(
	'regions_unexplored',
	'socotra'
	)
door(
	'regions_unexplored',
	'willow'
	)
door(
	'regions_unexplored',
	'yellow_bioshroom'
	)

//The ones that don't fit well in the functions:

event.recipes.gtceu.assembler('astral:assembler_regions_unexplored_alpha_oak_door')
  .itemInputs(
    '1x minecraft:oak_trapdoor',
    '4x regions_unexplored:alpha_planks'
  )
  .inputFluids('gtceu:iron 16')
  .itemOutputs(
    'minecraft:oak_door'
  )
  .duration(400)
  .EUt(4)

event.shaped(
  Item.of('minecraft:oak_door', 1),
  [
    'ABF',
    'ACD',
    'AAE'
  ],
  {
    A: 'regions_unexplored:alpha_planks',
    B: 'minecraft:oak_trapdoor',
    C: '#forge:rings/iron',
    D: '#forge:screws/iron',
    E: '#forge:tools/saws',
    F: '#forge:tools/screwdrivers'
  }
)

})
