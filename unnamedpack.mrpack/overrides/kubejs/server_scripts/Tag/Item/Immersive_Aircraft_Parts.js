// Listen to item tag event
ServerEvents.tags('item', event => {
  event.add('astral:hard_screw', 'gtceu:steel_screw')
  event.add('astral:hard_screw', 'gtceu:stainless_steel_screw')
  event.add('astral:hard_screw', 'gtceu:aluminium_screw')

  event.add('astral:engine_shaft', 'gtceu:long_steel_rod')
  event.add('astral:engine_shaft', 'kubejs:knightmetal_rod')
  event.add('astral:engine_shaft', 'gtceu:long_vanadium_steel_rod')
  event.add('astral:engine_shaft', 'gtceu:long_stainless_steel_rod')

  event.add('astral:engine_plate', 'gtceu:double_steel_plate')
  event.add('astral:engine_plate', 'gtceu:double_stainless_steel_plate')
  event.add('astral:engine_plate', 'gtceu:double_aluminium_plate')

  event.add('astral:prop_plate', 'gtceu:steel_plate')
  event.add('astral:prop_plate', 'gtceu:stainless_steel_plate')
  event.add('astral:prop_plate', 'kubejs:knightmetal_plate')

  event.add('astral:air_ring', 'gtceu:steel_ring')
  event.add('astral:air_ring', 'gtceu:stainless_steel_ring')
  event.add('astral:air_ring', 'gtceu:aluminium_ring')

})
