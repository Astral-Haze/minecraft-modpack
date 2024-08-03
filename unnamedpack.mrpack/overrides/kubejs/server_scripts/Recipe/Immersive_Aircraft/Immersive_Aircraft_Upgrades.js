// Listen to item tag event
ServerEvents.tags('item', event => {
  event.add('astral:part_plate', 'gtceu:bronze_plate')
  event.add('astral:part_plate', 'gtceu:brass_plate')
  event.add('astral:part_plate', 'gtceu:iron_plate')
  event.add('astral:part_plate', 'gtceu:wrought_iron_plate')
  event.add('astral:part_plate', 'gtceu:invar_plate')
  event.add('astral:part_plate', 'kubejs:ironwood_plate')
  event.add('astral:part_plate', 'gtceu:steel_plate')
  event.add('astral:part_plate', 'gtceu:stainless_steel_plate')
  event.add('astral:part_plate', 'gtceu:aluminium_plate')
  event.add('astral:part_plate', 'kubejs:knightmetal_plate')
})
//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
event.remove({ id: 'immersive_aircraft:enhanced_propeller' })
event.shaped(
  Item.of('immersive_aircraft:enhanced_propeller', 1),
  [
    'EBB',
    'FAC',
    'BBD'
  ],
  {
    A: '#astral:air_ring',
    B: 'gtceu:aluminium_plate',
    C: '#astral:hard_screw',
    D: '#forge:tools/screwdrivers',
    E: '#forge:tools/hammers',
    F: '#forge:tools/files'
  }
)
event.remove({ id: 'immersive_aircraft:eco_engine' })
event.shaped(
  Item.of('immersive_aircraft:eco_engine', 1),
  [
    'FGC',
    ' DB',
    ' AE'
  ],
  {
    A: 'immersive_aircraft:engine',
    B: '#gtceu:circuits/lv',
    C: 'gtceu:tin_single_cable',
    D: 'gtceu:lv_electric_motor',
    E: '#gtceu:batteries/lv',
    F: '#forge:tools/screwdrivers',
    G: '#astral:hard_screw'
  }
)
//event.remove({ id: 'immersive_aircraft:nether_engine' })
event.remove({ id: 'immersive_aircraft:steel_boiler' })
event.shaped(
  Item.of('immersive_aircraft:steel_boiler', 1),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: '#forge:plates/steel',
    B: '#forge:tools/wrenches',
    C: 'gtceu:steel_small_fluid_pipe'

  }
)
event.remove({ id: 'immersive_aircraft:industrial_gears' })
event.shaped(
  Item.of('immersive_aircraft:industrial_gears', 1),
  [
    'CFG',
    'AEF',
    'DBC'
  ],
  {
    A: 'gtceu:steel_gear',
    B: 'gtceu:steel_small_gear',
    C: 'gtceu:steel_bolt',
    D: '#forge:tools/wrenches',
    E: 'gtceu:graphite_dust',
    F: 'gtceu:aluminium_plate',
    G: '#forge:tools/hammers'
  }
)
event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
event.shaped(
  Item.of('immersive_aircraft:sturdy_pipes', 1),
  [
    ' B ',
    'CAC',
    ' C '
  ],
  {
    A: '#forge:plates/steel',
    B: '#forge:tools/wrenches',
    C: 'gtceu:steel_small_fluid_pipe'
  }
)
event.remove({ id: 'immersive_aircraft:gyroscope' })
event.shaped(
  Item.of('immersive_aircraft:gyroscope', 1),
  [
    ' C ',
    'DAE',
    ' B '
  ],
  {
    A: 'gtceu:lv_electric_motor',
    B: 'minecraft:compass',
    C: '#gtceu:circuits/lv',
    D: 'gtceu:tin_single_cable',
    E: 'gtceu:iron_small_gear'

  }
)
event.remove({ id: 'immersive_aircraft:hull_reinforcement' })
event.shaped(
  Item.of('immersive_aircraft:hull_reinforcement', 1),
  [
    'BBB',
    'AAA',
    'BBB'
  ],
  {
    A: 'immersive_aircraft:hull',
    B: 'gtceu:aluminium_plate'
  }
)
event.remove({ id: 'immersive_aircraft:improved_landing_gear' })
event.shaped(

  Item.of('immersive_aircraft:improved_landing_gear', 1),
  [
    'FCE',
    'EDG',
    'HAB'
  ],
  {
    A: '#astral:air_ring',
    B: 'gtceu:rubber_plate',
    C: 'gtceu:steel_spring',
    D: 'gtceu:aluminium_rod',
    E: '#astral:hard_screw',
    F: '#forge:tools/screwdrivers',
    G: '#forge:tools/hammers',
    H: 'gtceu:graphite_dust'
  }
)
// Weapons and Tools
event.remove({ id: 'immersive_aircraft:bomb_bay' })
event.shaped(
  Item.of('immersive_aircraft:bomb_bay', 1),
  [
    'BAB',
    'DCD',
    'EFG'
  ],
  {
    A: 'minecraft:tnt',
    B: '#astral:part_plate',
    C: 'minecraft:iron_trapdoor',
    D: '#astral:hard_screw',
    E: '#forge:tools/screwdrivers',
    F: '#forge:tools/hammers',
    G: '#forge:tools/wrench'
  }
)
})