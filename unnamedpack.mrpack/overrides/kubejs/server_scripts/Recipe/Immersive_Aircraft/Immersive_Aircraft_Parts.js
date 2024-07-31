ServerEvents.recipes(event => {
event.shapeless(
  Item.of('kubejs:aluminium_strip', 3),
  [
    '#forge:tools/saws',
    '#forge:plates/aluminium'
  ]
)
event.recipes.gtceu.cutter('astral:cutter_aluminium_strip_lubricant')
  .itemInputs(
    '#forge:plates/aluminium'
  )
  .inputFluids('gtceu:lubricant 1')
  .itemOutputs(
    '3x kubejs:aluminium_strip'
  )
  .duration(20)
  .EUt(8)
event.recipes.gtceu.cutter('astral:cutter_aluminium_strip_distilled_water')
  .itemInputs(
    '#forge:plates/aluminium'
  )
  .inputFluids('gtceu:distilled_water 3')
  .itemOutputs(
    '3x kubejs:aluminium_strip'
  )
  .duration(30)
  .EUt(8)
event.recipes.gtceu.cutter('astral:cutter_aluminium_strip_water')
  .itemInputs(
    '#forge:plates/aluminium'
  )
  .inputFluids('minecraft:water 4')
  .itemOutputs(
    '3x kubejs:aluminium_strip'
  )
  .duration(40)
  .EUt(8)
event.recipes.gtceu.arc_furnace('astral:arc_aluminium_strip')
  .itemInputs(
    'kubejs:aluminium_strip'
  )
  .inputFluids('gtceu:oxygen 8')
  .itemOutputs(
    '3x gtceu:aluminium_nugget'
  )
  .duration(20)
  .EUt(120)
event.recipes.gtceu.macerator('astral:macerate_aluminium_strip')
  .itemInputs(
    'kubejs:aluminium_strip'
  )
  .itemOutputs(
    '3x gtceu:tiny_aluminium_dust'
  )
  .duration(69)
  .EUt(8)
event.recipes.gtceu.extractor('astral:extract_aluminium_strip')
  .itemInputs(
    'kubejs:aluminium_strip'
  )
  .outputFluids(
    'gtceu:aluminium 48'
  )
  .duration(9)
  .EUt(120)
event.shapeless(
  Item.of('kubejs:aluminium_rib'),
  [
    '#forge:tools/saws',
    'kubejs:aluminium_strip'
  ]
)
event.recipes.gtceu.lathe('astral:lathe_aluminium_strip')
  .itemInputs(
    'kubejs:aluminium_strip'
  )
  .itemOutputs(
    'kubejs:aluminium_rib',
    'gtceu:tiny_aluminium_dust'
  )
  .duration(20)
  .EUt(4)
event.recipes.gtceu.arc_furnace('astral:arc_aluminium_rib')
  .itemInputs(
    'kubejs:aluminium_rib'
  )
  .inputFluids('gtceu:oxygen 3')
  .itemOutputs(
    '2x gtceu:aluminium_nugget'
  )
  .duration(13)
  .EUt(120)
event.recipes.gtceu.macerator('astral:macerate_aluminium_rib')
  .itemInputs(
    'kubejs:aluminium_rib'
  )
  .itemOutputs(
    '2x gtceu:tiny_aluminium_dust'
  )
  .duration(46)
  .EUt(8)
event.recipes.gtceu.extractor('astral:extract_aluminium_rib')
  .itemInputs(
    'kubejs:aluminium_rib'
  )
  .outputFluids(
    'gtceu:aluminium 32'
  )
  .duration(6)
  .EUt(120)
event.recipes.gtceu.assembler('astral:assembler_aluminium_wing')
  .itemInputs(
    '3x kubejs:aluminium_rib',
    '4x #forge:plates/aluminium',
    '12x #forge:screws/stainless_steel',
    '2x #forge:rods/stainless_steel'
  )
  .itemOutputs(
    'kubejs:aluminium_wing'
  )
  .duration(50)
  .EUt(16)
event.recipes.gtceu.macerator('astral:macerate_aluminium_wing')
  .itemInputs(
    'kubejs:aluminium_wing'
  )
  .itemOutputs(
    '42x gtceu:tiny_aluminium_dust',
    '21x gtceu:tiny_stainless_steel_dust'
  )
  .duration(368)
  .EUt(8)

event.recipes.gtceu.assembler('astral:assembler_aluminium_stabiliser')
  .itemInputs(
    '2x kubejs:aluminium_rib',
    '2x #forge:plates/aluminium',
    '8x #forge:screws/stainless_steel',
    '#forge:rods/stainless_steel'
  )
  .itemOutputs(
    'kubejs:aluminium_stabiliser'
  )
  .duration(20)
  .EUt(16)
event.recipes.gtceu.assembler('astral:assembler_wheel')
  .itemInputs(
    '#forge:rings/steel'
  )
  .inputFluids('gtceu:rubber 144')
  .itemOutputs(
    'kubejs:wheel'
  )
  .duration(100)
  .EUt(7)
event.recipes.gtceu.assembler('astral:assembler_rubber_cushion')
  .itemInputs(
    '#minecraft:wool',
    '4x #forge:small_springs/steel'
  )
  .inputFluids('gtceu:rubber 432')
  .itemOutputs(
    'kubejs:rubber_cushion'
  )
  .duration(100)
  .EUt(7)
event.recipes.gtceu.assembler('astral:assembler_pvc_cushion')
  .itemInputs(
    '#minecraft:wool',
    '4x #forge:small_springs/steel'
  )
  .inputFluids('gtceu:polyvinyl_chloride 144')
  .itemOutputs(
    'kubejs:rubber_cushion'
  )
  .duration(100)
  .EUt(7)
event.recipes.gtceu.assembler('astral:assembler_instrument_panel')
  .itemInputs(
    'gtceu:bronze_gearbox',
    'gtceu:treated_wood_plate',
    'minecraft:lever',
    '4x #minecraft:buttons',
    '#forge:rings/zinc',
    'minecraft:glass_pane'
  )
  .inputFluids('gtceu:glue 100')
  .itemOutputs(
    'kubejs:instrument_panel'
  )
  .duration(240)
  .EUt(16)
event.recipes.gtceu.assembler('astral:assembler_aluminium_cockpit')
  .itemInputs(
    'gtceu:aluminium_frame',
    'kubejs:instrument_panel',
    'kubejs:rubber_cushion',
    '6x #forge:plates/aluminium',
    '8x #forge:screws/stainless_steel'
  )
  .itemOutputs(
    'kubejs:aluminium_cockpit'
  )
  .duration(240)
  .EUt(16)
// Remove Hull
event.remove({ id: 'immersive_aircraft:hull' })
// Steel Hull
event.shaped(
  Item.of('immersive_aircraft:hull', 1),
  [
    'CBC',
    'AAA',
    'CBC'
  ],
  {
    A: '#forge:plates/steel',
    B: '#minecraft:logs',
    C: '#astral:hard_screw',

  }
)
// Aluminum Hull
event.shaped(
  Item.of('immersive_aircraft:hull', 2),
  [
    'CBC',
    'AAA',
    'CBC'
  ],
  {
    A: '#forge:plates/aluminium',
    B: '#minecraft:logs',
    C: '#astral:hard_screw',
  }
)
// Knightmetal Hull
event.shaped(
  Item.of('immersive_aircraft:hull', 1),
  [
    'CBC',
    'AAA',
    'CBC'
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: '#minecraft:logs',
    C: '#astral:hard_screw',

  }
)
// Boiler
event.remove({ id: 'immersive_aircraft:boiler' })
event.shaped(
  Item.of('immersive_aircraft:boiler', 1),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'gtceu:bronze_plate',
    B: '#forge:tools/wrenches',
    C: 'gtceu:bronze_small_fluid_pipe'

  }
)
// Engine
event.remove({ id: 'immersive_aircraft:engine' })
event.shaped(
  Item.of('immersive_aircraft:engine', 1),
  [
    'GEF',
    'DCD',
    'ABA'
  ],
  {
    A: '#astral:engine_plate',
    B: 'immersive_aircraft:boiler',
    C: '#astral:engine_shaft',
    D: 'minecraft:piston',
    E: '#astral:hard_screw',
    F: '#forge:tools/wrenches',
    G: '#forge:tools/screwdrivers'
  }
)
// Propeller
event.remove({ id: 'immersive_aircraft:propeller' })
event.shaped(
  Item.of('immersive_aircraft:propeller', 1),
  [
    'EBB',
    'FAC',
    'BBD'
  ],
  {
    A: '#astral:air_ring',
    B: '#astral:prop_plate',
    C: '#astral:hard_screw',
    D: '#forge:tools/screwdrivers',
    E: '#forge:tools/hammers',
    F: '#forge:tools/files'
  }
)
})