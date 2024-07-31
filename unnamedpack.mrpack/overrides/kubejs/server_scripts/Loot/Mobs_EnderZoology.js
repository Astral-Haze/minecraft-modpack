LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("enderzoology:wither_witch")
        .addWeightedLoot(
            [1, 3],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("porkchop"), (f) => {
            f.smeltLoot();
        });
});