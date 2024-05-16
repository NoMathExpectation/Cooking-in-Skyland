onEvent('recipes',event=>{
    event.remove({output:'farmersdelight:pie_crust'})
    event.recipes.createCompacting('farmersdelight:pie_crust',[Fluid.of('milk',250),Fluid.of('kubejs:oil',50),'2x sugar','4x create:wheat_flour','egg']).heated()
    event.remove({output:'farmersdelight:chocolate_pie',type:'crafting_shaped'})
    event.remove({output:'farmersdelight:apple_pie',type:'crafting_shaped'})
    event.remove({output:'farmersdelight:sweet_berry_cheesecake',type:'crafting_shaped'})
    event.remove({output:'pumpkin_pie',type:'crafting_shaped'})
    
    event.remove ({output:'cookie'})
    event.remove ({output:'farmersdelight:honey_cookie'})
    event.remove ({output:'farmersdelight:sweet_berry_cookie'})
    event.recipes.createCompacting('8x cookie',[Fluid.of('milk',250),'4x create:wheat_flour','cocoa_beans','2x sugar']).heated()
    event.recipes.createCompacting('8x farmersdelight:sweet_berry_cookie',[Fluid.of('milk',250),'4x create:wheat_flour','sweet_berries','2x sugar']).heated()
    event.recipes.createCompacting('8x farmersdelight:honey_cookie',[Fluid.of('milk',250),'4x create:wheat_flour',Fluid.of('create:honey',100),'2x sugar']).heated()
    
    event.replaceInput({output:'farmersdelight:melon_popsicle'},'ice','kubejs:ice_cube')

    event.remove({output:'farmersdelight:milk_bottle',type:'crafting_shapeless'})
    event.recipes.createMixing('farmersdelight:glow_berry_custard',['glow_berries','farmersdelight:milk_bottle','egg','sugar',Fluid.of('kubejs:fluid1',100)]).heated()
    
    event.remove({output:'farmersdelight:fruit_salad'})
    event.recipes.createMechanicalCrafting('farmersdelight:fruit_salad',[
        'CDEDC',
        ' BAB '
    ],{
        A:'bowl',
        B:'farmersdelight:cabbage_leaf',
        C:'sweet_berries',
        D:'melon_slice',
        E:'glow_berries'
    })
    event.remove({output:"farmersdelight:mixed_salad"})
    event.recipes.createMechanicalCrafting('farmersdelight:mixed_salad',[
        'DC CD',
        ' BAB '
    ],{
        A:'bowl',
        B:'farmersdelight:cabbage_leaf',
        C:'farmersdelight:tomato',
        D:'beetroot'
    })
    event.remove({output:'farmersdelight:nether_salad'})
    event.recipes.createMechanicalCrafting('farmersdelight:nether_salad',[
        'FC DF',
        'EBABE',
    ],{
        A:'bowl',
        B:'nether_wart',
        C:'warped_fungus',
        D:'crimson_fungus',
        E:'blaze_powder',
        F:'magma_cream'
    })

    event.remove({output:'farmersdelight:egg_sandwich',type:'crafting_shapeless'})
    event.remove({output:'farmersdelight:bacon_sandwich',type:'crafting_shapeless'})
    event.remove({output:'farmersdelight:chicken_sandwich',type:'crafting_shapeless'})
    event.remove({output:'farmersdelight:mutton_wrap',type:'crafting_shapeless'})

    event.remove({output:'farmersdelight:dumplings'})
    event.recipes.createMixing([Item.of('farmersdelight:dumplings').withChance(0.95),Fluid.of('water',1000)],['farmersdelight:wheat_dough','farmersdelight:cabbage_leaf','farmersdelight:onion','#farmersdelight:cabbage_roll_ingredients',Fluid.of('water',1000)]).heated()

    event.remove({output:'farmersdelight:stuffed_potato'})
    event.recipes.createCompacting('farmersdelight:stuffed_potato',['baked_potato','#forge:cooked_beef',Fluid.of('milk',250)]).heated()

    event.remove({output:'farmersdelight:cabbage_rolls'})
    event.recipes.createDeploying('farmersdelight:cabbage_rolls',['#farmersdelight:cabbage_roll_ingredients','farmersdelight:cabbage_leaf'])

    event.remove({output:'farmersdelight:bone_broth'})
    event.remove({output:'farmersdelight:beef_stew'})
    event.remove({output:'farmersdelight:chicken_soup'})
    event.remove({output:'farmersdelight:vegetable_soup'})
    event.remove({output:'farmersdelight:fish_stew'})
    event.remove({output:'farmersdelight:pumpkin_soup'})
    event.remove({output:'farmersdelight:baked_cod_stew'})
    event.remove({output:'farmersdelight:noodle_soup'})
    event.recipes.createMixing('farmersdelight:bone_broth',['bowl',Fluid.of('water',500),'bone','red_mushroom','brown_mushroom']).heated()
    event.recipes.createMixing('farmersdelight:beef_stew',['bowl',Fluid.of('water',500),'carrot','potato','#forge:raw_beef']).heated()
    event.recipes.createMixing('farmersdelight:chicken_soup',['bowl',Fluid.of('water',500),'carrot','farmersdelight:cabbage_leaf','farmersdelight:onion','#forge:raw_chicken']).heated()
    event.recipes.createMixing('farmersdelight:vegetable_soup',['bowl',Fluid.of('water',500),'carrot','potato','beetroot','farmersdelight:cabbage_leaf','farmersdelight:onion']).heated()
    event.recipes.createMixing('farmersdelight:fish_stew',['bowl',Fluid.of('water',500),'farmersdelight:cod_slice','farmersdelight:salmon_slice','farmersdelight:onion',Fluid.of('create_central_kitchen:tomato_sauce',200)]).heated()
    event.recipes.createMixing('farmersdelight:pumpkin_soup',['bowl',Fluid.of('water',500),'farmersdelight:pumpkin_slice','farmersdelight:cabbage_leaf','farmersdelight:bacon',Fluid.of('milk',250)]).heated()
    event.recipes.createMixing('farmersdelight:baked_cod_stew',['bowl','farmersdelight:cod_slice','farmersdelight:tomato','potato','egg']).heated()
    event.recipes.createMixing('farmersdelight:noodle_soup',['bowl',Fluid.of('water',500),'farmersdelight:raw_pasta','farmersdelight:fried_egg','dried_kelp','farmersdelight:bacon']).heated()

    event.remove({output:'farmersdelight:bacon_and_eggs'})
    event.recipes.createCompacting('farmersdelight:bacon_and_eggs',['bowl','2x farmersdelight:fried_egg','2x farmersdelight:cooked_bacon'])

    event.remove({output:'farmersdelight:pasta_with_meatballs'})
    event.remove({output:'farmersdelight:pasta_with_mutton_chop'})
    event.remove({output:'farmersdelight:vegetable_noodles'})
    event.remove({output:'farmersdelight:squid_ink_pasta'})
    event.recipes.createMixing('farmersdelight:pasta_with_meatballs',['farmersdelight:raw_pasta','bowl','farmersdelight:minced_beef',Fluid.of('create_central_kitchen:tomato_sauce',200)]).heated()
    event.recipes.createMixing('farmersdelight:pasta_with_mutton_chop',['farmersdelight:raw_pasta','bowl','farmersdelight:mutton_chops',Fluid.of('create_central_kitchen:tomato_sauce',200)]).heated()
    event.recipes.createMixing('farmersdelight:vegetable_noodles',['farmersdelight:raw_pasta','bowl','carrot','potato','red_mushroom','brown_mushroom','farmersdelight:cabbage_leaf','farmersdelight:tomato']).heated()
    event.recipes.createMixing('farmersdelight:squid_ink_pasta',['farmersdelight:raw_pasta','bowl','farmersdelight:cod_slice','farmersdelight:salmon_slice','farmersdelight:tomato','ink_sac']).heated()
    event.recipes.createCompacting('ink_sac',[Fluid.of('exnihilosequentia:sea_water',200),'kubejs:fishfood'])

    event.remove({output:'farmersdelight:mushroom_rice'})
    event.recipes.createMixing('farmersdelight:mushroom_rice',[
        'kubejs:cold_rice','red_mushroom','brown_mushroom','potato','farmersdelight:fried_egg',Fluid.of('kubejs:oil',200)
    ]).heated()

    event.remove({output:'farmersdelight:roasted_mutton_chops'})
    event.recipes.createMixing('farmersdelight:roasted_mutton_chops',[
        'farmersdelight:cooked_mutton_chops','beetroot','farmersdelight:rice','potato','farmersdelight:tomato',Fluid.of('kubejs:oil',50)
    ]).heated()

    event.remove({output:'farmersdelight:steak_and_potatoes'})
    event.recipes.createMixing('farmersdelight:steak_and_potatoes',[
        'cooked_beef','potato','farmersdelight:cooked_rice','farmersdelight:onion',Fluid.of('kubejs:oil',50)
    ]).heated()

    event.remove({output:'farmersdelight:ratatouille'})
    event.recipes.createCompacting('farmersdelight:ratatouille',[
        'bowl','farmersdelight:cabbage_leaf','farmersdelight:onion','potato','beetroot','carrot','farmersdelight:tomato'
    ]).heated()

    event.remove({output:'farmersdelight:grilled_salmon'})
    event.recipes.createCompacting('farmersdelight:grilled_salmon',[
        'bowl','farmersdelight:cabbage_leaf','sweet_berries','farmersdelight:onion','farmersdelight:salmon_slice',Fluid.of('create_central_kitchen:tomato_sauce',100)
    ]).heated()

    event.remove({output:'farmersdelight:roast_chicken_block'})
    event.recipes.createCompacting('farmersdelight:roast_chicken_block',[
        'bowl','2x potato','2x carrot','chicken','2x egg','2x farmersdelight:onion','kubejs:undo_sandwich',Fluid.of('kubejs:oil',100)
    ]).heated()

    event.remove({output:'farmersdelight:stuffed_pumpkin_block'})
    event.recipes.createCompacting('farmersdelight:stuffed_pumpkin_block',[
        'bowl','pumpkin','farmersdelight:onion','red_mushroom','brown_mushroom','potato','sweet_berries','carrot',Fluid.of('kubejs:oil',100)
    ]).heated()

    event.remove({output:"farmersdelight:shepherds_pie_block"})
    event.recipes.createCompacting('farmersdelight:shepherds_pie_block',[
        'bowl','4x farmersdelight:onion','4x baked_potato','8x farmersdelight:cooked_mutton_chops',Fluid.of('kubejs:oil',100),Fluid.of('milk',250)
    ]).heated()
    
    event.remove({output:'rainbowcompound:golden_apple_stew'})
    event.recipes.createMixing('rainbowcompound:golden_apple_stew',['2x golden_apple','2x apple','sugar','4x farmersdelight:cabbage_leaf']).heated()
    event.remove({output:'rainbowcompound:rainbow_apple_stew'})
    event.recipes.createMixing('rainbowcompound:rainbow_apple_stew',['2x rainbowcompound:rainbow_apple','2x apple','sugar','4x farmersdelight:cabbage_leaf']).heated()
    event.remove({output:'rainbowcompound:enchanted_golden_apple_stew'})
    event.recipes.createMixing('rainbowcompound:enchanted_golden_apple_stew',['2x enchanted_golden_apple','2x apple','sugar','4x farmersdelight:cabbage_leaf']).heated()
    event.recipes.createMixing('10x apple',['grass_block','#minecraft:saplings','bone_meal'])

    event.remove({output:'beetroot_soup'})
    event.recipes.createMixing('beetroot_soup',['bowl','5x beetroot','sugar']).heated()
    event.remove({output:'mushroom_stew'})
    event.recipes.createMixing('mushroom_stew',['bowl','red_mushroom','brown_mushroom']).heated()
    event.remove({output:'rabbit_stew'})
    event.recipes.createMixing('rabbit_stew',['bowl','baked_potato','carrot','cooked_rabbit','farmersdelight:onion']).heated()

    event.recipes.createMixing('rainbowcompound:shadow_steel_tea',[
        Fluid.of('create:tea',250),'glass_bottle','create:powdered_obsidian','bone_meal','kubejs:shadow_steel'
    ]).heated()
    event.recipes.createMixing('rainbowcompound:refined_radiance_tea',[
        Fluid.of('create:tea',250),'glass_bottle','glowstone_dust','bone_meal','kubejs:refined_radiance'
    ]).heated()
    event.remove({output:'rainbowcompound:shadow_steel_tea'})
    event.remove({output:'rainbowcompound:refined_radiance_tea'})
    event.remove({output:'farmersdelight:fried_rice'})
    //extra
    event.remove({output:'farmersdelight:glow_berry_custard'})
    event.remove({output:'farmersdelight:tomato_sauce',type:'farmersdelight:cooking'})
    event.remove({output:'farmersdelight:apple_cider',type:'farmersdelight:cooking'})
    event.remove({output:'farmersdelight:hot_cocoa',type:'farmersdelight:cooking'})
    event.remove({output:'farmersdelight:dog_food'})
    event.recipes.createMixing('farmersdelight:dog_food',['rotten_flesh','bone_meal','#farmersdelight:wolf_prey','farmersdelight:rice','bowl']).heated()
})