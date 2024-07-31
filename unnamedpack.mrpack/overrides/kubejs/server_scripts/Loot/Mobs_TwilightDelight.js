LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:silverfish")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_silverfish")})
        })
        .addWeightedLoot(
            [0, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("minecraft:shulker")
        .addWeightedLoot(
            [0, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("twilightforest:fire_beetle")
        .addWeightedLoot(
            [1, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        });
    event
        .addEntityLootModifier("twilightforest:slime_beetle")
        .addWeightedLoot(
            [1, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("twilightforest:towerwood_borer")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_silverfish")})
        })
        .addWeightedLoot(
            [0, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("alexsmobs:cockroach")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_cockroach")})
        })
        .addWeightedLoot(
            [0, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("alexsmobs:fly")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_fly")})
        })
        .addWeightedLoot(
            [0, 1],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("alexsmobs:tarantula_hawk")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_tarantula_hawk")})
        })
        .addWeightedLoot(
            [2, 3],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("alexsmobs:crimson_mosquito")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_mosquito")})
        })
        .addWeightedLoot(
            [0, 2],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("alexsmobs:warped_mosco")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_mosquito")})
        })
        .addWeightedLoot(
            [3, 7],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
    event
        .addEntityLootModifier("alexcaves:gloomoth")
		.not((n) => {
			n.matchKiller((builder) => {builder.anyType("#astral:eats_gloomoth")})
        })
        .addWeightedLoot(
            [2, 3],
            [LootEntry.of("twilightdelight:raw_insect")])
        .matchEntity((entity) => {
            entity.isOnFire(true);
        })
        .functions(Item.of("twilightdelight:raw_insect"), (f) => {
            f.smeltLoot();
        });
});