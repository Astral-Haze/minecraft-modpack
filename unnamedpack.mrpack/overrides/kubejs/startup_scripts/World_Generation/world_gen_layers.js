GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('bee_volcanic')
        .targets('#deepslate_ore_replaceables', '#stone_ore_replaceables', 'minecraft:gravel') // [*] 
        .dimensions('minecraft:overworld', 'minecraft:the_nether', 'twilightforest:twilight_forest') // [*]
    event.create('bee_soil')
        .targets('#minecraft:dirt', '#minecraft:sand', 'minecraft:gravel', 'minecraft:suspicious_gravel') // [*] 
        .dimensions('minecraft:overworld', 'minecraft:the_nether', 'twilightforest:twilight_forest') // [*]
})