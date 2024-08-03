//requires: gtceu
//requires: biomesoplenty
ServerEvents.recipes(event => {
event.recipes.gtceu.macerator('astral:macerate_bop_flesh')
  .itemInputs(
    'biomesoplenty:flesh'
  )
  .itemOutputs(
    '9x gtceu:meat_dust'
  )
  .duration(150)
  .EUt(2)

event.recipes.gtceu.macerator('astral:macerate_bop_porous_flesh')
  .itemInputs(
    'biomesoplenty:porous_flesh'
  )
  .itemOutputs(
    '6x gtceu:meat_dust'
  )
  .duration(100)
  .EUt(2)

event.recipes.gtceu.macerator('astral:macerate_bop_flesh_tendons')
  .itemInputs(
    'biomesoplenty:flesh_tendons'
  )
  .itemOutputs(
    'gtceu:meat_dust'
  )
  .duration(50)
  .EUt(2)

event.recipes.gtceu.macerator('astral:macerate_bop_eyebulb')
  .itemInputs(
    'biomesoplenty:eyebulb'
  )
  .itemOutputs(
    '2x gtceu:meat_dust'
  )
  .duration(50)
  .EUt(2)

event.recipes.gtceu.macerator('astral:macerate_bop_hair')
  .itemInputs(
    'biomesoplenty:hair'
  )
  .itemOutputs(
    'gtceu:tiny_collagen_dust'
  )
  .duration(50)
  .EUt(2)

event.recipes.gtceu.macerator('astral:macerate_bop_brimstone')
  .itemInputs(
    'biomesoplenty:brimstone'
  )
  .itemOutputs(
    '9x gtceu:raw_sulfur'
  )
  .duration(150)
  .EUt(2)

event.recipes.gtceu.macerator('astral:macerate_bop_dried_salt')
  .itemInputs(
    'biomesoplenty:dried_salt'
  )
  .itemOutputs(
    '9x gtceu:raw_salt'
  )
  .duration(150)
  .EUt(2)


})