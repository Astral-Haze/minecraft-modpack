ServerEvents.recipes(event => {
event.remove({ id: 'quark:building/crafting/furnaces/cobblestone_furnace' })
event.remove({ id: 'quark:building/crafting/furnaces/deepslate_furnace' })
event.remove({ id: 'quark:building/crafting/furnaces/blackstone_furnace' })
event.remove({ id: 'quark:building/crafting/furnaces/deepslate_blast_furnace' })
event.remove({ id: 'quark:building/crafting/furnaces/blackstone_blast_furnace' })
event.shaped(
  Item.of('quark:deepslate_furnace'),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:stones/furnace/deepslate',
    B: 'minecraft:clay_ball',
    C: '#astral:hammer'
  }
)
event.shaped(
  Item.of('quark:deepslate_furnace'),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:stones/furnace/deepslate',
    B: 'minecraft:soul_sand',
    C: '#astral:hammer'
  }
)
})
