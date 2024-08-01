onEvent('item.tags',event=>{
    event.add('forge:raw_bacon','croptopia:bacon')
    event.add('forge:frog_legs','quark:frog_leg')
})
onEvent('recipes',event=>{
    event.recipes.createMixing('create:bar_of_chocolate',Fluid.of('create:chocolate',250))
    event.replaceInput({},'#forge:cheese','#forge:cheeses')
    event.replaceInput({},'farmersdelight:cooked_bacon','#forge:cooked_bacon')
    event.replaceInput({},'croptopia:cooked_bacon','#forge:cooked_bacon')
    event.replaceInput({},'#forge:crops','#forge:seeds')
    event.replaceInput({type:'farmersdelight:cooking'},'snowball','kubejs:item3')
    event.replaceInput({},'neapolitan:ice_cubes','kubejs:ice_cube')
    event.replaceOutput({type:'crafting_shaped'},'ice','packed_ice')
    event.shapeless('ice','9x neapolitan:ice_cubes')
    event.shapeless('packed_ice','9x kubejs:ice_cube')
    event.replaceInput({},'neapolitan:banana','#forge:bananas')
    event.replaceInput({},'neapolitan:strawberries','#forge:strawberries')
    event.replaceInput({},'croptopia:bacon','#forge:raw_bacon')
    event.replaceInput({},'farmersdelight:bacon','#forge:raw_bacon')    
    event.replaceInput({},'croptopia:noodle','#forge:pasta/raw_pasta')
    event.replaceInput({},'croptopia:dough','create:dough')
    
    event.remove({output:'farmersdelight:cooked_bacon'})
    event.smoking('farmersdelight:cooked_bacon','farmersdelight:bacon')
    event.remove({output:'croptopia:cooked_bacon'})
    event.smoking('croptopia:cooked_bacon','croptopia:bacon')
    
    event.remove({output:'croptopia:knife'})
    event.shaped('croptopia:knife',[
        'A',
        'B'
    ],{
        A:'iron_ingot',
        B:'stick'
    })
    event.recipes.createDeploying('quark:slime_in_a_bucket',['bucket','slime_ball'])
    event.remove({input:'croptopia:noodle'})
    event.remove({input:'croptopia:dough'})
    event.remove({output:'cacao:manual_food_grinder'})
    event.remove({input:'cacao:manual_food_grinder'})
    event.remove({output:'cacao:cacao_nibs'})
    event.smoking('cacao:cacao_nibs','cocoa_beans')
    event.recipes.createMixing('2x cacao:cocoa_powder',['cacao:pressed_cocoa_cone','sugar']).heated()
    event.recipes.createCompacting('cacao:cacao_mass_bucket',['bucket','8x cacao:cacao_nibs']).heated()
    event.recipes.createFilling('croptopia:olive_oil',[Fluid.of('kubejs:oil',200),'glass_bottle'])
    event.recipes.createCompacting('honeycomb',[Fluid.of('create:honey',100),'#forge:flour']).heated()
    event.shaped('farmersdelight:cooking_pot',[
        'A A',
        'B B',
        'BCB'
    ],{
        A:'create:polished_rose_quartz',
        B:'createdeco:cast_iron_sheet',
        C:'create:basin'
    })
    event.shaped('farmersdelight:skillet',[
        'A A',
        'BBB',
    ],{
        A:'create:polished_rose_quartz',
        B:'createdeco:cast_iron_sheet',
    })
    event.recipes.createsifterSifting([
        Item.of('croptopia:artichoke_seed').withChance(0.05),Item.of('croptopia:asparagus_seed').withChance(0.05),Item.of('croptopia:barley_seed').withChance(0.05),
        Item.of('croptopia:bellpepper_seed').withChance(0.05),Item.of('croptopia:blackbean_seed').withChance(0.05),Item.of('croptopia:blackberry_seed').withChance(0.05),
        Item.of('croptopia:blueberry_seed').withChance(0.05),Item.of('croptopia:broccoli_seed').withChance(0.05),Item.of('croptopia:cabbage_seed').withChance(0.05),
        Item.of('croptopia:cantaloupe_seed').withChance(0.05),Item.of('croptopia:cauliflower_seed').withChance(0.05),Item.of('croptopia:celery_seed').withChance(0.05),
        Item.of('croptopia:coffee_seed').withChance(0.05),Item.of('croptopia:corn_seed').withChance(0.05),Item.of('croptopia:cranberry_seed').withChance(0.05),
        Item.of('croptopia:cucumber_seed').withChance(0.05),Item.of('croptopia:currant_seed').withChance(0.05),Item.of('croptopia:eggplant_seed').withChance(0.05),
        Item.of('croptopia:elderberry_seed').withChance(0.05),Item.of('croptopia:garlic_seed').withChance(0.05),Item.of('croptopia:grape_seed').withChance(0.05),
        Item.of('croptopia:greenbean_seed').withChance(0.05),Item.of('croptopia:greenonion_seed').withChance(0.05),Item.of('croptopia:honeydew_seed').withChance(0.05),
        Item.of('croptopia:hops_seed').withChance(0.05),Item.of('croptopia:kale_seed').withChance(0.05),Item.of('croptopia:kiwi_seed').withChance(0.05),
        Item.of('croptopia:leek_seed').withChance(0.05),Item.of('croptopia:lettuce_seed').withChance(0.05),Item.of('croptopia:olive_seed').withChance(0.05),
        Item.of('croptopia:onion_seed').withChance(0.05),Item.of('croptopia:peanut_seed').withChance(0.05),Item.of('croptopia:pineapple_seed').withChance(0.05),
        Item.of('croptopia:radish_seed').withChance(0.05),Item.of('croptopia:raspberry_seed').withChance(0.05),Item.of('croptopia:rhubarb_seed').withChance(0.05),
        Item.of('croptopia:rice_seed').withChance(0.05),Item.of('croptopia:rutabaga_seed').withChance(0.05),Item.of('croptopia:saguaro_seed').withChance(0.05),
        Item.of('croptopia:spinach_seed').withChance(0.05),Item.of('croptopia:squash_seed').withChance(0.05),Item.of('croptopia:strawberry_seed').withChance(0.05),
        Item.of('croptopia:sweetpotato_seed').withChance(0.05),Item.of('croptopia:tomatillo_seed').withChance(0.05),Item.of('croptopia:tomato_seed').withChance(0.05),
        Item.of('croptopia:turnip_seed').withChance(0.05),Item.of('croptopia:yam_seed').withChance(0.05),Item.of('croptopia:zucchini_seed').withChance(0.05),
        Item.of('croptopia:mustard_seed').withChance(0.05),Item.of('croptopia:chile_pepper_seed').withChance(0.05),Item.of('croptopia:turmeric_seed').withChance(0.05),
        Item.of('croptopia:ginger_seed').withChance(0.05),Item.of('croptopia:basil_seed').withChance(0.05),Item.of('croptopia:oat_seed').withChance(0.05),
        Item.of('croptopia:barley_seed').withChance(0.05),Item.of('croptopia:vanilla_seeds').withChance(0.05),Item.of('croptopia:pepper_seed').withChance(0.05),
        Item.of('croptopia:tea_seed').withChance(0.05),Item.of("croptopia:soybean_seed").withChance(0.05),Item.of('neapolitan:adzuki_beans').withChance(0.05),
        Item.of('neapolitan:vanilla_pods').withChance(0.05),Item.of('neapolitan:mint_sprout').withChance(0.05),
        Item.of('atmospheric:aloe_kernels').withChance(0.05),Item.of('atmospheric:passion_vine').withChance(0.05)
    ],['farmersdelight:organic_compost','createsifter:brass_mesh'])
    event.shapeless('2x rooted_dirt',['2x dirt','2x stick'])
    event.recipes.createsifterSifting([    
        Item.of('croptopia:banana_sapling').withChance(0.05),
        Item.of('croptopia:apple_sapling').withChance(0.05),
        Item.of('croptopia:orange_sapling').withChance(0.05),
        Item.of('croptopia:persimmon_sapling').withChance(0.05),
        Item.of('croptopia:plum_sapling').withChance(0.05),
        Item.of('croptopia:cherry_sapling').withChance(0.05),
        Item.of('croptopia:lemon_sapling').withChance(0.05),
        Item.of('croptopia:grapefruit_sapling').withChance(0.05),
        Item.of('croptopia:kumquat_sapling').withChance(0.05),
        Item.of('croptopia:peach_sapling').withChance(0.05),
        Item.of('croptopia:coconut_sapling').withChance(0.05),
        Item.of('croptopia:nutmeg_sapling').withChance(0.05),
        Item.of('croptopia:fig_sapling').withChance(0.05),
        Item.of('croptopia:nectarine_sapling').withChance(0.05),
        Item.of('croptopia:mango_sapling').withChance(0.05),
        Item.of('croptopia:dragonfruit_sapling').withChance(0.05),
        Item.of('croptopia:starfruit_sapling').withChance(0.05),
        Item.of('croptopia:avocado_sapling').withChance(0.05),
        Item.of('croptopia:apricot_sapling').withChance(0.05),
        Item.of('croptopia:pear_sapling').withChance(0.05),
        Item.of('croptopia:lime_sapling').withChance(0.05),
        Item.of('croptopia:date_sapling').withChance(0.05),
        Item.of('croptopia:almond_sapling').withChance(0.05),
        Item.of('croptopia:cashew_sapling').withChance(0.05),
        Item.of('croptopia:pecan_sapling').withChance(0.05),
        Item.of('croptopia:walnut_sapling').withChance(0.05),
        Item.of('croptopia:cinnamon_sapling').withChance(0.05)
    ],['rooted_dirt','createsifter:brass_mesh'])
    event.recipes.createCompacting('neapolitan:small_banana_frond','#forge:bananas')
    event.recipes.createCompacting('neapolitan:banana_frond','2x neapolitan:small_banana_frond')
    event.recipes.createCompacting('neapolitan:large_banana_frond','2x neapolitan:banana_frond')
    //seafood
    event.recipes.createDeploying([
        Item.of('bucket'),
        Item.of('croptopia:anchovy').withChance(0.15),Item.of('croptopia:calamari').withChance(0.15),
        Item.of('croptopia:clam').withChance(0.15),Item.of('croptopia:crab').withChance(0.15),
        Item.of('croptopia:glowing_calamari').withChance(0.15),Item.of('croptopia:oyster').withChance(0.15),
        Item.of('croptopia:shrimp').withChance(0.15),Item.of('croptopia:tuna').withChance(0.15),
        Item.of('babyfat:ranchu').withChance(0.15),Item.of('babyfat:water_lettuce').withChance(0.15),
        Item.of('oceansdelight:guardian').withChance(0.15),Item.of('oceansdelight:elder_guardian_slab').withChance(0.15),
        Item.of('croptopia:sea_lettuce').withChance(0.15),Item.of('croptopia:frog_legs').withChance(0.15),
        Item.of('quark:frog_leg').withChance(0.15),Item.of('atmospheric:yucca_branch').withChance(0.15)
    ],[Item.of('exnihilosequentia:sea_water_bucket'),Item.of('exnihilosequentia:emerald_mesh')]).keepHeldItem()
    event.custom({    
    "type":"farmersdelight:cutting",
    "ingredients": [{"item": "croptopia:tuna"}],
    "tool":{"tag":"forge:tools/knives"},
    "result":[
    {"item":"croptopia:roe","count":1},
    {"item":"croptopia:roe","count":1,"chance":0.5}
]})
event.custom({    
    "type":"farmersdelight:cutting",
    "ingredients": [{"item": "croptopia:calamari"}],
    "tool":{"tag":"forge:tools/knives"},
    "result":[
    {"item":"oceansdelight:tentacles","count":1},
    {"item":"oceansdelight:tentacles","count":1,"chance":0.5}
]})
event.custom({    
    "type":"farmersdelight:cutting",
    "ingredients": [{"item": "croptopia:crab"}],
    "tool":{"tag":"forge:tools/knives"},
    "result":[
    {"item":"quark:crab_shell","count":1},
    {"item":"quark:crab_leg","count":6},
    {"item":"quark:crab_leg","count":2,"chance":0.5}
]})

    event.remove({output:'croptopia:water_bottle'})
    event.recipes.createFilling('croptopia:water_bottle',['glass_bottle',Fluid.of('water',50)])
    event.shapeless('croptopia:salt_ore','9x croptopia:salt')
    event.shapeless('9x croptopia:salt','croptopia:salt_ore')

    event.remove({output:'endersdelight:chorus_crate'})
    event.remove({input:'endersdelight:chorus_crate'})
    event.shaped('endersdelight:chorus_crate',[
        "A A",
        'AAA',
        'AAA'
    ],{
        A:'chorus_fruit'
    })
    event.shapeless('8x chorus_fruit','endersdelight:chorus_crate')

    event.remove({output:'ends_delight:chorus_fruit_crate'})
    event.remove({input:'ends_delight:chorus_fruit_crate'})
    event.shaped('ends_delight:chorus_fruit_crate',[
        "AAA",
        'AAA',
        'A A'
    ],{
        A:'chorus_fruit'
    })
    event.shapeless('8x chorus_fruit','ends_delight:chorus_fruit_crate')


    //nether
    event.recipes.createHaunting('shroomlight','glowstone')
    event.shaped('crimson_nylium',[
        ' A ',
        'CBC',
        ' A '
    ],{
        A:Item.of('rainbowcompound:netherwartite_ingot'),
        B:'netherrack',
        C:'nether_wart_block'
    })
    event.recipes.createHaunting('shroomlight','glowstone')
    event.shaped('warped_nylium',[
        ' A ',
        'CBC',
        ' A '
    ],{
        A:Item.of('rainbowcompound:warpedite_ingot'),
        B:'netherrack',
        C:'warped_wart_block'
    })
    event.remove({output:'nethersdelight:propelplant_stem'})
    event.recipes.createPressing('exnihilosequentia:crushed_netherrack','netherrack')
    event.recipes.createMilling([
        Item.of('exnihilosequentia:crushed_netherrack').withChance(0.8),
        Item.of('exnihilosequentia:crushed_netherrack').withChance(0.7)
    ],'netherrack')
    event.recipes.createCrushing([
        Item.of('exnihilosequentia:crushed_netherrack').withChance(0.8),
        Item.of('exnihilosequentia:crushed_netherrack').withChance(0.7),
        Item.of('exnihilosequentia:crushed_netherrack').withChance(0.6)
    ],'netherrack')
    event.recipes.createsifterSifting([
        Item.of('nethersdelight:propelplant_stem').withChance(0.4),
        Item.of('nethersdelight:mimicarnation').withChance(0.4),
        Item.of('crimson_roots').withChance(0.4),
        Item.of('warped_roots').withChance(0.4),
        Item.of('nether_sprouts').withChance(0.4)
    ],['exnihilosequentia:crushed_netherrack','createsifter:brass_mesh'])
    event.recipes.createHaunting('nethersdelight:hoglin_hide','leather')
    event.recipes.createHaunting('nethersdelight:hoglin_loin','porkchop')
    event.recipes.createHaunting('nethersdelight:strider_slice','#forge:raw_fishes')
    event.remove({input:'nethersdelight:hoglin_hide'})
    event.recipes.createMechanicalCrafting('nethersdelight:hoglin_mount',[
        'AAAAA',
        'BDDDB',
        'BDCDB',
        'BDDDB',
        'BBBBB'
    ],{
        A:'shroomlight',
        B:'gold_nugget',
        C:'nethersdelight:hoglin_hide',
        D:'#minecraft:planks'
    })
    event.recipes.createMechanicalCrafting('nethersdelight:raw_stuffed_hoglin',[
        'GGBAQACHH',
        'GBADFDACH',
        'BADEMEDAC',
        'BAPONOPAC',
        'AIAAAAAIA',
        'AILKNKLIA',
        'AIKLMLKIA',
        'AJIIIIIJA',
        'JAAAAAAAJ'
    ],{
        A:'nethersdelight:hoglin_hide',
        B:'warped_roots',
        C:'crimson_roots',
        D:'#forge:pepper',
        E:'#forge:salt',
        F:'golden_apple',
        G:'warped_fungus',
        H:'crimson_fungus',
        I:'nethersdelight:hoglin_loin',
        J:'farmersdelight:ham',
        K:'potato',
        L:'carrot',
        M:'#forge:onions',
        N:'#forge:garlic',
        O:'#forge:tomatoes',
        P:'glow_berries',
        Q:'nethersdelight:mimicarnation'
    })
    //end
    event.recipes.createsifterSifting([
        Item.of('ends_delight:dragon_tooth').withChance(0.4),
        Item.of('shulker_shell').withChance(0.4),
        Item.of('endersdelight:mite_crust').withChance(0.4),
    ],['exnihilosequentia:crushed_end_stone','createsifter:brass_mesh'])
    event.recipes.createMixing([
        Item.of('chorus_fruit').withChance(0.7),
        Item.of('chorus_plant').withChance(0.7),
        Item.of('chorus_flower').withChance(0.7),
        Item.of('ends_delight:chorus_succulent').withChance(0.7),
    ],['chorus_fruit',Fluid.of('create_central_kitchen:dragon_breath',200)])
    event.recipes.createFilling('chorus_flower',['chorus_plant',Fluid.of('create_central_kitchen:dragon_breath',150)])
    event.recipes.createFilling('endersdelight:enderman_sight',['endersdelight:ender_shard',Fluid.of('create_central_kitchen:dragon_breath',150)])
    event.recipes.createDeploying([
        Item.of('endersdelight:shulker_mollusk').withChance(0.4),
        Item.of('shulker_shell').withChance(0.9)
    ],['shulker_shell','#exnihilosequentia:crook'])
    event.recipes.createDeploying([
        Item.of('ends_delight:raw_ender_mite_meat').withChance(0.4),
        Item.of('endersdelight:mite_crust').withChance(0.9)
    ],['endersdelight:mite_crust','#exnihilosequentia:crook'])
    event.recipes.createMechanicalCrafting('dragon_egg',[
        '  A  ',
        ' ABA ',
        'ABCBA',
        'A B A',
        ' AAA '
    ],{
        A:'ends_delight:dragon_egg_shell',
        B:'rainbowcompound:enderite_ingot',
        C:'rainbowcompound:netherstar_ingot'
    })
    event.recipes.createFilling('ends_delight:dragon_leg',['farmersdelight:ham',Fluid.of("create_central_kitchen:dragon_breath",500)])
    //extraore
    event.recipes.createsifterSifting([
        Item.of('exnihilosequentia:tin_pieces').withChance(0.85),
        Item.of('exnihilosequentia:tin_pieces').withChance(0.85),
        Item.of('exnihilosequentia:lead_pieces').withChance(0.85),
        Item.of('exnihilosequentia:lead_pieces').withChance(0.85),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.85),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.85),
        Item.of('exnihilosequentia:silver_pieces').withChance(0.85),
        Item.of('exnihilosequentia:silver_pieces').withChance(0.85),
    ],['stone','createsifter:brass_mesh'])
    //tool
    event.remove({output:'croptopia:cooking_pot'})
    event.remove({output:'croptopia:frying_pan'})
    event.remove({output:'croptopia:mortar_and_pestle'})
    event.remove({output:'croptopia:food_press'})
    event.remove({output:'casualness_delight:deep_frying_pan'})
    event.shaped('croptopia:cooking_pot',[
        'B B',
        'B B',
        'BBB'
    ],{
        B:'createdeco:cast_iron_sheet'
    })
    event.shaped('croptopia:frying_pan',[
        'A  ',
        ' AB',
        ' BB'
    ],{
        A:'stick',
        B:'createdeco:cast_iron_sheet'
    })
    event.shaped('croptopia:mortar_and_pestle',[
        'A  ',
        ' AB',
        ' BB'
    ],{
        A:'stick',
        B:'create:brass_sheet'
    })
    event.shaped('croptopia:food_press',[
        ' A ',
        'CBC',
        ' C '
    ],{
        A:'create:mechanical_press',
        B:'hopper',
        C:'createdeco:cast_iron_sheet'
    })
    event.recipes.createFilling('casualness_delight:deep_frying_pan',['farmersdelight:cooking_pot',Fluid.of('kubejs:oil',1000)])

    event.remove({output:'enchanted_golden_apple',type:'create:mechanical_crafting'})

    event.remove({output:'neapolitan:strawberry_pips'})
    event.shapeless('neapolitan:strawberry_pips','croptopia:strawberry_seed')
    event.shapeless('croptopia:strawberry_seed','neapolitan:strawberry_pips')
    //atmos
    event.custom({    
        "type":"farmersdelight:cutting",
        "ingredients": [{"item": "atmospheric:yellow_blossoms"}],
        "tool":{"tag":"forge:tools/knives"},
        "result":[
        {"item":"atmospheric:aloe_leaves","count":1},
        {"item":"atmospheric:aloe_leaves","count":1,"chance":0.5}
    ]})
    event.recipes.createHaunting('atmospheric:barrel_cactus','cactus')
})