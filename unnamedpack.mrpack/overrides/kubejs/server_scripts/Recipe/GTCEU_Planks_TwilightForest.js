ServerEvents.recipes(event => {
event.remove({ id: 'twilightforest:wood/twilight_oak_planks' })
event.remove({ id: 'twilightforest:wood/canopy_planks' })
event.remove({ id: 'twilightforest:wood/mangrove_planks' })
event.remove({ id: 'twilightforest:wood/dark_planks' })
event.remove({ id: 'twilightforest:wood/time_planks' })
event.remove({ id: 'twilightforest:wood/transformation_planks' })
event.remove({ id: 'twilightforest:wood/mining_planks' })
event.remove({ id: 'twilightforest:wood/sorting_planks' })
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
  

  cutterLog('#twilightforest:canopy_logs', 'twilightforest:canopy_planks')
  cutterLog('#twilightforest:darkwood_logs', 'twilightforest:dark_planks')
  cutterLog('#twilightforest:mangrove_logs', 'twilightforest:mangrove_planks')
  cutterLog('#twilightforest:mining_logs', 'twilightforest:mining_planks')
  cutterLog('#twilightforest:sortwood_logs', 'twilightforest:sorting_planks')
  cutterLog('#twilightforest:timewood_logs', 'twilightforest:time_planks')
  cutterLog('#twilightforest:transwood_logs', 'twilightforest:transformation_planks')
  cutterLog('#twilightforest:twilight_oak_logs', 'twilightforest:twilight_oak_planks')

})
