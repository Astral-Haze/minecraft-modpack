//requires: farmersdelight
LootJS.modifiers((event) => {
function CutFoliage(Foliage) {
    event
        .addBlockLootModifier(Foliage).addLoot(
			LootEntry.of(Foliage).when((c) => c.randomChance(0.25)).when((c) => c.matchMainHand('#forge:tools/knives'))
		)
}
CutFoliage(Ingredient.of("#minecraft:mineable_knife").itemIds.forEach(CutFoliage))
});
//#regions_unexplored:grass