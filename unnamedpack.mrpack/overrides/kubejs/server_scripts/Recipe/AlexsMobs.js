//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
event.remove({ id: 'alexsmobs:roadrunner_boots' })
event.shaped(
  Item.of('alexsmobs:roadrunner_boots', 1),
  [
    'BDB',
    'BAB',
    'CEC'
  ],
  {
    A: 'minecraft:leather_boots',
    B: 'alexsmobs:roadrunner_feather',
    C: 'minecraft:chiseled_sandstone',
    D: '#bee:binding',
    E: '#forge:tools/hammers'
  }
)
event.remove({ id: 'alexsmobs:emu_leggings' })
event.shaped(
  Item.of('alexsmobs:emu_leggings', 1),
  [
    'BAB',
    'ACA',
    'B B'
  ],
  {
    A: 'alexsmobs:kangaroo_hide',
    B: 'alexsmobs:emu_feather',
    C: '#bee:binding'
  }
)
event.remove({ id: 'alexsmobs:crocodile_chestplate' })
event.shaped(
  Item.of('alexsmobs:crocodile_chestplate', 1),
  [
    'ACA',
    'ABA',
    'AAA'
  ],
  {
    A: 'alexsmobs:crocodile_scute',
    B: 'minecraft:chainmail_chestplate',
    C: '#forge:tools/hammers'
  }
)
event.remove({ id: 'alexsmobs:rocky_chestplate' })
event.shaped(
  Item.of('alexsmobs:rocky_chestplate', 1),
  [
    'ACA',
    'ABA',
    'AAA'
  ],
  {
    A: 'alexsmobs:rocky_shell',
    B: 'minecraft:chainmail_chestplate',
    C: '#bee:binding'
  }
)
event.remove({ id: 'alexsmobs:centipede_leggings' })
event.shaped(
  Item.of('alexsmobs:centipede_leggings', 1),
  [
    'AAA',
    'ABA',
    'A A'
  ],
  {
    A: 'alexsmobs:centipede_leg',
    B: '#bee:binding'
  }
)
event.remove({ id: 'alexsmobs:echolocator' })
event.shaped(
  Item.of('alexsmobs:echolocator', 1),
  [
    'BDB',
    'EAE',
    ' CF'
  ],
  {
    A: 'alexsmobs:ambergris',
    B: 'alexsmobs:cachalot_whale_tooth',
    C: 'gtceu:iron_plate',
    D: 'minecraft:glass_pane',
    E: 'gtceu:iron_screw',
    F: '#forge:tools/screwdrivers'
  }
)
})