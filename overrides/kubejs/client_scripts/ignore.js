onEvent('jei.hide.items',event=>{
    event.hide('minecraft:smoker')
    event.hide('minecraft:blast_furnace')
    event.hide('exnihilosequentia:diamond_mesh')
    //event.hide('exnihilosequentia:emerald_mesh')
    event.hide('exnihilosequentia:netherite_mesh')
    event.hide('farmersdelight:skillet')
    event.hide('farmersdelight:flint_knife')
    event.hide('exnihilosequentia:crafting_doll')
    event.hide('pipez:energy_pipe')
    event.hide('pipez:gas_pipe')
    event.hide('ironchest:crystal_chest')
    event.hide('ironchest:trapped_crystal_chest')
    event.hide('ironchest:diamond_to_crystal_chest_upgrade')
})
onEvent('jei.remove.recipes',event=>{
    event.remove('create:mystery_conversion','create:conversion_0')
})