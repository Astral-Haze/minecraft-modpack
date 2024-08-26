//requires: farmersdelight
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:cat")
        .addWeightedLoot(
            [1, 2],
            [LootEntry.of("farmersdelight:chicken_cuts")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("farmersdelight:chicken_cuts"), (f) => {
            f.smeltLoot();
        });
   event
        .addEntityLootModifier("minecraft:ocelot")
        .addWeightedLoot(
            [1, 2],
            [LootEntry.of("farmersdelight:chicken_cuts")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("farmersdelight:chicken_cuts"), (f) => {
            f.smeltLoot();
        });
});