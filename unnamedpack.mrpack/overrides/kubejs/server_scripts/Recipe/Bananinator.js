//requires: pamhc2trees
//requires: alexsmobs
//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
// Banana
event.shapeless(
  Item.of('pamhc2trees:bananaitem'),
  [
    'alexsmobs:banana'
  ]
)
event.shapeless(
  Item.of('alexsmobs:banana'),
  [
    'pamhc2trees:bananaitem'
  ]
)
})