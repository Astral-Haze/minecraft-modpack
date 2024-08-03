//requires: gtceu
//requires: quark
ServerEvents.recipes(event => {
event.remove({ id: 'quark:tweaks/crafting/utility/tools/stone_shovel' })
event.remove({ id: 'quark:tweaks/crafting/utility/tools/stone_pickaxe' })
event.remove({ id: 'quark:tweaks/crafting/utility/tools/stone_axe' })
event.remove({ id: 'quark:tweaks/crafting/utility/tools/stone_hoe' })
event.remove({ id: 'quark:tweaks/crafting/utility/tools/stone_sword' })
event.remove({ id: 'quark:building/crafting/furnaces/mixed_furnace' })
event.remove({ id: 'quark:building/crafting/rope' })

event.remove({ id: 'quark:automation/crafting/redstone_randomizer' })
event.shaped(
  Item.of('quark:redstone_randomizer'),
  [
    'DCD',
    'CBC',
    'AEA'
  ],
  {
    A: 'minecraft:stone_pressure_plate',
    B: 'minecraft:prismarine_crystals',
    C: 'minecraft:redstone_torch',
    D: 'gtceu:iron_screw',
    E: '#forge:tools/screwdrivers'
  }
)
event.recipes.gtceu.assembler('astral:assembler_redstone_randomizer')
  .itemInputs(
    '3x minecraft:redstone_torch',
    'minecraft:prismarine_crystals'
  )
  .inputFluids('gtceu:concrete 144')
  .itemOutputs(
    '1x quark:redstone_randomizer'
  )
  .duration(100)
  .EUt(1)

event.remove({ id: 'quark:gold_bars' })
event.shaped(
  Item.of('quark:gold_bars'),
  [
    ' B ',
    'AAA',
    'AAA'
  ],
  {
    A: '#forge:rods/gold',
    B: '#forge:tools/hammers'
  }
)
event.recipes.gtceu.assembler('astral:assembler_gold_bars')
  .itemInputs(
    '3x #forge:rods/gold'
  )
  .itemOutputs(
    '4x quark:gold_bars'
  )
  .duration(300)
  .EUt(4)



event.remove({ id: 'quark:building/smelting/moss_paste' })
event.shapeless(
	Item.of('1x quark:moss_paste'),
	[
		'#forge:tools/mortars',
		'minecraft:moss_block'
	]
)
event.recipes.gtceu.macerator('astral:macerate_moss')
  .itemInputs(
    'minecraft:moss_block'
  )
  .itemOutputs(
    '1x quark:moss_paste'
  )
  .duration(24)
  .EUt(2)


event.remove({ id: 'farmersdelight:rope' })
event.remove({ id: 'quark:rope' })
event.shapeless(
	Item.of('4x quark:rope'),
	[
		'#forge:waxes',
		'8x minecraft:string'
	]
)
event.remove({ id: 'quark:automation/crafting/gravisand' })
event.shapeless(
	Item.of('8x quark:gravisand'),
	[
		'#forge:dusts/ender_pearl',
		'8x #forge:sand'
	]
)

event.shapeless(
	Item.of('1x quark:rope'),
	[
		'#forge:waxes',
		'2x minecraft:string'
	]
)

event.shapeless(
	Item.of('1x quark:rope'),
	[
		'#forge:ropes'
	]
)

})
