LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:armored_giant")
        .addWeightedLoot(
            [3, 12],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("minecraft:porkchop"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("twilightforest:giant_miner")
        .addWeightedLoot(
            [3, 12],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("minecraft:porkchop"), (f) => {
            f.smeltLoot();
        });
});