//requires: twilightforest
//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
//METAL ITEMS
event.remove({ id: 'twilightforest:equipment/ironwood_helmet' })
event.shaped(
  Item.of('twilightforest:ironwood_helmet', 1).enchant('aqua_affinity', 1).weakNBT(),
  [
    'AAA',
    'ABA'
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_chestplate' })
event.shaped(
  Item.of('twilightforest:ironwood_chestplate', 1).enchant('protection', 1).weakNBT(),
  [
    'ABA',
    'AAA',
    'AAA'
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_leggings' })
event.shaped(
  Item.of('twilightforest:ironwood_leggings', 1).enchant('protection', 1).weakNBT(),
  [
    'AAA',
    'ABA',
    'A A'
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_boots' })
event.shaped(
  Item.of('twilightforest:ironwood_boots', 1).enchant('feather_falling', 1).weakNBT(),
  [
    'A A',
    'ABA'
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_sword' })
event.shaped(
  Item.of('twilightforest:ironwood_sword', 1).enchant('unbreaking', 1).weakNBT(),
  [
    ' A ',
    'CAD',
    ' B '
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_shovel' })
event.shaped(
  Item.of('twilightforest:ironwood_shovel', 1).enchant('unbreaking', 1).weakNBT(),
  [
    'CAD',
    ' B ',
    ' B '
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_pickaxe' })
event.shaped(
  Item.of('twilightforest:ironwood_pickaxe', 1).enchant('efficiency', 1).weakNBT(),
  [
    'ABB',
    'DCE',
    ' C '
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: 'twilightforest:ironwood_ingot',
    C: 'minecraft:stick',
    D: '#forge:tools/files',
    E: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_axe' })
event.shaped(
  Item.of('twilightforest:ironwood_axe', 1).enchant('fortune', 1).weakNBT(),
  [
    'ABE',
    'AC ',
    'DC '
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: 'twilightforest:ironwood_ingot',
    C: 'minecraft:stick',
    D: '#forge:tools/files',
    E: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/ironwood_hoe' })
event.shaped(
  Item.of('twilightforest:ironwood_hoe', 1).enchant('efficiency', 1).weakNBT(),
  [
    'ABE',
    'DC ',
    ' C '
  ],
  {
    A: 'kubejs:ironwood_plate',
    B: 'twilightforest:ironwood_ingot',
    C: 'minecraft:stick',
    D: '#forge:tools/files',
    E: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_hoe' })
event.shaped(
  Item.of('twilightforest:steeleaf_hoe', 1).enchant('fortune', 2).weakNBT(),
  [
    'AAD',
    'CB ',
    ' B '
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_axe' })
event.shaped(
  Item.of('twilightforest:steeleaf_axe', 1).enchant('efficiency', 2).weakNBT(),
  [
    'AAD',
    'AB ',
    'CB '
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_sword' })
event.shaped(
  Item.of('twilightforest:steeleaf_sword', 1).enchant('looting', 2).weakNBT(),
  [
    ' A ',
    'CAD',
    ' B '
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_shovel' })
event.shaped(
  Item.of('twilightforest:steeleaf_shovel', 1).enchant('efficiency', 2).weakNBT(),
  [
    'CAD',
    ' B ',
    ' B '
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_pickaxe' })
event.shaped(
  Item.of('twilightforest:steeleaf_pickaxe', 1).enchant('fortune', 2).weakNBT(),
  [
    'AAA',
    'CBD',
    ' B '
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_helmet' })
event.shaped(
  Item.of('twilightforest:steeleaf_helmet', 1).enchant('projectile_protection', 2).weakNBT(),
  [
    'AAA',
    'ABA'
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_chestplate' })
event.shaped(
  Item.of('twilightforest:steeleaf_chestplate', 1).enchant('blast_protection', 2).weakNBT(),
  [
    'ABA',
    'AAA',
    'AAA'
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_leggings' })
event.shaped(
  Item.of('twilightforest:steeleaf_leggings', 1).enchant('fire_protection', 2).weakNBT(),
  [
    'AAA',
    'ABA',
    'A A'
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/steeleaf_boots' })
event.shaped(
  Item.of('twilightforest:steeleaf_boots', 1).enchant('feather_falling', 2).weakNBT(),
  [
    'A A',
    'ABA'
  ],
  {
    A: 'twilightforest:steeleaf_ingot',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/naga_chestplate' })
event.shaped(
  Item.of('twilightforest:naga_chestplate', 1).enchant('fire_protection', 3).weakNBT(),
  [
    'ACA',
    'ABA',
    'AAA'
  ],
  {
    A: 'twilightforest:naga_scale',
    B: 'minecraft:chainmail_chestplate',
    C: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/naga_leggings' })
event.shaped(
  Item.of('twilightforest:naga_leggings', 1).enchant('protection', 3).weakNBT(),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'twilightforest:naga_scale',
    B: 'minecraft:chainmail_leggings',
    C: '#forge:tools/hammers'
  }
)

event.remove({ id: 'twilightforest:equipment/fiery_helmet' })
event.shaped(
  Item.of('twilightforest:fiery_helmet', 1),
  [
    'AAA',
    'ABA'
  ],
  {
    A: 'kubejs:fiery_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/fiery_chestplate' })
event.shaped(
  Item.of('twilightforest:fiery_chestplate', 1),
  [
    'ABA',
    'AAA',
    'AAA'
  ],
  {
    A: 'kubejs:fiery_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/fiery_leggings' })
event.shaped(
  Item.of('twilightforest:fiery_leggings', 1),
  [
    'AAA',
    'ABA',
    'A A'
  ],
  {
    A: 'kubejs:fiery_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/fiery_boots' })
event.shaped(
  Item.of('twilightforest:fiery_boots', 1),
  [
    'A A',
    'ABA'
  ],
  {
    A: 'kubejs:fiery_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/fiery_sword' })
event.shaped(
  Item.of('twilightforest:fiery_sword', 1),
  [
    ' A ',
    'CAD',
    ' B '
  ],
  {
    A: 'kubejs:fiery_plate',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/fiery_pickaxe' })
event.shaped(
  Item.of('twilightforest:fiery_pickaxe', 1),
  [
    'ABB',
    'DCE',
    ' C '
  ],
  {
    A: 'kubejs:fiery_plate',
    B: 'twilightforest:fiery_ingot',
    C: 'minecraft:stick',
    D: '#forge:tools/files',
    E: '#forge:tools/hammers'
  }
)

//KNIGHTMETAL ITEMS
event.remove({ id: 'twilightforest:equipment/knightmetal_helmet' })
event.shaped(
  Item.of('twilightforest:knightmetal_helmet', 1),
  [
    'AAA',
    'ABA'
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_chestplate' })
event.shaped(
  Item.of('twilightforest:knightmetal_chestplate', 1),
  [
    'ABA',
    'AAA',
    'AAA'
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_leggings' })
event.shaped(
  Item.of('twilightforest:knightmetal_leggings', 1),
  [
    'AAA',
    'ABA',
    'A A'
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_boots' })
event.shaped(
  Item.of('twilightforest:knightmetal_boots', 1),
  [
    'A A',
    'ABA'
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_sword' })
event.shaped(
  Item.of('twilightforest:knightmetal_sword', 1),
  [
    ' A ',
    'CAD',
    ' B '
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: 'minecraft:stick',
    C: '#forge:tools/files',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_pickaxe' })
event.shaped(
  Item.of('twilightforest:knightmetal_pickaxe', 1),
  [
    'ABB',
    'DCE',
    ' C '
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: 'twilightforest:knightmetal_ingot',
    C: 'minecraft:stick',
    D: '#forge:tools/files',
    E: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_axe' })
event.shaped(
  Item.of('twilightforest:knightmetal_axe', 1),
  [
    'ABE',
    'AC ',
    'DC '
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: 'twilightforest:knightmetal_ingot',
    C: 'minecraft:stick',
    D: '#forge:tools/files',
    E: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/knightmetal_shield' })
event.shaped(
  Item.of('twilightforest:knightmetal_shield', 1),
  [
    ' AB',
    'DAC',
    ' AB'
  ],
  {
    A: 'kubejs:knightmetal_plate',
    B: '#twilightforest:towerwood',
    C: 'twilightforest:knightmetal_ring',
    D: '#forge:tools/hammers'
  }
)
event.remove({ id: 'twilightforest:equipment/block_and_chain' })
event.shaped(
  Item.of('twilightforest:block_and_chain', 1),
  [
    'ABB',
    'BCD'
  ],
  {
    A: 'twilightforest:knightmetal_block',
    B: 'kubejs:knightmetal_rod',
    C: 'twilightforest:knightmetal_ring',
    D: '#forge:tools/hammers'
  }
)
})