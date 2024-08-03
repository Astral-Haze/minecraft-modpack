//requires: supplementaries
//  --------  Listen for the "recipes" server event.  --------
ServerEvents.tags('item', event => {
  event.add('supplementaries:straw', '#forge:crops/flax')
  event.add('supplementaries:straw', '#forge:crops/barley')
  event.add('supplementaries:straw', '#forge:crops/millet')
  event.add('supplementaries:straw', '#forge:crops/oats')
  event.add('supplementaries:straw', '#forge:crops/rye')
  event.add('supplementaries:straw', '#forge:crops/alfalfa')
})
ServerEvents.recipes(event => {
event.remove({ id: 'supplementaries:spring_launcher' })
event.shapeless(
  Item.of('supplementaries:spring_launcher', 1),
  [
    'minecraft:piston',
    'gtceu:steel_spring'
  ]
)
event.remove({ id: 'supplementaries:crank' })
event.shaped(
  Item.of('supplementaries:crank', 1),
  [
    ' A ',
    'CBC'
  ],
  {
    A: 'minecraft:stick',
    B: 'minecraft:cobblestone_slab',
    C: 'gtceu:wood_gear'
  }
)
})