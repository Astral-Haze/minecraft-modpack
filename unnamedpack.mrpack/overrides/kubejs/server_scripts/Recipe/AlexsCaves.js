ServerEvents.tags('item', event => {
  event.add('alexscaves:azure_neodymium_ingot', '#forge:ingots/azure_neodymium')
})
//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
event.remove({ id: 'alexscaves:furnace/iron_nugget_from_packed_galena_smelting'})
event.remove({ id: 'alexscaves:furnace/iron_nugget_from_packed_galena_blasting'})
event.smelting('gtceu:lead_nugget', 'alexscaves:packed_galena')
event.blasting('gtceu:lead_nugget', 'alexscaves:packed_galena')

event.shapeless(
  Item.of('kubejs:azure_neodymium_nugget', 9),
  [
    'alexscaves:azure_neodymium_ingot'
  ]
)
event.shapeless(
  Item.of('alexscaves:azure_neodymium_ingot'),
  [
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget',
    'kubejs:azure_neodymium_nugget'
  ]
)
  event.recipes.gtceu.macerator('astral:macerate_azure_neodymium_ingot')
    .itemInputs(
      'alexscaves:azure_neodymium_ingot'
    )
    .itemOutputs(
      '1x kubejs:azure_neodymium_dust'
    )
    .duration(100)
    .EUt(4)
event.smelting('alexscaves:azure_neodymium_ingot', 'kubejs:azure_neodymium_dust')
event.blasting('alexscaves:azure_neodymium_ingot', 'kubejs:azure_neodymium_dust')
event.shaped(
  Item.of('kubejs:azure_neodymium_plate'),
  [
    'B',
    'A',
    'A'
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    B: '#forge:tools/hammers'
  }
)
  event.recipes.gtceu.macerator('astral:macerate_azure_neodymium_plate')
    .itemInputs(
      'kubejs:azure_neodymium_plate'
    )
    .itemOutputs(
      '1x kubejs:azure_neodymium_dust'
    )
    .duration(100)
    .EUt(4)
event.shaped(
  Item.of('kubejs:azure_neodymium_rod'),
  [
    'B ',
    ' A'
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    B: '#forge:tools/files'
  }
)
event.recipes.gtceu.lathe('astral:lathe_azure_neodymium_ingot')
    .itemInputs(
      'alexscaves:azure_neodymium_ingot'
    )
    .itemOutputs(
      '2x kubejs:azure_neodymium_rod'
    )
    .duration(200)
    .EUt(16)
event.recipes.gtceu.bender('astral:bend_azure_neodymium_ingot')
    .itemInputs(
      'alexscaves:azure_neodymium_ingot'
    )
    .itemOutputs(
      '1x kubejs:azure_neodymium_plate'
    )
    .duration(100)
    .EUt(24)
    event.recipes.gtceu.forge_hammer('astral:hammer_azure_neodymium_ingot')
    .itemInputs(
      'alexscaves:azure_neodymium_ingot'
    )
    .itemOutputs(
      '1x kubejs:azure_neodymium_plate'
    )
    .duration(100)
    .EUt(16)
  event.recipes.gtceu.macerator('astral:macerate_azure_neodymium_rod')
    .itemInputs(
      'kubejs:azure_neodymium_rod'
    )
    .itemOutputs(
      '2x kubejs:small_azure_neodymium_dust'
    )
    .duration(50)
    .EUt(4)
event.shapeless(
  Item.of('kubejs:azure_neodymium_dust', 1),
  [
    'kubejs:small_azure_neodymium_dust',
    'kubejs:small_azure_neodymium_dust',
    'kubejs:small_azure_neodymium_dust',
    'kubejs:small_azure_neodymium_dust'
  ]
)
event.shapeless(
  Item.of('kubejs:small_azure_neodymium_dust', 4),
  [
    'kubejs:azure_neodymium_dust'
  ]
)
//RAIL
event.remove({ id: 'alexscaves:magnetic_levitation_rail'})
event.shaped(
  Item.of('alexscaves:magnetic_levitation_rail', 6),
  [
    'CEC',
    'ABA',
    'FDF'
  ],
  {
    A: 'gtceu:iron_rod',
    B: 'minecraft:stick',
    C: 'gtceu:iron_screw',
    D: '#forge:tools/screwdrivers',
    E: '#forge:tools/hammers',
    F: 'kubejs:azure_neodymium_rod'
  }
)
event.recipes.gtceu.arc_furnace('astral:arc_maglev_rail')
.itemInputs(
  '2x alexscaves:magnetic_levitation_rail'
)
.inputFluids('gtceu:oxygen 48')
.itemOutputs(
  '3x kubejs:azure_neodymium_nugget'
)
.duration(24)
.EUt(30)
event.remove({ id: 'alexscaves:holocoder'})
event.shaped(
  Item.of('alexscaves:holocoder', 1),
  [
    'EA ',
    'DBD',
    'GCF'
  ],
  {
    A: 'alexscaves:notor_gizmo',
    B: 'alexscaves:telecore',
    C: 'kubejs:azure_neodymium_plate',
    D: 'gtceu:iron_screw',
    E: '#forge:tools/screwdrivers',
    F: '#forge:tools/wrench',
    G: '#forge:tools/hammers'
  }
)
event.remove({ id: 'alexscaves:hologram_projector'})
event.shaped(
  Item.of('alexscaves:hologram_projector', 1),
  [
    'DCD',
    'AAA',
    'EBF'
  ],
  {
    A: 'alexscaves:notor_gizmo',
    B: 'gtceu:iron_plate',
    C: 'gtceu:glass_plate',
    D: 'gtceu:iron_screw',
    E: '#forge:tools/screwdrivers',
    F: '#forge:tools/hammers'
  }
)
//alexscaves:remote_detonator - gtceu:lv_emitter forge:circuits/lv gtceu:polyethylene_plate
//alexscaves:hazmat_mask - gtceu:item_filter gtceu:polyvinyl_chloride_foil
//alexscaves:hazmat_chestplate gtceu:polyvinyl_chloride_foil
//exscaves:hazmat_leggings gtceu:polyvinyl_chloride_foil
//alexscaves:hazmat_boots gtceu:polyvinyl_chloride_foil
//alexscaves:hazmat_block gtceu:polyvinyl_chloride_plate
//alexscaves:raygun alexscaves:fissile_core alexscaves:uranium_rod gtceu:aluminium_plate


  event.recipes.gtceu.macerator('astral:macerate_heavy_bone')
    .itemInputs(
      'alexscaves:heavy_bone'
    )
    .itemOutputs(
      '10x minecraft:bone_meal'
    )
    .duration(200)
    .EUt(2)

event.remove({ id: 'alexscaves:nuclear_bomb' })
event.shaped(
  Item.of('alexscaves:nuclear_bomb', 1),
  [
    'FAD',
    'CBE',
    'GAF'
  ],
  {
    A: 'alexscaves:fissile_core',
    B: 'minecraft:tnt',
    C: 'gtceu:steel_machine_casing',
    D: 'gtceu:mv_emitter',
    E: 'gtceu:copper_single_cable',
    F: '#astral:hard_screw',
    G: '#forge:tools/screwdrivers'
  }
)
})