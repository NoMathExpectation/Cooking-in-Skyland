onEvent('recipes',event=>{
    //黑石(不是黑丝)
    event.recipes.createSequencedAssembly('minecraft:blackstone',
    'minecraft:deepslate',[
        event.recipes.createCutting('kubejs:incomplete_blackstone','kubejs:incomplete_blackstone'),
        event.recipes.createFilling('kubejs:incomplete_blackstone',['kubejs:incomplete_blackstone',Fluid.of('minecraft:lava',250)]),
        event.recipes.createPressing('kubejs:incomplete_blackstone','kubejs:incomplete_blackstone')
    ])
    .transitionalItem('kubejs:incomplete_blackstone')
    .loops(2)
    event.recipes.createSequencedAssembly('minecraft:gilded_blackstone',
    'minecraft:blackstone',[
        event.recipes.createFilling('kubejs:incomplete_gilded_blackstone',['kubejs:incomplete_gilded_blackstone',Fluid.of('minecraft:water',100)]),
        event.recipes.createFilling('kubejs:incomplete_gilded_blackstone',['kubejs:incomplete_gilded_blackstone',Fluid.of('minecraft:lava',100)]),
        event.recipes.createPressing('kubejs:incomplete_gilded_blackstone','kubejs:incomplete_gilded_blackstone')
    ])
    .transitionalItem('kubejs:incomplete_gilded_blackstone')
    .loops(1)
    //event.recipes.createCompacting('minecraft:gilded_blackstone',['minecraft:deepslate',Fluid.of('minecraft:lava',100)]).heated()
    event.recipes.exnihilosequentia.sieve('minecraft:gilded_blackstone','exnihilosequentia:gold_pieces')
        .addRoll(0.85,'iron')
    event.blasting('minecraft:basalt','minecraft:gilded_blackstone')
    event.recipes.createMilling([
        Item.of('2x minecraft:redstone'),
        Item.of('2x minecraft:quartz').withChance(0.125)
    ],'minecraft:gilded_blackstone')
    //金子
    event.remove({output:'create:item_vault'})
    event.recipes.createCompacting('create:item_vault',[
        '2x create:iron_sheet',
        '2x create:golden_sheet'
    ]).heated()
    //玫瑰石英
    event.recipes.createCompacting('2x create:polished_rose_quartz',[
        '8x minecraft:redstone',
        'minecraft:quartz'
    ]).heated()
    event.remove({output:'create:empty_blaze_burner'})
    event.shaped('create:empty_blaze_burner',[
        'A A',
        'B B',
        'CBC'
    ],{
        A:'create:rose_quartz',
        B:'minecraft:basalt',
        C:'create:polished_rose_quartz'
    })
    event.recipes.createCompacting([Item.of('lapis_lazuli').withChance(0.8),Item.of('emerald').withChance(0.8)],'basalt').heated()
    //烈焰火炉
    event.recipes.createCompacting('kubejs:firesword',[Fluid.of('kubejs:protein',200),'2x gold_block','2x create:brass_block','iron_block','8x gunpowder']).heated()
    event.shaped('minecraft:flint_and_steel',[
        'A ',
        ' B'
    ],{
        A:'minecraft:iron_ingot',
        B:'minecraft:basalt'
    })
    event.recipes.createMixing('3x minecraft:gunpowder',[
        'minecraft:sugar','minecraft:charcoal'
    ])
    event.recipes.createSequencedAssembly([
        Item.of('create:blaze_burner').withChance(0.15),
        Item.of("create:empty_blaze_burner").withChance(0.8),
        Item.of('3x minecraft:basalt').withChance(0.05)
    ],'create:empty_blaze_burner',[
        event.recipes.createDeploying('kubejs:incomplete_burner',['kubejs:incomplete_burner','minecraft:gunpowder']),
        event.recipes.createDeploying('kubejs:incomplete_burner',['kubejs:incomplete_burner',Item.of('minecraft:flint_and_steel').ignoreNBT()])
        .damageIngredient(Item.of('minecraft:flint_and_steel').ignoreNBT())
    ])
    .transitionalItem('kubejs:incomplete_burner')
    .loops(1)
    
    event.recipes.createSequencedAssembly([
        Item.of('create:blaze_burner').withChance(0.75),
        Item.of("create:empty_blaze_burner").withChance(0.2),
        Item.of('3x minecraft:basalt').withChance(0.05)
    ],'create:empty_blaze_burner',[
        event.recipes.createDeploying('kubejs:incomplete_burner',['kubejs:incomplete_burner','kubejs:firesword']).keepHeldItem(),
    ])
    .transitionalItem('kubejs:incomplete_burner')
    .loops(1)

    event.recipes.createSequencedAssembly('create:blaze_burner'
    ,'create:empty_blaze_burner',[
        event.recipes.createDeploying('kubejs:incomplete_burner',['kubejs:incomplete_burner','blaze_powder']),
        event.recipes.createDeploying('kubejs:incomplete_burner',['kubejs:incomplete_burner',Item.of('minecraft:flint_and_steel').ignoreNBT()])
        .damageIngredient(Item.of('minecraft:flint_and_steel').ignoreNBT())
    ])
    .transitionalItem('kubejs:incomplete_burner')
    .loops(1)
    //蛋白质
    event.recipes.createMixing(Fluid.of('kubejs:protein',50),'farmersdelight:fried_egg').heated()
    event.recipes.createMixing(Fluid.of('kubejs:protein',50),'farmersdelight:fried_egg').superheated()
    event.recipes.createMixing(Fluid.of('kubejs:protein',250),'rotten_flesh').superheated()
    event.recipes.createMixing('minecraft:mutton',[
        Fluid.of('kubejs:protein',200),'2x minecraft:string'
    ]).heated()
    event.recipes.createMixing('minecraft:chicken',[
        Fluid.of('kubejs:protein',200),'2x minecraft:egg'
    ]).heated()
    event.recipes.createMixing('farmersdelight:ham',[
        'bone',Fluid.of('kubejs:protein',400),Fluid.of('kubejs:oil',100)
    ]).heated()
    event.recipes.createCompacting('minecraft:leather',
        Fluid.of('kubejs:protein',100)).heated()
    event.recipes.createMixing('minecraft:beef',[
        Fluid.of('kubejs:protein',100),'minecraft:leather'
    ]).heated()
    event.recipes.createCutting('4x rabbit_hide','leather')
    event.recipes.createMixing('rabbit',[
        Fluid.of('kubejs:protein',100),'rabbit_hide'
    ]).heated()
    event.recipes.createCompacting(Fluid.of('minecraft:milk',500),[
        Fluid.of('minecraft:water',250),Fluid.of('kubejs:protein',250),'minecraft:leather'
    ]).heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',200),[['mutton','chicken','beef','porkchop']]).heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',50),['chicken']).heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',100),[['farmersdelight:bacon','farmersdelight:mutton_chops','farmersdelight:minced_beef']]).heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',25),['farmersdelight:chicken_cuts']).heated()
    /*
    event.recipes.createCompacting(Fluid.of('kubejs:protein',200),'chicken').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',200),'beef').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',200),'porkchop').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',100),'farmersdelight:bacon').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',100),'farmersdelight:mutton_chops').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',100),'farmersdelight:minced_beef').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',100),'farmersdelight:chicken_cuts').heated()*/
    event.recipes.createCompacting(Fluid.of('kubejs:protein',250),'#minecraft:fishes').heated()
    event.recipes.createCompacting(Fluid.of('kubejs:protein',50),['exnihilosequentia:cooked_silkworm','exnihilosequentia:silkworm']).heated()
    //汉堡
    event.replaceInput('minecraft:bread','kubejs:undo_sandwich')
    event.custom({
        'type':'farmersdelight:cutting',
        'ingredients':[{'item':'minecraft:bread'}],
        'tool':{'tag':'farmersdelight:tools/knives'},
        'result':[{'item':'kubejs:undo_sandwich','count':1}]
})/*
    event.remove({output:'create:sweet_roll'})
    event.recipes.createFilling('create:sweet_roll',['minecraft:bread',Fluid.of('minecraft:milk',250)])*/
    event.remove({output:'farmersdelight:wheat_dough'})
    event.recipes.createMixing('3x farmersdelight:wheat_dough',[
        Fluid.of('minecraft:water',50),Fluid.of('milk',200),'2x minecraft:egg','4x create:wheat_flour','minecraft:sugar'
    ])
    event.remove({output:'minecraft:bread'})
    event.smoking('minecraft:bread','farmersdelight:wheat_dough')
    event.remove({output:'farmersdelight:hamburger'})
    event.recipes.createSequencedAssembly('farmersdelight:hamburger',
    'kubejs:undo_sandwich',[
        event.recipes.createDeploying('kubejs:incomplete_sandwich',['kubejs:incomplete_sandwich','farmersdelight:beef_patty']),
        event.recipes.createDeploying('kubejs:incomplete_sandwich',['kubejs:incomplete_sandwich','farmersdelight:cabbage_leaf']),
        event.recipes.createDeploying('kubejs:incomplete_sandwich',['kubejs:incomplete_sandwich','farmersdelight:tomato']),
        event.recipes.createDeploying('kubejs:incomplete_sandwich',['kubejs:incomplete_sandwich','farmersdelight:onion']),
        event.recipes.createDeploying('kubejs:incomplete_sandwich',['kubejs:incomplete_sandwich','farmersdelight:cooked_bacon']),
        event.recipes.createFilling('kubejs:incomplete_sandwich',['kubejs:incomplete_sandwich',Fluid.of('create_central_kitchen:tomato_sauce',100)])
    ])
    .transitionalItem('kubejs:incomplete_sandwich')
    .loops(1)
    //小刀
    event.remove({output:'farmersdelight:flint_knife'})
    event.remove({output:'farmersdelight:iron_knife'})
    event.shapeless('farmersdelight:iron_knife',['create:polished_rose_quartz','minecraft:iron_sword'])
    event.remove({output:'farmersdelight:golden_knife'})
    event.shapeless('farmersdelight:golden_knife',['create:polished_rose_quartz','minecraft:golden_sword'])
    event.remove({output:'farmersdelight:diamond_knife'})
    event.shapeless('farmersdelight:diamond_knife',['create:polished_rose_quartz','minecraft:diamond_sword'])
    event.remove({output:'farmersdelight:netherite_knife'})
    event.shapeless('farmersdelight:netherite_knife',['create:polished_rose_quartz','minecraft:netherite_sword'])
    event.remove({output:'farmersdelight:cutting_board'})
    event.shaped('farmersdelight:cutting_board',[
        '   ',
        'ACB',
        'ABC'
    ],{
        A:'minecraft:stick',
        B:'#minecraft:planks',
        C:'create:polished_rose_quartz'
    })
    event.remove({input:'minecraft:string',output:'minecraft:scaffolding'})
    event.recipes.createCompacting('minecraft:podzol',['minecraft:grass_block','farmersdelight:canvas'])
    event.recipes.createFilling('podzol',['grass_block',Fluid.of('exnihilosequentia:sea_water',100)])
    event.recipes.exnihilosequentia.sieve('minecraft:podzol','exnihilosequentia:zinc_pieces')
        .addRoll(1,'flint')
        .addRoll(0.85,'iron')  
    event.recipes.exnihilosequentia.sieve('minecraft:podzol','farmersdelight:tomato_seeds')
        .addRoll(0.55,'flint')
        .addRoll(0.75,'iron')
    event.recipes.exnihilosequentia.sieve('minecraft:podzol','beetroot_seeds')
        .addRoll(0.55,'flint')
        .addRoll(0.75,'iron')
    event.recipes.exnihilosequentia.sieve('minecraft:podzol','farmersdelight:cabbage_seeds')
        .addRoll(0.55,'flint')
        .addRoll(0.75,'iron')
    event.remove({output:'farmersdelight:cabbage_leaf',type:'create:mixing'}) 
    event.remove({type:'smelting',output:'farmersdelight:cooked_bacon'})   
    event.remove({type:'smelting',output:'farmersdelight:beef_patty'})   
    event.remove({type:'smelting',output:'#forge:meat_cooked'}) 
    event.remove({input:'farmersdelight:tomato',type:'create:mixing'})
    event.recipes.createMixing(Fluid.of('create_central_kitchen:tomato_sauce',250),['2x farmersdelight:tomato','minecraft:sugar']).heated()
    //矿物处理
    //event.recipes.createMixing('exnihilosequentia:iron_pieces',['minecraft:gravel',Fluid.of('minecraft:water',100)])
    event.recipes.createMixing('create:andesite_alloy',['minecraft:andesite',Fluid.of('minecraft:lava',100)]).heated()
    /*event.recipes.createMixing('exnihilosequentia:gold_pieces',['minecraft:gilded_blackstone',Fluid.of('minecraft:water',100)]).heated()
    event.recipes.createMixing('exnihilosequentia:zinc_pieces',['minecraft:podzol',Fluid.of('minecraft:water',100)]).heated()*/
    event.recipes.createCrushing(['farmersdelight:straw','2x farmersdelight:rice'],'farmersdelight:rice_panicle')
    event.recipes.createCrushing(['farmersdelight:straw','2x create:wheat_flour',Item.of('2x create:wheat_flour').withChance(0.45),Item.of('minecraft:wheat_seeds').withChance(0.25)],'minecraft:wheat')
    event.recipes.createCrushing(['8x minecraft:redstone','minecraft:quartz'],'minecraft:gilded_blackstone')
    //面团冲突BUG
    event.remove({output:'create:dough'})
    event.replaceInput({},'create:dough','farmersdelight:wheat_dough')
    //event.shapeless('minecraft:slime_ball',['create:wheat_flour','minecraft:water_bucket','minecraft:lime_dye']).replaceIngredient({item:Item.of('minecraft:potion',{potion:'minecraft:water'})},'minecraft:bucket')
    //event.recipes.createMixing('minecraft:flint',['minecraft:gravel',Fluid.of('minecraft:water',100)])
    //机械手
    event.shapeless('create:brass_nugget',['4x #forge:nuggets/copper','4x #forge:nuggets/zinc','gunpowder'])
    event.remove({output:'create:deployer'})
    event.shaped('create:deployer',[
        ' A ',
        ' B ',
        ' C '
    ],{
        A:'create:shaft',
        B:'create:andesite_casing',
        C:'create:brass_hand'
    })
    event.recipes.createMechanicalCrafting('elytra',[
        '  A  ',
        ' AAA ',
        'AA AA',
        ' B B ',
    ],{
        A:'leather',
        B:'create:propeller'
    })
    event.remove({output:'painting',input:'#minecraft:wool'})
})
