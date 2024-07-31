// Listen to item registry event
StartupEvents.registry('item', e => {
// Azure Neodymium
   e.create('azure_neodymium_nugget').displayName("Azure Neodymium Nugget")
   e.create('azure_neodymium_dust').displayName("Azure Neodymium Dust")
   e.create('small_azure_neodymium_dust').displayName("Small Pile of Azure Neodymium Dust")
   e.create('azure_neodymium_plate').displayName("Azure Neodymium Plate")
   e.create('azure_neodymium_rod').displayName("Azure Neodymium Rod")
}) 