ServerEvents.recipes(event => {
event.remove({ id: 'alexscaves:pewen_planks' })
event.remove({ id: 'alexscaves:thornwood_planks' })
event.remove({ id: 'regions_unexplored:alpha_planks' })
event.remove({ id: 'regions_unexplored:baobab_planks' })
event.remove({ id: 'regions_unexplored:blackwood_planks' })
event.remove({ id: 'regions_unexplored:blue_bioshroom_planks' })
event.remove({ id: 'regions_unexplored:brimwood_planks' })
event.remove({ id: 'regions_unexplored:cobalt_planks' })
event.remove({ id: 'regions_unexplored:cypress_planks' })
event.remove({ id: 'regions_unexplored:dead_planks' })
event.remove({ id: 'regions_unexplored:eucalyptus_planks' })
event.remove({ id: 'regions_unexplored:green_bioshroom_planks' })
event.remove({ id: 'regions_unexplored:joshua_planks' })
event.remove({ id: 'regions_unexplored:kapok_planks' })
event.remove({ id: 'regions_unexplored:larch_planks' })
event.remove({ id: 'regions_unexplored:magnolia_planks' })
event.remove({ id: 'regions_unexplored:maple_planks' })
event.remove({ id: 'regions_unexplored:mauve_planks' })
event.remove({ id: 'regions_unexplored:palm_planks' })
event.remove({ id: 'regions_unexplored:pine_planks' })
event.remove({ id: 'regions_unexplored:pink_bioshroom_planks' })
event.remove({ id: 'regions_unexplored:redwood_planks' })
event.remove({ id: 'regions_unexplored:socotra_planks' })
event.remove({ id: 'regions_unexplored:willow_planks' })
event.remove({ id: 'regions_unexplored:yellow_bioshroom_planks' })
event.remove({ id: 'gtceu:shapeless/rubber_wood_planks' })
event.remove({ id: 'quark:world/crafting/woodsets/ancient/planks' })
event.remove({ id: 'quark:world/crafting/woodsets/azalea/planks' })
event.remove({ id: 'quark:world/crafting/woodsets/blossom/planks' })
//The function that gets filled in with variables specified later
function cutterLog(cutterLogInput, cutterLogOutput, cutterLogYield) {
    if (isNaN(cutterLogYield)) cutterLogYield = 2;  //Sets yield 2 if not a number
	cutterLogYield = Math.floor(cutterLogYield)  //Rounds yield down to an integer
//Regular lubricant
    event.recipes.gtceu.cutter(cutterLogOutput + '_lubricant')
        .itemInputs(
            cutterLogInput
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 5)
        )
        .itemOutputs(
			3 * cutterLogYield + 'x ' + cutterLogOutput,
			cutterLogYield + 'x gtceu:wood_dust'
        )
		.duration(200)
		.EUt(7)
//Distilled water as lubricant
    event.recipes.gtceu.cutter(cutterLogOutput + '_distilled_water')
        .itemInputs(
            cutterLogInput
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 15)
        )
        .itemOutputs(
			3 * cutterLogYield + 'x ' + cutterLogOutput,
			cutterLogYield + 'x gtceu:wood_dust'
        )
		.duration(300)
		.EUt(7)
//Water as lubricant
    event.recipes.gtceu.cutter(cutterLogOutput + '_water')
        .itemInputs(
            cutterLogInput
        )
        .inputFluids(
            Fluid.of('minecraft:water', 20)
        )
        .itemOutputs(
			3 * cutterLogYield + 'x ' + cutterLogOutput,
			cutterLogYield + 'x gtceu:wood_dust'
        )
		.duration(400)
		.EUt(7)
  }

//Variables to input to the recipes
//Logs, Planks, Yield. Yield can be ommitted. In this case, it will be set to 2. 1 = 3 planks, 1 dust; 2 = 6 planks, 2 dust, and so forth 
  
  cutterLog('#biomesoplenty:dead_logs', 'biomesoplenty:dead_planks')
  cutterLog('#biomesoplenty:fir_logs', 'biomesoplenty:fir_planks')
  cutterLog('#biomesoplenty:hellbark_logs', 'biomesoplenty:hellbark_planks')
  cutterLog('#biomesoplenty:jacaranda_logs', 'biomesoplenty:jacaranda_planks')
  cutterLog('#biomesoplenty:magic_logs', 'biomesoplenty:magic_planks')
  cutterLog('#biomesoplenty:mahogany_logs', 'biomesoplenty:mahogany_planks')
  cutterLog('#biomesoplenty:palm_logs', 'biomesoplenty:palm_planks')
  cutterLog('#biomesoplenty:redwood_logs', 'biomesoplenty:redwood_planks')
  cutterLog('#biomesoplenty:umbran_logs', 'biomesoplenty:umbran_planks')
  cutterLog('#biomesoplenty:willow_logs', 'biomesoplenty:willow_planks')

  cutterLog('#alexscaves:pewen_logs', 'alexscaves:pewen_planks')
  cutterLog('#alexscaves:thornwood_logs', 'alexscaves:thornwood_planks')
  cutterLog('#regions_unexplored:baobab_logs', 'regions_unexplored:baobab_planks')
  cutterLog('#regions_unexplored:blackwood_logs', 'regions_unexplored:blackwood_planks')
  cutterLog('#regions_unexplored:blue_bioshroom_logs', 'regions_unexplored:blue_bioshroom_planks')
  cutterLog('#regions_unexplored:brimwood_logs', 'regions_unexplored:brimwood_planks')
  cutterLog('#regions_unexplored:cobalt_logs', 'regions_unexplored:cobalt_planks')
  cutterLog('#regions_unexplored:cypress_logs', 'regions_unexplored:cypress_planks')
  cutterLog('#regions_unexplored:dead_logs', 'regions_unexplored:dead_planks')
  cutterLog('#regions_unexplored:eucalyptus_logs', 'regions_unexplored:eucalyptus_planks')
  cutterLog('#regions_unexplored:green_bioshroom_logs', 'regions_unexplored:green_bioshroom_planks')
  cutterLog('#regions_unexplored:joshua_logs', 'regions_unexplored:joshua_planks')
  cutterLog('#regions_unexplored:kapok_logs', 'regions_unexplored:kapok_planks')
  cutterLog('#regions_unexplored:larch_logs', 'regions_unexplored:larch_planks')
  cutterLog('#regions_unexplored:magnolia_logs', 'regions_unexplored:magnolia_planks')
  cutterLog('#regions_unexplored:maple_logs', 'regions_unexplored:maple_planks')
  cutterLog('#regions_unexplored:mauve_logs', 'regions_unexplored:mauve_planks')
  cutterLog('#regions_unexplored:palm_logs', 'regions_unexplored:palm_planks')
  cutterLog('#regions_unexplored:pine_logs', 'regions_unexplored:pine_planks')
  cutterLog('#regions_unexplored:pink_bioshroom_logs', 'regions_unexplored:pink_bioshroom_planks')
  cutterLog('#regions_unexplored:redwood_logs', 'regions_unexplored:redwood_planks')
  cutterLog('#regions_unexplored:socotra_logs', 'regions_unexplored:socotra_planks')
  cutterLog('#regions_unexplored:willow_logs', 'regions_unexplored:willow_planks')
  cutterLog('#regions_unexplored:yellow_bioshroom_logs', 'regions_unexplored:yellow_bioshroom_planks')


  cutterLog('#quark:ancient_logs', 'quark:ancient_planks')
  cutterLog('#quark:azalea_logs', 'quark:azalea_planks')
  cutterLog('#quark:blossom_logs', 'quark:blossom_planks')















/*  For any additional logs, copy this template and replace 'placeholder' with the mod's name, a colon and the wood type.
    If any wood types produce the same type of planks, add them to a tag and use that or create an individual recipe, as GTCEU machine recipes require individual names.
  cutterLog('#placeholder_logs', 'placeholder_planks')

Example unique recipe set:
    event.recipes.gtceu.cutter('aether:skyroot_planks')
        .itemInputs(
            '#aether:skyroot_logs'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 5)
        )
        .itemOutputs(
			'6x aether:skyroot_planks',
			'2x gtceu:wood_dust'
        )
		.duration(200)
		.EUt(7)
    event.recipes.gtceu.cutter('aether:skyroot_planks_distilled_water')
        .itemInputs(
            '#aether:skyroot_logs'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 15)
        )
        .itemOutputs(
			'6x aether:skyroot_planks',
			'2x gtceu:wood_dust'
        )
		.duration(300)
		.EUt(7)
    event.recipes.gtceu.cutter('aether:skyroot_planks_water')
        .itemInputs(
            '#aether:skyroot_logs'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 20)
        )
        .itemOutputs(
			'6x aether:skyroot_planks',
			'2x gtceu:wood_dust'
        )
		.duration(400)
		.EUt(7)
*/
function log(log) {
event.shapeless(
	Item.of('4x ' + log + '_planks'),
	[
		'#forge:tools/saws',
		'#' + log + '_logs'
	]
)
event.shapeless(
	Item.of('2x ' + log + '_planks'),
	[
		'#' + log + '_logs'
	]
)


}



  log('alexscaves:pewen')
  log('alexscaves:thornwood')
  log('regions_unexplored:baobab')
  log('regions_unexplored:blackwood')
  log('regions_unexplored:blue_bioshroom')
  log('regions_unexplored:brimwood')
  log('regions_unexplored:cobalt')
  log('regions_unexplored:cypress')
  log('regions_unexplored:dead')
  log('regions_unexplored:eucalyptus')
  log('regions_unexplored:green_bioshroom')
  log('regions_unexplored:joshua')
  log('regions_unexplored:kapok')
  log('regions_unexplored:larch')
  log('regions_unexplored:magnolia')
  log('regions_unexplored:maple')
  log('regions_unexplored:mauve')
  log('regions_unexplored:palm')
  log('regions_unexplored:pine')
  log('regions_unexplored:pink_bioshroom')
  log('regions_unexplored:redwood')
  log('regions_unexplored:socotra')
  log('regions_unexplored:willow')
  log('regions_unexplored:yellow_bioshroom')
  log('quark:ancient')
  log('quark:azalea')
  log('quark:blossom')

event.shapeless(
	Item.of('4x regions_unexplored:alpha_planks'),
	[
		'#forge:tools/saws',
		'regions_unexplored:alpha_log'
	]
)
event.shapeless(
	Item.of('2x regions_unexplored:alpha_planks'),
	[
		'regions_unexplored:alpha_log'
	]
)











})
