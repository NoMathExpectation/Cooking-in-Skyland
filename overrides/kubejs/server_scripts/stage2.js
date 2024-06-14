onEvent("recipes",event=>{
    //垃圾桶
    event.replaceInput({output:'trashcans:energy_trash_can'},'minecraft:stone','minecraft:tuff')
    event.replaceInput({output:'trashcans:item_trash_can'},'minecraft:stone','minecraft:tuff')
    event.replaceInput({output:'trashcans:liquid_trash_can'},'minecraft:stone','minecraft:tuff')
    //煮米饭
    event.remove({output:"farmersdelight:cooked_rice"})
    event.smoking('farmersdelight:cooked_rice','kubejs:uncooked_rice')
    //生米饭合成
    event.recipes.createMixing('kubejs:uncooked_rice',['farmersdelight:rice','minecraft:bowl',Fluid.of('minecraft:water',100)])
    //冷米饭合成
    event.recipes.createSplashing('kubejs:cold_rice','farmersdelight:cooked_rice')
    event.smoking('farmersdelight:cooked_rice','kubejs:cold_rice')
    //凝灰岩与深板岩部分
    event.remove({input:'tuff',type:'create:crushing'})
    event.blasting('minecraft:tuff','exnihilosequentia:crushed_andesite')
    event.blasting('minecraft:cobbled_deepslate','minecraft:tuff')
    event.remove({output:'minecraft:deepslate'})
    event.blasting('minecraft:deepslate','minecraft:cobbled_deepslate')
    event.recipes.createCompacting('deepslate',['cobblestone','copper_ingot','create:zinc_ingot']).heated()
    event.remove({output:'create:basin'})
    event.shaped('create:basin',[
        'A A',
        'A A',
        'AAA'
    ],{
        A:'minecraft:deepslate'
    })
    event.recipes.exnihilosequentia.sieve('minecraft:cobbled_deepslate','farmersdelight:rice_panicle')
        .addRoll(0.05,'string')
    event.recipes.exnihilosequentia.sieve('minecraft:cobbled_deepslate','exnihilosequentia:iron_pieces')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint') 
        .addRoll(0.80,'iron')           
    event.recipes.exnihilosequentia.sieve('minecraft:cobbled_deepslate','exnihilosequentia:copper_pieces')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')
        .addRoll(0.80,'iron') 
    //event.recipes.createFilling('minecraft:cobbled_deepslate',[Fluid.of('minecraft:lava',500),'minecraft:stone'])
    //工作盆部分
    event.remove({output:'create:whisk'})
    event.recipes.createCompacting('create:whisk',['create:andesite_alloy','4x create:iron_sheet'])                      
    event.remove({output:'create:mechanical_bearing'})
    event.shaped('create:mechanical_bearing',[
        ' A ',
        ' B ',
        ' C '
    ],{
        A:'#minecraft:wooden_slabs',
        B:'minecraft:deepslate',
        C:'create:shaft'
    })
    event.remove({output:"create:chute"})
    event.recipes.createCompacting('4x create:chute',['create:iron_sheet','iron_ingot'])  
    event.remove({output:'create:mechanical_saw'})
    event.shaped('create:mechanical_saw',[
        ' C ',
        'CAC',
        ' B '
    ],{
        A:'minecraft:iron_ingot',
        B:'minecraft:deepslate',
        C:'create:iron_sheet'
    })
    event.remove({output:'create:mechanical_harvester'})
    event.shaped('create:mechanical_harvester',[
        'BAB',
        'BAB',
        ' C '
    ],{
        A:'create:iron_sheet',
        B:'create:andesite_alloy',
        C:'minecraft:deepslate'
    })
    event.remove({output:'create:millstone'})
    event.shaped('create:millstone',[
        '   ',
        'CAC',
        'BBB'
    ],{
        A:'create:cogwheel',
        B:'minecraft:cobblestone',
        C:'minecraft:deepslate'
    })
    event.remove({input:'farmersdelight:rice_panicle'})
    event.recipes.createMilling('farmersdelight:rice','farmersdelight:rice_panicle')
    //流体设备部分
    event.remove({output:"create:fluid_pipe"})
    event.recipes.createCompacting('8x create:fluid_pipe',"2x create:copper_sheet")             
    event.remove({output:"create:fluid_tank"})
    event.shaped('4x create:fluid_tank',[
        'BAB',
        'B B',
        'BBB'
    ],{
        A:'create:fluid_pipe',
        B:'create:copper_sheet',
    })
    event.remove({output:"create:fluid_valve"})
    event.recipes.createCompacting('create:fluid_valve',["create:fluid_pipe",'create:iron_sheet'])             
    event.replaceInput({output:'create:spout'},'create:copper_casing','create:fluid_tank')
    event.replaceInput({output:'create:item_drain'},'create:copper_casing','create:fluid_tank')   
    //动力部分
    event.remove({output:'create:sail_frame'})
    event.remove({output:'create:white_sail'})
    event.shaped('8x create:sail_frame',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'stick',
        B:'create:andesite_alloy'
    })
    event.shaped('8x create:white_sail',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'create:sail_frame',
        B:'#minecraft:wool'
    })

    event.remove({output:'create:water_wheel'})
    event.remove({output:'create:large_water_wheel'})
    event.remove({output:'create:windmill_bearing'})
    event.shaped('create:water_wheel',[
        'ABA',
        'DCD',
        'ABA'
    ],{
        A:'#minecraft:planks',
        B:'minecraft:deepslate',
        C:'create:shaft',
        D:'cobblestone'
    })
    
    event.shaped('create:large_water_wheel',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'#minecraft:planks',
        B:'cobblestone',
        C:'create:water_wheel'
    })

    event.shaped('create:windmill_bearing',[
        'AAA',
        ' B ',
        ' C '
    ],{
        A:'#minecraft:wooden_slabs',
        B:'create:water_wheel',
        C:'create:shaft'
    })
    //食用油部分
    event.recipes.createCompacting(Fluid.of('kubejs:oil',500),'5x #forge:seeds')
        .id('oil:1')
    event.recipes.createCompacting(Fluid.of('kubejs:oil',500),'3x #forge:seeds')
        .heated()
        .id('oil:2')
    event.recipes.createCompacting(Fluid.of('kubejs:oil',1000),'#forge:seeds')
        .superheated()
        .id('oil:3')
        /*
    event.recipes.createCompacting(Fluid.of('kubejs:oil',50),'#minecraft:flowers')
    event.recipes.createCompacting(Fluid.of('kubejs:oil',200),'#minecraft:flowers')
            .heated()
    event.recipes.createCompacting(Fluid.of('kubejs:oil',500),'#minecraft:flowers')
            .superheated()*/
    //草方块部分
    event.remove({output:"dirt_path"})
    event.recipes.createPressing('dirt_path','minecraft:grass_block')
    event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','exnihilosequentia:cactus_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')
    event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','exnihilosequentia:sugarcane_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')  
    event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','exnihilosequentia:carrot_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint') 
    /*event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','exnihilosequentia:potato_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')
    event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','exnihilosequentia:sweet_berry_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')*/ 
    event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','exnihilosequentia:bamboo_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint') 
    event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','farmersdelight:onion')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')
        event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','pumpkin_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')     
        event.recipes.exnihilosequentia.sieve('minecraft:dirt_path','melon_seeds')
        .addRoll(0.60,'string')
        .addRoll(0.70,'flint')                  
    //炒饭部分
    event.replaceInput({output:'farmersdelight:fried_rice'},'egg','farmersdelight:fried_egg')
    event.recipes.createMixing('farmersdelight:fried_rice',[Fluid.of('kubejs:oil',200),'kubejs:cold_rice','farmersdelight:fried_egg','minecraft:carrot','farmersdelight:onion'])    
    //铁筛网
    event.remove({output:'exnihilosequentia:iron_mesh'})
    event.recipes.createCompacting('exnihilosequentia:iron_mesh',['6x create:iron_sheet','exnihilosequentia:flint_mesh'])
    event.remove({output:'create:super_glue'})
    event.recipes.createMixing('create:super_glue',[
        'create:iron_sheet',
        '2x create:wheat_flour',
        '2x minecraft:lime_dye',
        Fluid.of('minecraft:water',1000)
    ])
    //event.remove({})
    event.remove({input:'sugar_cane',type:'create:crushing'})
    event.recipes.createCrushing(['4x sugar',Item.of('sugar').withChance(0.6),Item.of('sugar').withChance(0.3)],'sugar_cane')
})
    //吃冷米饭返回碗
onEvent('item.food_eaten',event=>{
    if(event.item.id=='kubejs:cold_rice'){
        event.player.giveInHand('minecraft:bowl')
    }
})    