LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:player")
        .addWeightedLoot(
            [1, 3],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("porkchop"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("minecraft:villager")
        .addWeightedLoot(
            [1, 3],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("porkchop"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("minecraft:pillager")
        .addWeightedLoot(
            [1, 3],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("porkchop"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("minecraft:evoker")
        .addWeightedLoot(
            [1, 3],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("porkchop"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("minecraft:vindicator")
        .addWeightedLoot(
            [1, 3],
            [LootEntry.of("minecraft:porkchop")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("porkchop"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("minecraft:witch")
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