onEvent('recipes',event=>{
    event.recipes.createCutting('4x farmersdelight:cake_slice','cake')
    event.recipes.createMechanicalCrafting('kubejs:cake_ingot',[
        'ABA',
        'ABA'
    ],{
        A:'cake',
        B:'farmersdelight:cake_slice'
    })
    event.recipes.createMechanicalCrafting('kubejs:double_cake_ingot',[
        'ABBBBBA',
        'BDDCDDB',
        'BDDCDDB',
        'ABBBBBA'
    ],{
        B:'cake',
        A:'kubejs:cake_ingot',
        C:'enchanted_golden_apple',
        D:'rainbowcompound:netherstar_ingot'
    })
    event.recipes.createMechanicalCrafting('kubejs:singularity',/*[
        '   D     ',
        '  DBD    ',
        '  DBCDDD ',
        '  DBCCCCD',
        ' DBB BBD ',
        'DCCCCBD  ',
        ' DDDCBD  ',
        '    DBD  ',
        '     D   '
    ],{
        B:'rainbowcompound:rainbow_compound',
        C:'rainbowcompound:netherstar_ingot',
        D:'kubejs:double_cake_ingot'
    }*/[
        '   A   A ',
        'A  F  G  ',
        ' E F G   ',
        '  EFGHHHA',
        '   EIJ   ',
        'ADDDCBJ  ',
        '   C B J ',
        '  C  B  A',
        ' A   A   ',
    ],{
        A:'kubejs:double_cake_ingot',
        B:'iron_block',
        C:'copper_block',
        D:'gold_block',
        E:'create:zinc_block',
        F:'diamond_block',
        G:'lapis_block',
        H:'emerald_block',
        I:'netherite_block',
        J:'redstone_block'
    })
    event.remove({output:'createutilities:polished_amethyst'})
    event.remove({output:'createutilities:void_steel_ingot',type:'create:mixing'})
    event.remove({output:'createutilities:graviton_tube'})
    event.recipes.createDeploying('createutilities:polished_amethyst',['kubejs:refined_radiance','kubejs:singularity']).keepHeldItem()
    event.recipes.createDeploying('createutilities:void_steel_ingot',['kubejs:shadow_steel','kubejs:singularity']).keepHeldItem()
    event.recipes.createMechanicalCrafting('createutilities:graviton_tube',[
        '   CCC   ',
        '  CF DC  ',
        '  CF DC  ',
        '  C E C  ',
        '  CD FC  ',
        '  CD FC  ',
        ' ABGBGBA ',
        ' AAAAAAA ',
        ' A A A A ',
    ],{
        A:'createutilities:void_steel_ingot',
        B:'kubejs:cake_ingot',
        C:'createutilities:polished_amethyst',
        D:'kubejs:shadow_steel',
        F:'kubejs:refined_radiance',
        E:'kubejs:singularity',
        G:'kubejs:double_cake_ingot'
    })
    event.recipes.createMechanicalCrafting('kubejs:endest_pearl',[
        /*
        ' C  BBBB ',
        'BC CBCCCC',
        'BC CB    ',
        'BC CBCCC ',
        'BBBB BBBB',
        ' CCCBC CB',
        '    BC CB',
        'CCCCBC CB',
        ' BBBB  C ',
        */
        '   CB    ',
        '    CB   ',
        '  BCACB  ',
        ' BCBCBC C',
        'BCACACACB',
        'C CBCBCB ',
        '  BCACB  ',
        '   BC    ',
        '    BC   ',
    ],{
        A:'createutilities:graviton_tube',
        B:'ender_pearl',
        C:'end_stone'
    })
    event.recipes.createMechanicalCrafting('kubejs:infinity_catalyst',[
        'H   D   I',
        '  H D I  ',
        ' HHD DII ',
        '  C   B  ',
        'CC  A  BB',
        '  C   B  ',
        ' GGE EFF ',
        '  G E F  ',
        'G   E   F',
    ],{
        A:'kubejs:endest_pearl',
        C:'rainbowcompound:blazeite_ingot',
        I:'rainbowcompound:warpedite_ingot',
        G:'rainbowcompound:glowstoneite_ingot',
        H:'rainbowcompound:netherwartite_ingot',
        F:'rainbowcompound:frostite_ingot',
        E:'rainbowcompound:enderite_ingot',
        D:'rainbowcompound:chorusite_ingot',
        B:'rainbowcompound:slimeite_ingot',
        //J:'kubejs:cake_ingot'
    })
    event.recipes.createMechanicalCrafting('kubejs:infinity_ingot',[
        ' AAAAAAA ',
        'ACCC BBBA',
        'A DDEDD A',
        'ABBB CCCA',
        ' AAAAAAA '
    ],{
        A:'kubejs:double_cake_ingot',
        B:'createutilities:void_steel_ingot',
        C:'createutilities:polished_amethyst',
        D:'kubejs:infinity_catalyst',
        E:'kubejs:singularity'
    })
})
onEvent('item.tags',event=>
    event.add('farmersdelight:tools/knives','kubejs:infinity_cake_knife')
)
onEvent('recipes',event=>{
    event.recipes.createMechanicalCrafting(Item.of('kubejs:infinity_cake_knife',{'Unbreakable':true}),[
        '   CB',
        '  CBB',
        ' CBBB',
        'CBBB ',
        ' AA  ',
        'AA   '
    ],{
        A:'kubejs:double_cake_ingot',
        B:'kubejs:cake_ingot',
        C:Item.of('kubejs:cake_knife').ignoreNBT()
    })
    event.recipes.createMechanicalCrafting(Item.of('kubejs:infinity_cake_shovel',{'Unbreakable':true}),[
        '   CC ',
        '  BBBC',
        '  BABC',
        ' BABB ',
        ' AB   ',
        'A     '
    ],{
        A:'kubejs:double_cake_ingot',
        B:'kubejs:cake_ingot',
        C:Item.of('kubejs:cake_shovel').ignoreNBT()
    })
    event.recipes.createMechanicalCrafting(Item.of('storagedrawers:creative_storage_upgrade'),[
        '  D C  ',
        '  DAC  ',
        'DDD CCC',
        ' A A A ',
        'EEE BBB',
        '  EAB  ',
        '  E B  ',
    ],{
        A:'kubejs:singularity',
        B:'create:item_vault',
        C:'chest',
        D:'sophisticatedbackpacks:backpack',
        E:'storagedrawers:oak_full_drawers_1'
    })
    event.recipes.createMechanicalCrafting('create:creative_motor',[
        '     CCC ',
        'B   CAACC',
        'BB CAAAEC',
        'DDDAAAEBC',
        'BB CAAAEC',
        'B   CAACC',
        '     CCC ',
    ],{
        A:'create:steam_engine',
        B:'createutilities:graviton_tube',
        C:'create:white_sail',
        D:'create:shaft',
        E:'createutilities:void_motor'
    })
    event.recipes.createMechanicalCrafting('create:creative_blaze_cake',[
        ' AAAAAAA ',
        'AAEECEEAA',
        'AEBBCBBEA',
        'AEBDCDBEA',
        'ACCCDCCCA',
        'AEBDCDBEA',
        'AEBBCBBEA',
        'AAEECEEAA',
        ' AAAAAAA ',
    ],{
        A:'create:blaze_cake',
        B:'end_crystal',
        C:'kubejs:endest_pearl',
        D:'kubejs:singularity',
        E:'fire_charge'
    })
    event.recipes.createMixing('8x string',[Fluid.of('milk',50),Fluid.of('kubejs:protein',50)]).heated()
    event.recipes.createMechanicalCrafting('create:creative_fluid_tank',[
        'ABBBBBBBA',
        'BAFFBFFAB',
        'BFAEBEAFB',
        'BFECCCEFB',
        'BBBCDCBBB',
        'BFECCCEFB',
        'BFAEBEAFB',
        'BAFFBFFAB',
        'ABBBBBBBA',
    ],{
        A:'kubejs:infinity_catalyst',
        B:'create:fluid_tank',
        C:'createutilities:void_tank',
        D:'bucket',
        F:'create:fluid_pipe',
        E:'kubejs:endest_pearl'
    })
    event.recipes.createMechanicalCrafting('create:creative_crate',[
        'CCCCABBBB',
        'CBBCABCCB',
        'CBBCABCCB',
        'CCCCABBBB',
        'AAAAAAAAA',
        'BBBBACCCC',
        'BCCBACBBC',
        'BCCBACBBC',
        'BBBBACCCC',
    ],{
        A:'storagedrawers:creative_storage_upgrade',
        B:'kubejs:infinity_ingot',
        C:'kubejs:infinity_catalyst'
    })
    event.recipes.createMechanicalCrafting('storagedrawers:creative_vending_upgrade',[
        'CCCCABBBB',
        'CBBCABCCB',
        'CBBCABCCB',
        'CCCCABBBB',
        'AAAAAAAAA',
        'BBBBACCCC',
        'BCCBACBBC',
        'BCCBACBBC',
        'BBBBACCCC',
    ],{
        A:'storagedrawers:creative_storage_upgrade',
        C:'kubejs:infinity_ingot',
        B:'kubejs:infinity_catalyst'
    })
    event.recipes.createDeploying('kubejs:protein_bucket',['kubejs:oil_bucket',Item.of('kubejs:infinity_cake_shovel').ignoreNBT()])
    event.recipes.createDeploying('milk_bucket',['kubejs:protein_bucket',Item.of('kubejs:infinity_cake_shovel').ignoreNBT()])
    event.recipes.createDeploying('kubejs:fluid1_bucket',['milk_bucket',Item.of('kubejs:infinity_cake_shovel').ignoreNBT()])
})