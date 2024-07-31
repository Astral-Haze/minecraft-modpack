//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
  event.recipes.gtceu.macerator('bee:macerate_ironwood_ingot')
    .itemInputs(
      'twilightforest:ironwood_ingot'
    )
    .itemOutputs(
      '1x kubejs:ironwood_dust'
    )
    .duration(66)
    .EUt(2)
event.blasting('twilightforest:ironwood_ingot', 'kubejs:ironwood_dust')
event.shaped(
  Item.of('kubejs:ironwood_plate'),
  [
    'B',
    'A',
    'A'
  ],
  {
    A: 'twilightforest:ironwood_ingot',
    B: '#forge:tools/hammers'
  }
)
  event.recipes.gtceu.macerator('bee:macerate_ironwood_plate')
    .itemInputs(
      'kubejs:ironwood_plate'
    )
    .itemOutputs(
      '1x kubejs:ironwood_dust'
    )
    .duration(66)
    .EUt(4)
  event.recipes.gtceu.macerator('bee:macerate_knightmetal_ingot')
    .itemInputs(
      'twilightforest:knightmetal_ingot'
    )
    .itemOutputs(
      '1x kubejs:knightmetal_dust'
    )
    .duration(56)
    .EUt(8)
event.blasting('twilightforest:knightmetal_ingot', 'kubejs:knightmetal_dust')
event.shaped(
  Item.of('kubejs:knightmetal_plate'),
  [
    'B',
    'A',
    'A'
  ],
  {
    A: 'twilightforest:knightmetal_ingot',
    B: '#forge:tools/hammers'
  }
)
  event.recipes.gtceu.macerator('bee:macerate_knightmetal_plate')
    .itemInputs(
      'kubejs:knightmetal_plate'
    )
    .itemOutputs(
      '1x kubejs:knightmetal_dust'
    )
    .duration(56)
    .EUt(8)
event.shaped(
  Item.of('kubejs:knightmetal_rod'),
  [
    'B ',
    ' A'
  ],
  {
    A: 'twilightforest:knightmetal_ingot',
    B: '#forge:tools/files'
  }
)
event.recipes.gtceu.lathe('bee:lathe_knightmetal_ingot')
    .itemInputs(
      'twilightforest:knightmetal_ingot'
    )
    .itemOutputs(
      '2x kubejs:knightmetal_rod'
    )
    .duration(52)
    .EUt(16)
  event.recipes.gtceu.macerator('bee:macerate_knightmetal_ring')
    .itemInputs(
      'twilightforest:knightmetal_ring'
    )
    .itemOutputs(
      '4x kubejs:knightmetal_dust'
    )
    .duration(224)
    .EUt(8)
event.remove({ id: 'twilightforest:equipment/knightmetal_ring' })
event.shaped(
  Item.of('twilightforest:knightmetal_ring', 1),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'kubejs:knightmetal_rod',
    B: '#forge:tools/hammers'
  }
)
})