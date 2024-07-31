//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
//event.remove({ id: 'immersive_aircraft:airship' })

//event.remove({ id: 'immersive_aircraft:cargo_airship' })
// Remove old biplane recipe
event.remove({ id: 'immersive_aircraft:biplane' })
event.remove({ id: 'immersive_aircraft:cargo_airship' })
event.remove({ id: 'immersive_aircraft:airship' })
event.remove({ id: 'immersive_aircraft:warship' })
event.remove({ id: 'immersive_aircraft:gyrodyne' })
event.remove({ id: 'immersive_aircraft:quadrocopter' })
// Add new biplane recipe
event.recipes.gtceu.assembler('astral:assembler_biplane')
  .itemInputs(
    'immersive_aircraft:engine',
    'immersive_aircraft:propeller',
    'kubejs:aluminium_cockpit',
    'gtceu:aluminium_frame',
    '4x #forge:plates/aluminium',
    '4x kubejs:aluminium_wing',
    '3x kubejs:aluminium_stabiliser',
    '16x #forge:screws/stainless_steel',
    '3x kubejs:wheel'
  )
  .inputFluids('gtceu:zinc 432')
  .itemOutputs(
    'immersive_aircraft:biplane'
  )
  .duration(480)
  .EUt(16)
event.recipes.gtceu.assembler('astral:assembler_airship')
  .itemInputs(
    'immersive_aircraft:engine',
    '#minecraft:boats',
    'minecraft:lever',
    '16x #astral:hard_screw',
    'immersive_aircraft:propeller',
    '8x gtceu:long_steel_rod',
    '6x immersive_aircraft:sail',
    '4x #forge:ropes'
  )
  .inputFluids('gtceu:glue 320')
  .itemOutputs(
    'immersive_aircraft:airship'
  )
  .duration(1200)
  .EUt(8)
event.recipes.gtceu.assembler('astral:assembler_cargo_airship')
  .itemInputs(
    'immersive_aircraft:airship',
    '2x immersive_aircraft:engine',
    '8x #astral:hard_screw',
    '2x immersive_aircraft:propeller'
  )
  .inputFluids('gtceu:glue 100')
  .itemOutputs(
    'immersive_aircraft:cargo_airship'
  )
  .duration(1200)
  .EUt(8)
event.recipes.gtceu.assembler('astral:assembler_warship')
  .itemInputs(
    'immersive_aircraft:cargo_airship',
    'immersive_aircraft:engine',
    '16x #astral:hard_screw',
    'immersive_aircraft:propeller',
    '14x immersive_aircraft:sail'
  )
  .inputFluids('gtceu:glue 720')
  .itemOutputs(
    'immersive_aircraft:warship'
  )
  .duration(2400)
  .EUt(16)

//event.remove({ id: 'immersive_aircraft:gyrodyne' })

//event.remove({ id: 'immersive_aircraft:quadrocopter' })
})