onEvent('recipes',event=>{/*
    event.recipes.createFilling('spruce_sapling',['oak_sapling',Fluid.of('water',100)])
    event.recipes.createFilling('birch_sapling',['spruce_sapling',Fluid.of('water',100)])
    event.recipes.createFilling('jungle_sapling',['birch_sapling',Fluid.of('water',100)])
    event.recipes.createFilling('acacia_sapling',['jungle_sapling',Fluid.of('water',100)])
    event.recipes.createFilling('dark_oak_sapling',['acacia_sapling',Fluid.of('water',100)])
    event.recipes.createFilling('azalea',['dark_oak_sapling',Fluid.of('water',100)])
    event.recipes.createFilling('flowering_azalea',['azalea',Fluid.of('water',100)])
    event.recipes.createFilling('oak_sapling',['flowering_azalea',Fluid.of('water',100)])
*/  event.recipes.createFilling('moss_block',['cobblestone',Fluid.of('water',250)])
    event.shapeless('4x create:tree_fertilizer',['2x bone_meal',['tube_coral','bubble_coral','brain_coral','fire_coral','horn_coral'],['tube_coral','bubble_coral','brain_coral','fire_coral','horn_coral']])
    
    event.remove({output:'globe_banner_pattern'})
    event.remove({output:'skull_banner_pattern'})
    event.remove({output:'flower_banner_pattern'})
    event.remove({output:'mojang_banner_pattern'})
    event.remove({output:'piglin_banner_pattern'})
    event.remove({output:"creeper_banner_pattern"})

    event.shapeless('coal','charcoal')
    event.shapeless('charcoal','coal')

    event.recipes.createCompacting('coal_ore',['coal','stone'])
    event.recipes.createCompacting('iron_ore',['iron_ingot','stone'])
    event.recipes.createCompacting('copper_ore',['copper_ingot','stone'])
    event.recipes.createCompacting('gold_ore',['gold_ingot','stone'])
    event.recipes.createCompacting('redstone_ore',['redstone','stone'])
    event.recipes.createCompacting('emerald_ore',['emerald','stone'])
    event.recipes.createCompacting('lapis_ore',['lapis_lazuli','stone'])
    event.recipes.createCompacting('diamond_ore',['diamond','stone'])

    event.recipes.createCompacting('deepslate_coal_ore',['coal','deepslate'])
    event.recipes.createCompacting('deepslate_iron_ore',['iron_ingot','deepslate'])
    event.recipes.createCompacting('deepslate_copper_ore',['copper_ingot','deepslate'])
    event.recipes.createCompacting('deepslate_gold_ore',['gold_ingot','deepslate'])
    event.recipes.createCompacting('deepslate_redstone_ore',['redstone','deepslate'])
    event.recipes.createCompacting('deepslate_emerald_ore',['emerald','deepslate'])
    event.recipes.createCompacting('deepslate_lapis_ore',['lapis_lazuli','deepslate'])
    event.recipes.createCompacting('deepslate_diamond_ore',['diamond','deepslate'])

    event.recipes.createCompacting('nether_gold_ore',['gold_ingot','netherrack'])
    event.recipes.createCompacting('nether_quartz_ore',['quartz','netherrack'])

    event.smelting('calcite','diorite')
    event.shapeless('create:asurine',['#forge:cobblestone','blue_dye'])
    event.shapeless('create:crimsite',['#forge:cobblestone','red_dye'])
    event.shapeless('create:limestone',['#forge:stone','gray_dye'])
    event.shapeless('create:ochrum',['#forge:stone','yellow_dye'])
    event.shapeless('create:veridium',['#forge:cobblestone','green_dye'])

    event.remove({output:'create:crushed_raw_zinc'})
    event.remove({output:'create:crushed_raw_copper'})
    event.remove({output:'create:crushed_raw_iron'})
    event.remove({output:'create:crushed_raw_gold'})

    event.replaceInput({output:'#minecraft:candles'},'honeycomb','create:cinder_flour')

    event.shapeless('quark:myalite',['#forge:cobblestone','purple_dye'])
    event.shapeless('quark:shale',['#forge:cobblestone','cyan_dye'])
    event.shapeless('quark:jasper',['#forge:cobblestone','brown_dye'])
    event.shapeless('quark:limestone',['#forge:cobblestone','light_gray_dye'])
    event.recipes.createHaunting('quark:dusky_myalite','quark:myalite')
    event.recipes.createHaunting('quark:myalite','quark:dusky_myalite')
    event.shapeless('quark:permafrost',['#forge:cobblestone','4x neapolitan:ice_cubes'])
    event.recipes.createFilling('4x pointed_dripstone',['create:powdered_obsidian',Fluid.of('exnihilosequentia:sea_water',200)])
    event.remove({output:'createdeco:brass_trapdoor'})
    event.shaped('createdeco:brass_trapdoor',[
        'A A',
        '   ',
        'A A'
    ],{
        A:'create:brass_ingot'
    })

    event.recipes.createMechanicalCrafting('supplementaries:globe',[
        '   AK',
        ' BCDA',
        ' EFGA',
        'AHIJA',
        'KAAAL',
        '  A  ',
        ' AAA ',
    ],{
        A:'gold_nugget',
        B:'sand',
        C:'quark:bottled_cloud',
        D:'podzol',
        E:'grass_block',
        F:'#forge:ores',
        G:'mycelium',
        H:'end_stone',
        I:'stone',
        J:'netherrack',
        K:'glowstone',
        L:'shroomlight'
    })
    event.shapeless('quark:bottled_cloud','glass_bottle')
    event.shaped('supplementaries:antique_ink',[
        'A',
        'B'
    ],{
        A:"black_dye",
        B:"exnihilosequentia:silver_ingot"
    })

    event.shaped('2x orange_dye',[
        'A  ',
        ' A ',
        '   '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x magenta_dye',[
        ' A ',
        ' A ',
        '   '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x light_blue_dye',[
        '  A',
        ' A ',
        '   '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x yellow_dye',[
        '   ',
        ' AA',
        '   '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x lime_dye',[
        '   ',
        ' A ',
        '  A'
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x pink_dye',[
        '   ',
        ' A ',
        ' A '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x gray_dye',[
        '   ',
        ' A ',
        'A  '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x light_gray_dye',[
        '   ',
        'AA ',
        '   '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x cyan_dye',[
        'A  ',
        '   ',
        '  A'
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x purple_dye',[
        ' A ',
        '   ',
        '  A'
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x blue_dye',[
        '  A',
        '   ',
        'A  '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x brown_dye',[
        ' A ',
        '   ',
        'A  '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x green_dye',[
        'A  ',
        '   ',
        ' A '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x red_dye',[
        '  A',
        '   ',
        ' A '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()
    event.shaped('2x black_dye',[
        '   ',
        'A A',
        '   '
    ],{
        A:'bone_meal'
    }).noMirror().noShrink()

    event.shapeless('createdeco:cast_iron_coin','createdeco:cast_iron_nugget')
    event.shapeless('createdeco:netherite_coin','createdeco:netherite_nugget')
    event.shapeless('createdeco:gold_coin','gold_nugget')
    event.shapeless('createdeco:iron_coin','iron_nugget')
    event.shapeless('createdeco:brass_coin','create:brass_nugget')
    event.shapeless('createdeco:copper_coin','create:copper_nugget')
    event.shapeless('createdeco:zinc_coin','create:zinc_nugget')

    event.recipes.createFilling('atmospheric:arid_sand',['sand',Fluid.of('lava',50)])
    event.recipes.createFilling('atmospheric:red_arid_sand',['red_sand',Fluid.of('lava',50)])

    event.recipes.createHaunting('atmospheric:ivory_travertine','quartz_block')
    event.recipes.createFilling('atmospheric:peach_travertine',['atmospheric:ivory_travertine',Fluid.of('create_central_kitchen:tomato_sauce',250)])
    event.recipes.createFilling('atmospheric:persimmon_travertine',['atmospheric:peach_travertine',Fluid.of('create_central_kitchen:tomato_sauce',250)])
    event.recipes.createFilling('atmospheric:saffron_travertine',['atmospheric:persimmon_travertine',Fluid.of('create_central_kitchen:tomato_sauce',250)])
})
onEvent('lootjs',event=>{
    event.addBlockLootModifier('coal_ore').removeLoot('coal').addLoot('coal_ore').dropExperience(0)
    event.addBlockLootModifier('iron_ore').removeLoot('raw_iron').addLoot('iron_ore').dropExperience(0)
    event.addBlockLootModifier('copper_ore').removeLoot('raw_copper').addLoot('copper_ore').dropExperience(0)
    event.addBlockLootModifier('gold_ore').removeLoot('raw_gold').addLoot('gold_ore').dropExperience(0)
    event.addBlockLootModifier('redstone_ore').removeLoot('redstone').addLoot('redstone_ore').dropExperience(0)
    event.addBlockLootModifier('emerald_ore').removeLoot('emerald').addLoot('emerald_ore').dropExperience(0)
    event.addBlockLootModifier('lapis_ore').removeLoot('lapis_lazuli').addLoot('lapis_ore').dropExperience(0)
    event.addBlockLootModifier('diamond_ore').removeLoot('diamond').addLoot('diamond_ore').dropExperience(0)

    event.addBlockLootModifier('deepslate_coal_ore').removeLoot('coal').addLoot('deepslate_coal_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_iron_ore').removeLoot('raw_iron').addLoot('deepslate_iron_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_copper_ore').removeLoot('raw_copper').addLoot('deepslate_copper_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_gold_ore').removeLoot('raw_gold').addLoot('deepslate_gold_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_redstone_ore').removeLoot('redstone').addLoot('deepslate_redstone_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_emerald_ore').removeLoot('emerald').addLoot('deepslate_emerald_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_lapis_ore').removeLoot('lapis_lazuli').addLoot('deepslate_lapis_ore').dropExperience(0)
    event.addBlockLootModifier('deepslate_diamond_ore').removeLoot('diamond').addLoot('deepslate_diamond_ore').dropExperience(0)

    event.addBlockLootModifier('nether_gold_ore').removeLoot('gold_nugget').addLoot('nether_gold_ore').dropExperience(0)
    event.addBlockLootModifier('nether_quartz_ore').removeLoot('quartz').addLoot('nether_quartz_ore').dropExperience(0)
})