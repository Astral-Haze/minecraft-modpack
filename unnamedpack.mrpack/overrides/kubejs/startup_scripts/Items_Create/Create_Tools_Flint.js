// Listen to item registry event
StartupEvents.registry('item', e => {
  e.create('shovel_flint', 'shovel')
   .tier('wood')
   .displayName("Flint Shovel")
   .modifyTier((tier) => {
    tier.setRepairIngredient(
      Ingredient.custom((item) => {
        if (item.id == "minecraft:flint") return true;
        return false;
      })
    );
  });
})

StartupEvents.registry('item', e => {
  e.create('pickaxe_flint', 'pickaxe')
   .tier('wood')
   .displayName("Flint Pickaxe")
   .modifyTier((tier) => {
    tier.setRepairIngredient(
      Ingredient.custom((item) => {
        if (item.id == "minecraft:flint") return true;
        return false;
      })
    );
  });
})

StartupEvents.registry('item', e => {
  e.create('axe_flint', 'axe')
   .tier('wood')
   .displayName("Flint Axe")
   .modifyTier((tier) => {
    tier.setRepairIngredient(
      Ingredient.custom((item) => {
        if (item.id == "minecraft:flint") return true;
        return false;
      })
    );
  });
})

StartupEvents.registry('item', e => {
  e.create('hoe_flint', 'hoe')
   .tier('wood')
   .displayName("Flint Hoe")
   .modifyTier((tier) => {
    tier.setRepairIngredient(
      Ingredient.custom((item) => {
        if (item.id == "minecraft:flint") return true;
        return false;
      })
    );
  });
})

StartupEvents.registry('item', e => {
  e.create('sword_flint', 'sword')
   .tier('wood')
   .displayName("Flint Sword")
   .modifyTier((tier) => {
    tier.setRepairIngredient(
      Ingredient.custom((item) => {
        if (item.id == "minecraft:flint") return true;
        return false;
      })
    );
  });
})
