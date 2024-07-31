ServerEvents.recipes(event => {
event.smelting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot')
event.remove({ id: 'blast_furnace' })
event.shaped(
  Item.of('minecraft:blast_furnace'),
  [
    ' D ',
    'CCC',
    'BAB'
  ],
  {
    A: '#forge:furnaces/basic',
    B: 'minecraft:smooth_stone_slab',
    C: '#forge:plates/iron',
    D: '#forge:tools/hammers'
  }
)

event.shapeless(
  Item.of('minecraft:flint'),
  [
    '#forge:tools/mortars',
    'minecraft:gravel'
  ]
)
event.shapeless(
  Item.of('minecraft:flint'),
  [
    '3x minecraft:gravel'
  ]
)
event.remove({ id: 'crafting_table' })
event.shaped(
  Item.of('minecraft:crafting_table'),
  [
    'AA',
    'BB'
  ],
  {
    A: 'minecraft:flint',
    B: '#minecraft:logs'
  }
)
event.remove({ id: 'furnace' })
event.shaped(
  Item.of('minecraft:furnace'),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:stones/furnace/basic',
    B: 'minecraft:clay_ball',
    C: '#astral:hammer'
  }
)
// Lantern
event.remove({ id: 'minecraft:lantern' })
event.shaped(
  Item.of('4x minecraft:lantern'),
  [
    'FD ',
    'CAC',
    ' BE'
  ],
  {
    A: '#astral:lantern_fuel_solid',
    B: '#astral:lantern_base',
    C: '#astral:lantern_rod',
    D: '#astral:chain_ring',
    E: '#forge:tools/saws',
    F: '#forge:tools/hammers'
  }
)
event.shaped(
  Item.of('4x minecraft:lantern'),
  [
    'FDG',
    'CAC',
    ' BE'
  ],
  {
    A: '#astral:lantern_fuel_liquid',
    B: '#astral:lantern_base',
    C: '#astral:lantern_rod',
    D: '#astral:chain_ring',
    E: '#forge:tools/saws',
    F: '#forge:tools/hammers',
    G: 'minecraft:string'
  }
)
// Lantern (Soul)
event.remove({ id: 'minecraft:soul_lantern' })
event.shaped(
  Item.of('4x minecraft:soul_lantern'),
  [
    'FD ',
    'CAC',
    ' BE'
  ],
  {
    A: '#astral:lantern_soul_fuel_solid',
    B: '#astral:lantern_base',
    C: '#astral:lantern_rod',
    D: '#astral:chain_ring',
    E: '#forge:tools/saws',
    F: '#forge:tools/hammers'
  }
)
event.shaped(
  Item.of('4x minecraft:soul_lantern'),
  [
    'FDG',
    'CAC',
    ' BE'
  ],
  {
    A: '#astral:lantern_soul_fuel_liquid',
    B: '#astral:lantern_base',
    C: '#astral:lantern_rod',
    D: '#astral:chain_ring',
    E: '#forge:tools/saws',
    F: '#forge:tools/hammers',
    G: 'minecraft:string'
  }
)
// Convert Soul
	event.shapeless(
  Item.of('4x minecraft:soul_torch'),
  [
    '#minecraft:soul_fire_base_blocks',
    '4x minecraft:torch'
  ]
)
	event.shapeless(
  Item.of('4x minecraft:soul_lantern'),
  [
    '#minecraft:soul_fire_base_blocks',
    '4x minecraft:lantern'
  ]
)
// Carnuba Wax
	event.shapeless(
  Item.of('kubejs:wax'),
  [
    '#astral:hammer',
    'biomesoplenty:palm_leaves'
  ]
)
event.recipes.gtceu.extractor('astral:extract_carnauba_wax')
  .itemInputs(
    'biomesoplenty:palm_leaves'
  )
  .itemOutputs(
    'kubejs:wax'
  )
  .duration(192)
  .EUt(4)
// Candle
event.remove({ id: 'minecraft:candle' })
event.shaped(
  Item.of('minecraft:candle'),
  [
    'B',
    'A'
  ],
  {
    A: '#forge:waxes',
    B: 'minecraft:string'
  }
)
// Textiles
	event.shapeless(
  Item.of('minecraft:string'),
  [
    '#forge:tools/mallets',
    '3x #astral:fiber_string'
  ]
)
// Pam Textiles
/*
event.remove({ id: 'pamhc2crops:string_fiber' })
	event.shapeless(
  Item.of('2x minecraft:string'),
  [
    '#forge:rods',
    '3x #forge:fiber'
  ]
    ).keepIngredient(Ingredient.of('#forge:rods'))
*/
// LEATHER FROM SADDLE
event.shapeless(
  Item.of('minecraft:leather', 3),
  [
    'minecraft:saddle',
    '#forge:tools/knives'
  ]
)
// BOOK - REMOVE
event.remove({ id: 'minecraft:book' })
// BOOK - CLOTH & GLUE
/*
event.shapeless(
  Item.of('minecraft:book'),
  [
    'minecraft:paper',
    'minecraft:paper',
    'minecraft:paper',
    'gtceu:sticky_resin',
    '#minecraft:wool_carpets',
    'pamhc2foodcore:potitem',
    '#forge:tools/knives',
    '#forge:water'
  ]
)
// BOOK - CLOTH & STRING
event.shapeless(
  Item.of('minecraft:book'),
  [
    'minecraft:paper',
    'minecraft:paper',
    'minecraft:paper',
    'minecraft:string',
    '#forge:tools/screwdrivers',
    '#minecraft:wool_carpets',
    'pamhc2foodcore:potitem',
    '#forge:tools/knives',
    '#forge:water'
  ]
)
*/
// BOOK - LEATHER & GLUE
event.shapeless(
  Item.of('minecraft:book'),
  [
    'minecraft:paper',
    'minecraft:paper',
    'minecraft:paper',
    'gtceu:sticky_resin',
    'minecraft:leather',
    '#forge:tools/knives'
  ]
)
// BOOK - LEATHER & STRING
event.shapeless(
  Item.of('minecraft:book'),
  [
    'minecraft:paper',
    'minecraft:paper',
    'minecraft:paper',
    'minecraft:string',
    '#forge:tools/screwdrivers',
    'minecraft:leather',
    '#forge:tools/knives'
  ]
)
event.recipes.gtceu.assembler('astral:assembler_book_string_carpet')
  .itemInputs(
    '3x minecraft:paper',
    'minecraft:string',
    '#minecraft:wool_carpets'
  )
  .inputFluids('minecraft:water 125')
  .itemOutputs(
    '1x minecraft:book'
  )
  .duration(20)
  .EUt(16)
event.recipes.gtceu.assembler('astral:assembler_book_resin_carpet')
  .itemInputs(
    '3x minecraft:paper',
    'gtceu:sticky_resin',
    '#minecraft:wool_carpets'
  )
  .inputFluids('minecraft:water 125')
  .itemOutputs(
    '1x minecraft:book'
  )
  .duration(20)
  .EUt(8)
// Plank
event.shapeless(
  Item.of('gtceu:wood_plate', 4),
  [
    '#minecraft:wooden_slabs',
    '#forge:tools/knives',
    '#forge:tools/saws'
  ]
)
// Chain
event.remove({ id: 'chain' })
event.shapeless(
  Item.of('minecraft:chain'),
  [
    '4x #astral:chain_ring',
    '#forge:tools/wrenches'
  ]
)
// Tools - Remove Wood + Stone
event.remove({ id: 'minecraft:wooden_shovel' })
event.remove({ id: 'minecraft:wooden_pickaxe' })
event.remove({ id: 'minecraft:wooden_axe' })
event.remove({ id: 'minecraft:wooden_hoe' })
event.remove({ id: 'minecraft:wooden_sword' })
event.remove({ id: 'minecraft:stone_shovel' })
event.remove({ id: 'minecraft:stone_pickaxe' })
event.remove({ id: 'minecraft:stone_axe' })
event.remove({ id: 'minecraft:stone_hoe' })
event.remove({ id: 'minecraft:stone_sword' })
event.remove({ id: 'gtceu:shaped/shovel_flint' })
event.remove({ id: 'gtceu:shaped/pickaxe_flint' })
event.remove({ id: 'gtceu:shaped/axe_flint' })
event.remove({ id: 'gtceu:shaped/hoe_flint' })
event.remove({ id: 'gtceu:shaped/sword_flint' })
// Tools - Flint
event.shaped(
  Item.of('kubejs:shovel_flint'),
  [
    'CAC',
    ' B ',
    ' B '
  ],
  {
    A: 'minecraft:flint',
    B: 'minecraft:stick',
    C: '#astral:binding'
  }
)
event.shaped(
  Item.of('kubejs:pickaxe_flint'),
  [
    'ABB',
    'DCD',
    ' C '
  ],
  {
    A: 'minecraft:flint',
    B: '#minecraft:planks',
    C: 'minecraft:stick',
    D: '#astral:binding'
  }
)
event.shaped(
  Item.of('kubejs:axe_flint'),
  [
    'ABD',
    'ACD',
    ' C '
  ],
  {
    A: 'minecraft:flint',
    B: '#minecraft:planks',
    C: 'minecraft:stick',
    D: '#astral:binding'
  }
)
event.shaped(
  Item.of('kubejs:hoe_flint'),
  [
    'ABD',
    'DC ',
    ' C '
  ],
  {
    A: 'minecraft:flint',
    B: '#minecraft:planks',
    C: 'minecraft:stick',
    D: '#astral:binding'
  }
)
event.shaped(
  Item.of('minecraft:wooden_hoe'),
  [
    'AA ',
    'CB ',
    ' B '
  ],
  {
    A: '#minecraft:planks',
    B: 'minecraft:stick',
    C: '#forge:tools/knives'
  }
)
event.shaped(
  Item.of('kubejs:sword_flint'),
  [
    ' A ',
    'CAC',
    ' B '
  ],
  {
    A: 'minecraft:flint',
    B: 'minecraft:stick',
    C: '#astral:binding'
  }
)

// ARROWS - REMOVE
event.remove({ id: 'minecraft:arrow' })
// ARROWS
event.shaped(
  Item.of('minecraft:arrow', 4),
  [
    ' AB',
    ' C ',
    'EDF'
  ],
  {
    A: '#astral:arrowhead',
    B: '#forge:tools/files',
    C: 'minecraft:stick',
    D: '#astral:fletching',
    E: '#forge:tools/knives',
    F: '#astral:binding'
  }
)
event.recipes.gtceu.assembler('astral:arrow')
  .itemInputs(
    '#astral:arrowhead',
    'minecraft:stick',
    '#astral:fletching',
    '#astral:binding'
  )
  .itemOutputs(
    '4x minecraft:arrow'
  )
  .duration(16)
  .EUt(4)
event.recipes.gtceu.assembler('astral:arrow_glue')
  .itemInputs(
    '#astral:arrowhead',
    'minecraft:stick',
    '#astral:fletching'
  )
  .inputFluids('gtceu:glue 20')
  .itemOutputs(
    '4x minecraft:arrow'
  )
  .duration(16)
  .EUt(4)

})
