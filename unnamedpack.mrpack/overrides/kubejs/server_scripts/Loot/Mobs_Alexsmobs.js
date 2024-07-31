LootJS.modifiers((event) => {
    //Crow drop raven feather
    event
        .addEntityLootModifier("alexsmobs:crow")
        .removeLoot("minecraft:feather")
        .addWeightedLoot(
            [0, 1],
            [LootEntry.of("twilightforest:raven_feather")]);


//


});