ServerEvents.recipes(event => {
event.remove({ id: 'nethersdelight:blackstone_furnace' })
event.remove({ id: 'nethersdelight:blackstone_blast_furnace' })
event.shaped(
  Item.of('nethersdelight:blackstone_furnace'),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:stones/furnace/blackstone',
    B: 'minecraft:clay_ball',
    C: '#astral:hammer'
  }
)
event.shaped(
  Item.of('nethersdelight:blackstone_furnace'),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:stones/furnace/blackstone',
    B: 'minecraft:soul_sand',
    C: '#astral:hammer'
  }
)
event.shaped(
  Item.of('nethersdelight:blackstone_blast_furnace'),
  [
    ' D ',
    'CCC',
    'BAB'
  ],
  {
    A: '#forge:furnaces/blackstone',
    B: 'minecraft:polished_blackstone_slab',
    C: '#forge:plates/iron',
    D: '#forge:tools/hammers'
  }
)
})
