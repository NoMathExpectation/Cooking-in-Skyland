onEvent('recipes',event=>{
    event.recipes.createFilling('farmersdelight:rich_soil',['farmersdelight:organic_compost',Fluid.of('exnihilosequentia:sea_water',500)])
    event.recipes.createFilling('nethersdelight:rich_soul_soil',['nethersdelight:soul_compost',Fluid.of('exnihilosequentia:witch_water',500)])
    event.recipes.createMechanicalCrafting('kubejs:gardenpot1',[
        'AB BA',
        'ABBBA',
        ' ABA ',
        ' AAA '
    ],{
        B:'farmersdelight:rich_soil',
        A:'obsidian'
    })
    event.recipes.createSequencedAssembly('kubejs:gardenpot2','kubejs:gardenpot1',[
        event.recipes.createDeploying('kubejs:gardenpot3',['kubejs:gardenpot3','dirt']),
        event.recipes.createDeploying('kubejs:gardenpot3',['kubejs:gardenpot3','create:tree_fertilizer']),
        event.recipes.createFilling('kubejs:gardenpot3',['kubejs:gardenpot3',Fluid.of('water',500)])
    ]).transitionalItem('kubejs:gardenpot3').loops(1)
    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x wheat',
        Item.of('4x wheat').withChance(0.5),
        '4x wheat_seeds'
    ],[
        'kubejs:gardenpot2','wheat_seeds'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x farmersdelight:rice_panicle',
        Item.of('4x farmersdelight:rice_panicle').withChance(0.5),
        '4x farmersdelight:rice'
    ],[
        'kubejs:gardenpot2','farmersdelight:rice'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x carrot',
        Item.of('6x carrot').withChance(0.5),
    ],[
        'kubejs:gardenpot2','carrot'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x farmersdelight:tomato',
        Item.of('4x farmersdelight:tomato').withChance(0.5),
        '4x farmersdelight:tomato_seeds'
    ],[
        'kubejs:gardenpot2','farmersdelight:tomato_seeds'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x farmersdelight:cabbage',
        Item.of('4x farmersdelight:cabbage').withChance(0.5),
        '4x farmersdelight:cabbage_seeds'
    ],[
        'kubejs:gardenpot2','farmersdelight:cabbage_seeds'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x farmersdelight:onion',
        Item.of('6x farmersdelight:onion').withChance(0.5),
    ],[
        'kubejs:gardenpot2','farmersdelight:onion'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x potato',
        Item.of('6x potato').withChance(0.5),
    ],[
        'kubejs:gardenpot2','potato'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x sweet_berries',
        Item.of('6x sweet_berries').withChance(0.5),
    ],[
        'kubejs:gardenpot2','sweet_berries'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x beetroot',
        Item.of('4x beetroot').withChance(0.5),
        '4x beetroot_seeds'
    ],[
        'kubejs:gardenpot2','beetroot_seeds'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x sugar_cane',
        Item.of('6x sugar_cane').withChance(0.5),
    ],[
        'kubejs:gardenpot2','sugar_cane'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x nether_wart',
        Item.of('6x nether_wart').withChance(0.5),
    ],[
        'kubejs:gardenpot2','nether_wart'
    ])

    event.recipes.createDeploying([
        'kubejs:gardenpot1',
        '16x apple',
    ],[
        'kubejs:gardenpot2','apple'
    ])
})