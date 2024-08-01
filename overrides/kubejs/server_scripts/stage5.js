onEvent('recipes',event=>{
    event.remove({output:'minecraft:netherrack',type:'exnihilosequentia:fluid_item'})
    //地狱
    event.recipes.createCompacting('minecraft:netherrack',[
        'minecraft:tube_coral',
        'minecraft:brain_coral',
        'minecraft:bubble_coral',
        'minecraft:fire_coral',
        'minecraft:horn_coral',
        'minecraft:cobblestone'
    ]).heated()
    //event.replaceInput({output:'create:cinder_flour'},'netherrack','exnihilosequentia:crushed_netherrack')
    event.remove({output:'create:cinder_flour'})
    event.recipes.createMilling('create:cinder_flour','exnihilosequentia:crushed_netherrack')
    event.recipes.createCrushing(['create:cinder_flour',Item.of('create:cinder_flour').withChance(0.5)],'exnihilosequentia:crushed_netherrack')
    event.recipes.createCompacting('netherrack',['deepslate',Fluid.of('lava',200)]).superheated()
    event.remove({output:'exnihilosequentia:witch_water'})
    event.remove({type:'exnihilosequentia:fluid_item'})
    event.recipes.createMixing([
        Item.of('minecraft:netherrack').withChance(0.95),
        Fluid.of('exnihilosequentia:witch_water',1000)
    ],[
        'minecraft:netherrack',
        Fluid.of('minecraft:water',1000)
    ]).heated()
    event.recipes.createCompacting([
        Item.of('minecraft:red_mushroom').withChance(0.3),
        Item.of('minecraft:brown_mushroom').withChance(0.3)
    ],[
        Fluid.of('exnihilosequentia:witch_water',500),
        'minecraft:podzol'
    ]).heated()
    event.recipes.createCompacting([
        Item.of('farmersdelight:red_mushroom_colony').withChance(0.3),
        Item.of('farmersdelight:brown_mushroom_colony').withChance(0.3)
    ],[
        Fluid.of('exnihilosequentia:witch_water',500),
        'minecraft:podzol'
    ]).superheated()
    //灵魂
    event.remove({input:'soul_sand',type:'exnihilosequentia:sieve'})
    event.recipes.createHaunting('minecraft:jungle_log','#minecraft:logs')
    event.recipes.createMixing('minecraft:soul_sand',['minecraft:sand','create:cinder_flour',Fluid.of('exnihilosequentia:witch_water',500)]).heated()
    event.recipes.createMixing('minecraft:mycelium',['create:cinder_flour','minecraft:soul_soil','minecraft:red_mushroom','minecraft:brown_mushroom']).heated()
    event.recipes.createMixing([
        Item.of('minecraft:nether_wart').withChance(0.3),
        Item.of('minecraft:cocoa_beans').withChance(0.3)
    ],['minecraft:mycelium',Fluid.of('exnihilosequentia:witch_water',500)]).heated()
        event.recipes.createCompacting([
            Item.of('exnihilosequentia:sweet_berry_seeds').withChance(0.15),
            Item.of('minecraft:twisting_vines').withChance(0.15),
            Item.of('minecraft:weeping_vines').withChance(0.15),
            Item.of('minecraft:nether_wart').withChance(0.8)
        ],'minecraft:nether_wart')
    //烈焰蛋糕
    event.recipes.createFilling('experience_bottle',['glass_bottle',Fluid.of('kubejs:happywater',50)])
    event.remove({input:'exnihilosequentia:crushed_netherrack'})
    event.remove({output:'create:blaze_cake_base'})
    event.recipes.createMixing('create:blaze_cake_base',[
        'minecraft:egg',
        '2x minecraft:sugar',
        '4x create:cinder_flour',
        Fluid.of('create:chocolate',200)
    ]).heated()
    event.recipes.createMixing(Fluid.of('create:honey',250),[Fluid.of('minecraft:water',500),'4x minecraft:sugar']).superheated()
    event.remove({type:'exnihilosequentia:fluid_on_top'})
    event.recipes.createCompacting('4x minecraft:obsidian',['minecraft:netherrack',Fluid.of('minecraft:lava',1000)]).superheated()
    event.recipes.createCompacting('minecraft:glowstone_dust',['create:powdered_obsidian',Fluid.of('minecraft:lava',100)]).superheated()
    event.recipes.createCompacting('minecraft:blaze_rod',['minecraft:glowstone_dust','create:powdered_obsidian']).superheated()
    event.remove({output:'glowstone_dust',input:"prismarine_crystals"})
    event.remove({output:'diamond_pickaxe'})
    event.recipes.createMechanicalCrafting('diamond_pickaxe',[
        ' ABD',
        '  CB',
        ' C A',
        'C   ',
    ],{
        A:'minecraft:diamond',
        B:'create:powdered_obsidian',
        C:'minecraft:blaze_rod',
        D:'minecraft:obsidian'
    })
    event.remove({output:'minecraft:glowstone_dust',type:'create:filling'})
    event.recipes.createMixing(Fluid.of('kubejs:happywater',150),[Fluid.of('create:honey',250),Fluid.of('create:chocolate',250)]).superheated()
    event.recipes.createMixing(Fluid.of('kubejs:happywater',500),[Fluid.of('kubejs:happywater',250),Fluid.of('create_central_kitchen:dragon_breath',250),'4x sugar']).superheated()
    //谜之火腿
    event.remove({output:'farmersdelight:honey_glazed_ham_block'})
    event.recipes.createSequencedAssembly('farmersdelight:honey_glazed_ham_block','minecraft:bowl',[
        event.recipes.createDeploying('kubejs:incomplete_ham',['kubejs:incomplete_ham','minecraft:baked_potato']),
        event.recipes.createDeploying('kubejs:incomplete_ham',['kubejs:incomplete_ham','farmersdelight:cooked_rice']),
        event.recipes.createDeploying('kubejs:incomplete_ham',['kubejs:incomplete_ham','minecraft:glow_berries']),
        event.recipes.createDeploying('kubejs:incomplete_ham',['kubejs:incomplete_ham','farmersdelight:smoked_ham']),
        event.recipes.createDeploying('kubejs:incomplete_ham',['kubejs:incomplete_ham','create:chocolate_glazed_berries']),
        event.recipes.createFilling('kubejs:incomplete_ham',['kubejs:incomplete_ham',Fluid.of('create:honey',100)]),
    ])
    .transitionalItem('kubejs:incomplete_ham')
    .loops(1)
    /*
    event.recipes.createDeploying([
        Item.of('create:powdered_obsidian').withChance(0.2),
        Item.of('minecraft:obsidian').withChance(0.9)
    ],['minecraft:obsidian',Item.of('minecraft:netherite_pickaxe').ignoreNBT()])
    .damageIngredient(Item.of('minecraft:netherite_pickaxe').ignoreNBT())
    event.recipes.createDeploying([
        Item.of('create:powdered_obsidian').withChance(0.3),
        Item.of('minecraft:obsidian').withChance(0.85)
    ],['minecraft:obsidian',Item.of('minecraft:diamond_pickaxe').ignoreNBT()])
    .damageIngredient(Item.of('minecraft:diamond_pickaxe').ignoreNBT())
    */
    event.recipes.createFilling('exnihilosequentia:potato_seeds',['create:powdered_obsidian',Fluid.of('minecraft:water',200)])
    event.recipes.createCompacting('magma_block',['minecraft:netherrack','minecraft:glowstone_dust',Fluid.of('lava',750)])
    /*
    event.recipes.createCompacting([
        Item.of('minecraft:obsidian'),
        Item.of('minecraft:obsidian').withChance(0.2)
    ],[Item.of('minecraft:netherite_pickaxe').ignoreNBT(),Fluid.of('lava',1000),Fluid.of('water',1000)])
    .damageIngredient(Item.of('minecraft:netherite_pickaxe').ignoreNBT())
    event.recipes.createCompacting([
        Item.of('minecraft:obsidian')
    ],[Item.of('minecraft:diamond_pickaxe').ignoreNBT(),Fluid.of('lava',1000),Fluid.of('water',1000)])
    .damageIngredient(Item.of('minecraft:diamond_pickaxe').ignoreNBT())
    */
    event.recipes.createDeploying(Item.of('minecraft:netherite_pickaxe'),[Item.of('minecraft:diamond_pickaxe'),'netherite_ingot'])
    //event.remove({output:'create:mechanical_drill'})
    event.replaceInput({output:'create:mechanical_drill'},'create:andesite_casing','deepslate')
    event.replaceInput({output:'create:mechanical_plough'},'create:andesite_casing','deepslate')
    event.recipes.createMechanicalCrafting('kubejs:super_driller',[
        'FAABB',
        '  CGB',
        'EEDCA',
        'EDE A',
        'EEE F'
    ],{
        A:'obsidian',
        B:'diamond',
        C:Item.of('diamond_pickaxe').ignoreNBT(),
        D:'create:andesite_alloy',
        E:'cobblestone',
        F:'blaze_powder',
        G:Item.of('netherite_pickaxe').ignoreNBT()
    })
    event.recipes.createDeploying([
        Item.of('minecraft:netherite_scrap').withChance(0.2),
        Item.of('minecraft:netherite_ingot').withChance(0.1),
        Item.of('minecraft:diamond').withChance(0.5)
    ],['obsidian','kubejs:super_driller']).keepHeldItem()

    event.remove({output:'red_nether_bricks'})
    event.shapeless('red_nether_bricks','4x nether_wart')
    event.shapeless('4x nether_wart','red_nether_bricks')
})