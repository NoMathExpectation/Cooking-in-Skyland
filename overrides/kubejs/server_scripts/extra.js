onEvent('recipes',event=>{
    event.remove({output:'solsweetpotato:food_book'})
    event.shapeless('solsweetpotato:food_book',['book','rotten_flesh'])
    //event.remove({output:Fluid.of('lava'),type:'create:mixing'})
    event.recipes.createMixing(Fluid.of('lava',300),'blackstone').superheated()
    event.remove({output:'solcarrot:food_book'})
    event.shapeless('solcarrot:food_book','solsweetpotato:food_book')
    event.shapeless('solsweetpotato:food_book','solcarrot:food_book')
    event.replaceInput({output:'storagedrawers:controller'},'diamond','emerald')
    event.replaceInput({output:'storagedrawers:controller'},'comparator','redstone')
    event.replaceInput({output:'storagedrawers:controller_slave'},'comparator','redstone')
    event.replaceInput({output:'toms_storage:ts.inventory_connector'},'diamond','emerald')
    event.replaceInput({output:'toms_storage:ts.inventory_connector'},'ender_pearl','lapis_lazuli')
    event.replaceInput({output:'toms_storage:ts.storage_terminal'},'glowstone','jack_o_lantern')
    event.replaceInput({output:'toms_storage:ts.wireless_terminal'},'glowstone','jack_o_lantern')
    event.replaceInput({output:'toms_storage:ts.wireless_terminal'},'spyglass','create:brass_hand') 
    event.replaceInput({output:'toms_storage:ts.wireless_terminal'},'ender_pearl','kubejs:stupid_zombie')   
    /*event.remove({output:'toms_storage:ts.adv_wireless_terminal'})
    event.shaped('toms_storage:ts.adv_wireless_terminal',[
        'A A',
        ' B ',
        'A A'
    ],{
        A:'netherite_ingot',
        B:'ender_pearl'
    })*/
    event.remove({output:'farmersdelight:organic_compost'})
    event.shapeless('farmersdelight:organic_compost',['dirt','2x farmersdelight:straw','3x rotten_flesh','3x bone_meal'])
    //工业切割
    event.recipes.createCutting('farmersdelight:minced_beef','beef')
    event.recipes.createCutting('porkchop','farmersdelight:ham')
    event.recipes.createCutting('farmersdelight:cooked_mutton_chops','cooked_mutton')
    event.recipes.createCutting('farmersdelight:salmon_slice','salmon')
    event.recipes.createCutting('cooked_porkchop','farmersdelight:smoked_ham')
    event.recipes.createCutting('farmersdelight:chicken_cuts','chicken')
    event.recipes.createCutting('farmersdelight:cooked_cod_slice','cooked_cod')
    event.recipes.createCutting(Item.of('farmersdelight:raw_pasta').withChance(0.5),'#forge:dough/wheat')
    event.recipes.createCutting([
        Item.of('farmersdelight:kelp_roll_slice').withChance(0.7),
        Item.of('farmersdelight:kelp_roll_slice').withChance(0.8)
    ],'farmersdelight:kelp_roll')
    event.recipes.createCutting(Item.of('kubejs:undo_sandwich').withChance(0.5),'bread')
    event.recipes.createCutting('farmersdelight:mutton_chops','mutton')
    event.recipes.createCutting('farmersdelight:cooked_salmon_slice','cooked_salmon')
    event.recipes.createCutting('farmersdelight:bacon','porkchop')
    event.recipes.createCutting('farmersdelight:cabbage_leaf','farmersdelight:cabbage')
    event.recipes.createCutting('farmersdelight:cod_slice','cod')
    event.recipes.createCutting('farmersdelight:cooked_chicken_cuts','cooked_chicken')
    event.recipes.createCutting([
        Item.of("red_mushroom").withChance(0.3),
        Item.of("red_mushroom").withChance(0.4),
        Item.of("red_mushroom").withChance(0.5),
        Item.of("red_mushroom").withChance(0.6),
        Item.of("red_mushroom").withChance(0.7),
    ],'farmersdelight:red_mushroom_colony')
    event.recipes.createCutting([
        Item.of("brown_mushroom").withChance(0.3),
        Item.of("brown_mushroom").withChance(0.4),
        Item.of("brown_mushroom").withChance(0.5),
        Item.of("brown_mushroom").withChance(0.6),
        Item.of("brown_mushroom").withChance(0.7),
    ],'farmersdelight:brown_mushroom_colony')

    event.shaped('lava_bucket',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'coal',
        B:'bucket'
    })
    event.shaped('kubejs:fake_bread',[
        'AAA'
    ],{
        A:'wheat'
    })
    event.shapeless('3x wheat','kubejs:fake_bread')
    event.blasting('create:zinc_block','create:raw_zinc_block')
    event.blasting('gold_block','raw_gold_block')
    event.blasting('copper_block','raw_copper_block')
    event.blasting('iron_block','raw_iron_block')
    event.shaped('kubejs:infinity_block',[
        'AAA',
        'AAA',
        'AAA'
    ],{
        A:"kubejs:infinity_ingot"
    })
    event.shapeless('9x kubejs:infinity_ingot','kubejs:infinity_block')
    //附魔书
    event.shaped(Item.of('enchanted_book').enchant('unbreaking',1),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'zombie_head',
        B:'book'
    })
    event.shaped(Item.of('enchanted_book').enchant('unbreaking',2),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'kubejs:stupid_zombie',
        B:Item.of('enchanted_book').enchant('unbreaking',1)
    })
event.shaped(Item.of('enchanted_book').enchant('unbreaking',3),[
    ' A ',
    'ABA',
    ' A '
],{
    A:'kubejs:smart_zombie',
    B:Item.of('enchanted_book').enchant('unbreaking',2)
    })

    event.shaped(Item.of('enchanted_book').enchant('create:capacity',3),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'experience_bottle',
        B:Item.of('enchanted_book').enchant('create:capacity',2)
        })
    event.shaped(Item.of('enchanted_book').enchant('create:capacity',2),[
            ' A ',
            'ABA',
            ' A '
        ],{
            A:'experience_bottle',
            B:Item.of('enchanted_book').enchant('create:capacity',1)
        })
    event.shaped(Item.of('enchanted_book').enchant('create:capacity',1),[
            ' A ',
            'ABA',
            ' A '
        ],{
            A:'experience_bottle',
            B:'book'
        })
    event.remove({output:'chancecubes:chance_cube'})
    event.shaped('chancecubes:chance_cube',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'diamond',
        B:'diamond_block'
    })
})
