onEvent('recipes',event => {
        //泥土变腐肉 木棍变火把
    event.shapeless('minecraft:rotten_flesh','minecraft:dirt')
    event.shapeless('minecraft:torch','minecraft:stick')
        //删除平底锅 大锅
    event.remove({output:'farmersdelight:cooking_pot'})
    event.remove({output:'farmersdelight:skillet'})
        //删除烟熏炉 高炉
    event.remove({output:'minecraft:smoker'})
    event.shaped('smoker',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'cobblestone',
        B:'campfire'
    })
    event.remove({output:'minecraft:blast_furnace'})
    event.shaped('blast_furnace',[
        'AAA',
        'A A',
        'AAA'
    ],{
        A:'deepslate'
    })
        //修改泥土 沙子 沙砾 尘土 筛网配方
    event.remove({input:'minecraft:dirt',type:'exnihilosequentia:sieve'})
    event.recipes.exnihilosequentia.sieve('minecraft:dirt','exnihilosequentia:stone_pebble')
        .addRoll(0.60,'string')
        .addRoll(0.45,'flint')
    event.recipes.exnihilosequentia.sieve('minecraft:dirt','exnihilosequentia:andesite_pebble')
        .addRoll(0.60,'string')
        .addRoll(0.45,'flint')
    event.recipes.exnihilosequentia.sieve('minecraft:dirt','minecraft:wheat_seeds')
        .addRoll(0.20,'string')
        //.addRoll(0.45,'flint')   
    event.recipes.exnihilosequentia.sieve('minecraft:dirt','supplementaries:flax_seeds')
        .addRoll(0.20,'string')
        //.addRoll(0.45,'flint')   
    event.remove({input:'minecraft:sand',type:'exnihilosequentia:sieve'})
    event.remove({input:'exnihilosequentia:dust',type:'exnihilosequentia:sieve'})
    event.remove({input:'minecraft:gravel',type:'exnihilosequentia:sieve'})
    event.recipes.exnihilosequentia.sieve('minecraft:sand','minecraft:kelp')
        .addRoll(0.55,'string')  
    event.recipes.exnihilosequentia.sieve('minecraft:sand','minecraft:sea_pickle')
        .addRoll(0.55,'string')          
    event.recipes.exnihilosequentia.sieve('minecraft:gravel','exnihilosequentia:iron_pieces')
        .addRoll(0.45,'string')
        .addRoll(0.55,'flint')  
        .addRoll(0.75,'iron') 
    /*event.recipes.exnihilosequentia.sieve('minecraft:gravel','exnihilosequentia:gold_pieces')
        .addRoll(0.45,'string')
        .addRoll(0.55,'flint')          
    event.recipes.exnihilosequentia.sieve('minecraft:gravel','exnihilosequentia:copper_pieces')
        .addRoll(0.45,'string')
        .addRoll(0.55,'flint')  
    event.recipes.exnihilosequentia.sieve('minecraft:gravel','exnihilosequentia:zinc_pieces')
        .addRoll(0.45,'string')
        .addRoll(0.55,'flint')*/  
    event.recipes.exnihilosequentia.sieve('minecraft:gravel','minecraft:flint')    
        .addRoll(0.65,'string')
        .addRoll(0.75,'flint')
        .addRoll(0.85,'iron') 
        //去除高级筛网      
    event.remove({output:'exnihilosequentia:diamond_mesh'})  
    event.remove({output:'exnihilosequentia:emerald_mesh'})  
    event.remove({output:'exnihilosequentia:netherite_mesh'})     
        //去除尘土变粘土
    event.remove({output:'minecraft:clay',type:('exnihilosequentia:fluid_item')})
        //去除打火机
    event.remove({output:'minecraft:flint_and_steel'})
        //修改木炭路线
    event.remove({output:'minecraft:charcoal',type:'minecraft:smelting'})
    event.blasting('minecraft:charcoal','#minecraft:logs')
        //修改刷石机配方
    event.remove({output:'cobblefordays:tier_1'})
    event.shaped('cobblefordays:tier_1',[
            'ABA',
            'C C',
            'ABA'
    ],{
        A:'minecraft:oak_log',
        B:'minecraft:cobblestone',
        C:'minecraft:flint'
    })
        //修改骨头 鸡蛋配方
    event.shaped('minecraft:bone',[
            ' A ',
            'ABA',
            ' A '
    ],{
        A:'minecraft:cobblestone',
        B:'minecraft:rotten_flesh'
    })
    event.shaped('minecraft:egg',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        B:'minecraft:wheat',
        A:'minecraft:bone'
    })
        //修改熔炉配方
    event.remove({output:'minecraft:furnace'})
    event.shaped('minecraft:furnace',[
        'ACA',
        'C C',
        'ACA'
    ],{
        A:'minecraft:cobblestone',
        C:'create:andesite_casing'
    })
        //修改安山合金配方
    event.remove({output:'create:andesite_alloy'})
    event.shaped('2x create:andesite_alloy',[
        'AB',
        'BA'
    ],{
        A:'exnihilosequentia:crushed_andesite',
        B:'minecraft:flint'
    })
        //修改煎蛋配方
    event.remove({output:'farmersdelight:fried_egg',type:'minecraft:smelting'})
    event.shapeless('9x create:andesite_alloy','create:andesite_alloy_block')
    event.recipes.createPressing('minecraft:rotten_flesh','minecraft:dirt')
    event.recipes.createPressing('exnihilosequentia:crushed_andesite','minecraft:andesite')
    event.recipes.createPressing('minecraft:gravel','minecraft:cobblestone')
    event.recipes.createMilling(['2x minecraft:clay_ball',Item.of('minecraft:clay_ball').withChance(0.25)],'exnihilosequentia:dust')
    event.recipes.createPressing('minecraft:sand','minecraft:gravel')
    event.recipes.createPressing('exnihilosequentia:dust','minecraft:sand')
    event.recipes.createCompacting('2x create:andesite_alloy',['3x minecraft:flint','exnihilosequentia:crushed_andesite'])
    event.recipes.createCompacting('minecraft:egg',['minecraft:wheat','8x minecraft:bone'])
    event.recipes.createCompacting('minecraft:bone',['2x minecraft:cobblestone','minecraft:rotten_flesh'])
    event.recipes.createCompacting('minecraft:dirt','2x minecraft:cactus')
    event.recipes.createCompacting(Fluid.of('minecraft:water',500),'4x minecraft:bamboo')
    event.remove({output:'exnihilosequentia:crafting_doll'})
    event.remove({input:'exnihilosequentia:crafting_doll'})
    event.recipes.exnihilosequentia.sieve('minecraft:coarse_dirt','minecraft:dirt')
    .addRoll(1,'string')
    .addRoll(0.8,'flint')
    .addRoll(0.6,'iron')
    event.remove({type:'exnihilosequentia:sieve'})
    event.recipes.exnihilosequentia.heat('create:blaze_burner',1,{"blaze":"smouldering"})
    event.recipes.exnihilosequentia.heat('create:blaze_burner',7,{"blaze":"kindled"})
    event.recipes.exnihilosequentia.heat('create:blaze_burner',7,{"blaze":"fading"})
    event.recipes.exnihilosequentia.heat('create:blaze_burner',15,{"blaze":"seething"})

    event.remove({output:'create:wrench'})
    event.shaped('create:wrench',[
        'A',
        'A',
        'A'
    ],{
        A:'stick'
    })
    event.remove({input:'andesite',type:'create:milling'})
    event.recipes.createMilling(['exnihilosequentia:crushed_andesite',Item.of('exnihilosequentia:crushed_andesite').withChance(0.4)],'andesite')
    event.recipes.createCrushing(['exnihilosequentia:crushed_andesite',Item.of('exnihilosequentia:crushed_andesite').withChance(0.7),Item.of('exnihilosequentia:crushed_andesite').withChance(0.4)],'andesite')

    event.recipes.createMilling(['exnihilosequentia:dust',Item.of('exnihilosequentia:dust').withChance(0.4)],'sand')
    event.recipes.createCrushing(['exnihilosequentia:dust',Item.of('exnihilosequentia:dust').withChance(0.7),Item.of('exnihilosequentia:dust').withChance(0.4)],'sand')

    event.recipes.createSplashing(Item.of('clay_ball').withChance(0.4),'exnihilosequentia:dust')
    event.remove({output:'create:goggles'})
    event.shaped('create:goggles',[
        'AAA'
    ],{
        A:'stick'
    })
})
