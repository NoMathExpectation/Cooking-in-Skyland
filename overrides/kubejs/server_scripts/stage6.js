onEvent('recipes',event=>{
    //event.recipes.createFilling('minecraft:cobblestone',['minecraft:dirt',Fluid.of('create:potion',100).withNBT({Potion:'minecraft:fire_resistance'})])
    //材料
    event.blasting('minecraft:lime_dye','minecraft:seagrass')
    event.recipes.createMixing('minecraft:ghast_tear',['minecraft:magma_cream',Fluid.of('minecraft:lava',200)]).superheated()
    event.recipes.createMixing('2x minecraft:spider_eye',['minecraft:magma_cream',Fluid.of('exnihilosequentia:witch_water',200)]).superheated()
    event.remove({output:'fermented_spider_eye'})
    event.recipes.createMixing('fermented_spider_eye',['spider_eye','red_mushroom','brown_mushroom','minecraft:sugar']).heated()
    event.remove({output:"nether_wart_block"})
    event.recipes.createCompacting('nether_wart_block',['4x nether_wart','fermented_spider_eye']).heated()
    event.recipes.createCompacting('warped_wart_block',['2x twisting_vines','2x weeping_vines','ghast_tear']).heated()
    event.recipes.createCompacting([
      'end_stone',
      Item.of('minecraft:end_stone').withChance(0.6),
      Item.of('minecraft:end_stone').withChance(0.4)
    ],['nether_wart_block','warped_wart_block','magma_cream']).superheated()
    event.recipes.createPressing('exnihilosequentia:crushed_end_stone','end_stone')
    event.recipes.createMixing([
      'ender_pearl',
      Item.of('ender_pearl').withChance(0.4),
      Item.of('ender_pearl').withChance(0.6),
    ],['exnihilosequentia:crushed_end_stone',Fluid.of('water',250)])
    event.recipes.createMixing([
      'chorus_fruit',
      Item.of('chorus_fruit').withChance(0.4),
      Item.of('chorus_fruit').withChance(0.6)
    ],['exnihilosequentia:crushed_end_stone',Fluid.of('exnihilosequentia:witch_water',250)])
    
    event.recipes.createMixing(Fluid.of('create_central_kitchen:dragon_breath',250),[
        'end_crystal','8x end_rod','8x purpur_block'
    ]).superheated()
    event.recipes.createMixing([Fluid.of('create_central_kitchen:dragon_breath',50),Item.of('dragon_head').withChance(0.9)],['dragon_head'])
    event.recipes.createFilling('dragon_head',[Fluid.of("create_central_kitchen:dragon_breath",200),'kubejs:smart_zombie'])
    event.recipes.createMixing([Item.of('chorus_fruit').withChance(0.5),'chorus_fruit'],['chorus_fruit',Fluid.of('exnihilosequentia:witch_water',500)])
    //合金
    event.remove({output:'rainbowcompound:ender_quartz'})
    event.shaped('rainbowcompound:ender_quartz',[
      ' A ',
      'ABA',
      ' A '
    ],{
      A:'ender_pearl',
      B:'quartz'
    })
    event.recipes.createCompacting('rainbowcompound:ender_quartz',['4x ender_pearl','quartz']).heated()
    event.remove({output:'rainbowcompound:polished_ender_quartz'})
    event.recipes.createFilling('rainbowcompound:polished_ender_quartz',[Fluid.of('create_central_kitchen:dragon_breath',50),'rainbowcompound:ender_quartz'])
    event.remove({output:'rainbowcompound:strange_colored_ingot'})
    event.recipes.createCompacting([
      Item.of('rainbowcompound:strange_colored_ingot').withChance(0.9),
      Item.of('rainbowcompound:strange_colored_ingot').withChance(0.8),
      Item.of('rainbowcompound:strange_colored_ingot').withChance(0.7),
      Item.of('rainbowcompound:strange_colored_ingot').withChance(0.6)
    ],[
      'rainbowcompound:blazeite_ingot','rainbowcompound:warpedite_ingot',
      'rainbowcompound:glowstoneite_ingot','rainbowcompound:netherwartite_ingot',
      'rainbowcompound:frostite_ingot','rainbowcompound:enderite_ingot',
      'rainbowcompound:chorusite_ingot','rainbowcompound:slimeite_ingot'
    ]).heated()
    event.remove({output:'exnihilosequentia:end_cake'})
    event.remove({output:'rainbowcompound:blazeite_ingot'})
    event.remove({output:'rainbowcompound:warpedite_ingot'})
    event.remove({output:'rainbowcompound:glowstoneite_ingot'})
    event.remove({output:'rainbowcompound:netherwartite_ingot'})
    event.remove({output:'rainbowcompound:frostite_ingot'})
    event.remove({output:'rainbowcompound:enderite_ingot'})
    event.remove({output:'rainbowcompound:slimeite_ingot'})
    event.remove({output:'rainbowcompound:chorusite_ingot'})
    event.remove({output:'rainbowcompound:obsidianite_ingot'})
    event.recipes.createCompacting('rainbowcompound:blazeite_ingot',[
        'minecraft:netherite_ingot','4x blaze_powder','4x blaze_rod',Fluid.of('lava',500)
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:chorusite_ingot',[
        'minecraft:netherite_ingot','4x chorus_fruit',Fluid.of('create_central_kitchen:dragon_breath',500)
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:warpedite_ingot',[
        'minecraft:netherite_ingot','4x warped_wart_block','4x twisting_vines','4x weeping_vines'
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:netherwartite_ingot',[
        'minecraft:netherite_ingot','4x nether_wart_block','4x nether_wart'
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:slimeite_ingot',[
        'minecraft:netherite_ingot','4x slime_ball','4x slime_block'
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:glowstoneite_ingot',[
        'minecraft:netherite_ingot','4x glowstone','4x glowstone_dust',Fluid.of('lava',500)
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:frostite_ingot',[
        'minecraft:netherite_ingot','4x ice','4x packed_ice','4x blue_ice'
    ]).superheated()
    event.recipes.createCompacting('rainbowcompound:enderite_ingot',[
        'minecraft:netherite_ingot','4x rainbowcompound:polished_ender_quartz','4x ender_eye'
    ]).superheated()
    //剩下的
    event.remove({output:'create:experience_nugget',type:'create:crushing'})
    event.recipes.createMixing([
        Item.of('create:experience_nugget').withChance(0.8),
        Item.of('create:experience_nugget').withChance(0.6),
        Item.of('rainbowcompound:strange_colored_ingot')//.withChance(0.95),
    ],['create:chromatic_compound',Fluid.of('water',500),Fluid.of('exnihilosequentia:sea_water',500)]).superheated()
    event.recipes.createMixing([
        Item.of('phantom_membrane').withChance(0.8),
        Item.of('phantom_membrane').withChance(0.6),
        Item.of('rainbowcompound:strange_colored_ingot')//.withChance(0.95),
    ],['create:chromatic_compound',Fluid.of('water',500),Fluid.of('exnihilosequentia:witch_water',500)]).superheated()
    event.recipes.createMixing([
        Item.of('create:experience_nugget').withChance(0.8),
        Item.of('create:experience_nugget').withChance(0.6),
        'rainbowcompound:rainbow_compound'
    ],['rainbowcompound:rainbow_compound',Fluid.of('water',500),Fluid.of('exnihilosequentia:sea_water',500)]).superheated()
    event.recipes.createMixing([
        Item.of('phantom_membrane').withChance(0.8),
        Item.of('phantom_membrane').withChance(0.6),
        'rainbowcompound:rainbow_compound'
    ],['rainbowcompound:rainbow_compound',Fluid.of('water',500),Fluid.of('exnihilosequentia:witch_water',500)]).superheated()
    event.shaped('kubejs:refined_radiance',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'create:experience_nugget',
        B:'create:chromatic_compound'
    })
    event.shaped('kubejs:shadow_steel',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'phantom_membrane',
        B:'create:chromatic_compound'
    })
    event.recipes.createHaunting('amethyst_shard','create:experience_nugget')
    event.recipes.createCompacting(Item.of('rainbowcompound:obsidianite_ingot'),[
        'kubejs:refined_radiance','kubejs:shadow_steel','4x create:powdered_obsidian',Fluid.of('create_central_kitchen:dragon_breath',500)
    ]).superheated()
    event.remove({output:'rainbowcompound:rainbow_compound'})
    event.remove({output:'rainbowcompound:netherstar_ingot'})
    event.recipes.createMixing('rainbowcompound:rainbow_compound',[
        'create:chromatic_compound','2x kubejs:refined_radiance','2x kubejs:shadow_steel',
        '4x amethyst_shard','4x rainbowcompound:haunted_membrane','rainbowcompound:obsidianite_ingot'
    ]).superheated()
    //dlc
    event.recipes.createMixing('nether_star',['kubejs:refined_radiance','rainbowcompound:rainbow_compound']).superheated()
    event.recipes.createMixing('wither_skeleton_skull',['kubejs:shadow_steel','rainbowcompound:rainbow_compound']).superheated()
    event.recipes.createMixing('rainbowcompound:netherstar_ingot',[
        'rainbowcompound:rainbow_compound','2x kubejs:refined_radiance','2x kubejs:shadow_steel',
        '2x nether_star','2x wither_skeleton_skull','2x rainbowcompound:obsidianite_ingot'
    ]).superheated()
    event.recipes.createMechanicalCrafting('kubejs:cake_shovel',[
      '   B ',
      '  BAB',
      '  AB ',
      ' A   ',
      'A    '
    ],{
      A:'rainbowcompound:obsidianite_stick',
      B:'rainbowcompound:netherstar_ingot'
    })
    event.recipes.createMechanicalCrafting('kubejs:cake_knife',[
      '    B',
      '   AB',
      '  ABB',
      ' A   ',
      'A    '
    ],{
      A:'rainbowcompound:obsidianite_stick',
      B:'rainbowcompound:netherstar_ingot'
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:plates/lapis"
        },
        "transitionalItem": {
          "item": "rainbowcompound:incomplete_integrated_circuit"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              },
              {
                "item": "create:electron_tube"
              }
            ],
            "results": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              },
              {
                "item": "minecraft:redstone"
              }
            ],
            "results": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              },
              {
                "item": "minecraft:redstone"
              }
            ],
            "results": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              },
              {
                "tag": "forge:nuggets/gold"
              }
            ],
            "results": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              },
              {
                "tag": "forge:nuggets/gold"
              }
            ],
            "results": [
              {
                "item": "rainbowcompound:incomplete_integrated_circuit"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "rainbowcompound:integrated_circuit",
            "chance": 120.0
          },
          {
            "item": "rainbowcompound:lapis_sheet",
            "chance": 8.0
          },
          {
            "item": "create:rose_quartz",
            "chance": 8.0
          },
          {
            "item": "create:andesite_alloy",
            "chance": 5.0
          },
          {
            "item": "minecraft:gold_nugget",
            "chance": 3.0
          },
          {
            "item": "create:electron_tube",
            "chance": 2.0
          },
          {
            "item": "create:polished_rose_quartz",
            "chance": 2.0
          },
          {
            "item": "minecraft:lapis_block"
          },
          {
            "item": "minecraft:redstone"
          }
        ],
        "loops": 2
      })
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "rainbowcompound:shadow_mechanism"
      },
      "transitionalItem": {
        "item": "rainbowcompound:incomplete_resonant_assembly"
      },
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            },
            {
              "item": "create:electron_tube"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_shadow_resonant_assembly"
            }
          ]
        }
      ],
      "results": [
        {
          "item": "rainbowcompound:shadow_resonant_assembly",
          "chance": 90.0
        },
        {
          "item": "rainbowcompound:shadow_mechanism",
          "chance": 8.0
        },
        {
          "item": "rainbowcompound:integrated_circuit",
          "chance": 1.0
        },
        {
          "item": "create:precision_mechanism",
          "chance": 1.0
        }
      ],
      "loops": 2
    })
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "rainbowcompound:radiance_mechanism"
      },
      "transitionalItem": {
        "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
      },
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            },
            {
              "item": "create:electron_tube"
            }
          ],
          "results": [
            {
              "item": "rainbowcompound:incomplete_radiance_resonant_assembly"
            }
          ]
        }
      ],
      "results": [
        {
          "item": "rainbowcompound:radiance_resonant_assembly",
          "chance": 90.0
        },
        {
          "item": "rainbowcompound:radiance_mechanism",
          "chance": 8.0
        },
        {
          "item": "rainbowcompound:integrated_circuit",
          "chance": 1.0
        },
        {
          "item": "create:precision_mechanism",
          "chance": 1.0
        }
      ],
      "loops": 2
    })
    event.remove({output:'golden_apple'})
    event.shaped('golden_apple',[
      'AAA',
      'ABA',
      'AAA'
    ],{
      A:'create:golden_sheet',
      B:'create:honeyed_apple'
    })
    event.remove({output:'rainbowcompound:rainbow_apple'})
    event.recipes.createDeploying('rainbowcompound:rainbow_apple',['golden_apple','rainbowcompound:rainbow_compound'])
    event.remove({output:'pipez:item_pipe'})
    event.shaped('8x pipez:item_pipe',[
      'AAA',
      'CBC',
      'AAA'
    ],{
      A:'iron_ingot',
      B:'magma_cream',
      C:'redstone'
    })
    event.remove({output:'pipez:fluid_pipe'})
    event.shaped('8x pipez:fluid_pipe',[
      'AAA',
      'CBC',
      'AAA'
    ],{
      A:'iron_ingot',
      B:'magma_cream',
      C:'bucket'
    })
    event.remove({output:'pipez:universal_pipe'})
    event.shapeless('8x pipez:universal_pipe',['4x pipez:item_pipe','4x pipez:fluid_pipe','create:chromatic_compound'])
    event.remove({output:'pipez:wrench'})
    event.shaped('pipez:wrench',[
      ' AB',
      ' CA',
      'C  '
    ],{
      A:'flint',
      B:'magma_cream',
      C:'stick'
    })
    //龙息增产系列
    /*
    event.recipes.createMixing([
      Item.of('rainbowcompound:glowstoneite_ingot').withChance(0.2),
      Item.of('rainbowcompound:netherwartite_ingot').withChance(0.2),
      Item.of('rainbowcompound:warpedite_ingot').withChance(0.2),
      Item.of('rainbowcompound:chorusite_ingot').withChance(0.2),
      Item.of('rainbowcompound:slimeite_ingot').withChance(0.2),
      Item.of('rainbowcompound:frostite_ingot').withChance(0.2),
      Item.of('rainbowcompound:enderite_ingot').withChance(0.2),
      Item.of('rainbowcompound:blazeite_ingot').withChance(0.2),
      Item.of('rainbowcompound:rainbow_compound').withChance(0.95)
    ],['rainbowcompound:rainbow_compound',Fluid.of('create_central_kitchen:dragon_breath',100)]).superheated()
    event.recipes.createMixing([
      Item.of('rainbowcompound:glowstoneite_ingot').withChance(0.2),
      Item.of('rainbowcompound:netherwartite_ingot').withChance(0.2),
      Item.of('rainbowcompound:warpedite_ingot').withChance(0.2),
      Item.of('rainbowcompound:chorusite_ingot').withChance(0.2),
      Item.of('rainbowcompound:slimeite_ingot').withChance(0.2),
      Item.of('rainbowcompound:frostite_ingot').withChance(0.2),
      Item.of('rainbowcompound:enderite_ingot').withChance(0.2),
      Item.of('rainbowcompound:blazeite_ingot').withChance(0.2),
      Item.of('rainbowcompound:strange_colored_ingot').withChance(0.95)
    ],['create:chromatic_compound',Fluid.of('create_central_kitchen:dragon_breath',100)]).superheated()
    */
    //不，是末地石增产系列
    event.recipes.createDeploying([
      Item.of('nether_wart').withChance(0.9),
      Item.of('nether_wart').withChance(0.8),
      Item.of('nether_wart').withChance(0.7),
      Item.of('nether_wart').withChance(0.6),
      Item.of('exnihilosequentia:crushed_end_stone').withChance(0.9)
    ],['exnihilosequentia:crushed_end_stone','nether_wart'])
    event.recipes.createDeploying([
      Item.of('twisting_vines').withChance(0.9),
      Item.of('twisting_vines').withChance(0.8),
      Item.of('twisting_vines').withChance(0.7),
      Item.of('twisting_vines').withChance(0.6),
      Item.of('exnihilosequentia:crushed_end_stone').withChance(0.9)
    ],['exnihilosequentia:crushed_end_stone','twisting_vines'])
    event.recipes.createDeploying([
      Item.of('weeping_vines').withChance(0.9),
      Item.of('weeping_vines').withChance(0.8),
      Item.of('weeping_vines').withChance(0.7),
      Item.of('weeping_vines').withChance(0.6),
      Item.of('exnihilosequentia:crushed_end_stone').withChance(0.9)
    ],['exnihilosequentia:crushed_end_stone','weeping_vines'])
    //不，是增产末地石系列（
    event.recipes.createMilling([
      Item.of("exnihilosequentia:crushed_end_stone").withChance(0.7),
      Item.of("exnihilosequentia:crushed_end_stone").withChance(0.8)
    ],'end_stone')
    event.recipes.createCrushing([
      Item.of("exnihilosequentia:crushed_end_stone").withChance(0.6),
      Item.of("exnihilosequentia:crushed_end_stone").withChance(0.7),
      Item.of("exnihilosequentia:crushed_end_stone").withChance(0.8),
    ],'end_stone')
})

