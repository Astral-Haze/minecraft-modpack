//requires: alexsmobs
ServerEvents.tags('entity_type', event => {
  event.add('astral:eats_fly', 'minecraft:wolf')
  event.add('astral:eats_fly', '#astral:frog')
  event.add('astral:eats_fly', '#astral:spider')
  event.add('astral:eats_fly', 'alexsmobs:centipede_head')
})
