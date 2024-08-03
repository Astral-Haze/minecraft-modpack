//  --------  Listen for the "recipes" server event.  --------
ServerEvents.recipes(event => {
event.remove({ mod: 'luphieclutteredmod' })
})