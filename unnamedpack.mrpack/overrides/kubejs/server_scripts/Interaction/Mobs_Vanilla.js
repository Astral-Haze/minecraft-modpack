function bottlehoney(honeymob) {
ItemEvents
  .entityInteracted('minecraft:glass_bottle', event => {
  if(event.target.type != honeymob) return
  event.item.count--
  event.target.playSound('minecraft:entity.llama.spit')
  event.player.giveInHand('minecraft:honey_bottle')
})
}
  bottlehoney('minecraft:bee')
//Milk
ItemEvents
  .entityInteracted('minecraft:bucket', event => {
  if(event.target.type != 'minecraft:squid') return
  event.item.count--
  event.player.giveInHand('minecraft:milk_bucket')
  event.target.playSound('minecraft:entity.cow.milk')
})
ItemEvents
  .entityInteracted('minecraft:bucket', event => {
  if(event.target.type != 'minecraft:glow_squid') return
  event.item.count--
  event.player.giveInHand('minecraft:milk_bucket')
  event.target.playSound('minecraft:entity.cow.milk')
})