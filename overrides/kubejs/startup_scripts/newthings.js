onEvent('item.registry',event=>{
    event.create('cold_rice').maxStackSize(16)
        .food(food=>{
            food
                .hunger(2)
                .saturation(0.5)
        })
        .texture('kubejs:item/cold_rice')
        .displayName('冷米饭')

    event.create('uncooked_rice').maxStackSize(16)
        .texture('kubejs:item/uncooked_rice')
        .displayName('生米饭')

    event.create('incomplete_blackstone','create:sequenced_assembly')
        .texture('kubejs:item/incomplete_blackstone')
        .displayName('深邃石粉')

    event.create('incomplete_gilded_blackstone','create:sequenced_assembly')
        .texture('kubejs:item/incomplete_gilded_blackstone')
        .displayName('深邃镶金石粉')  

    event.create('incomplete_sandwich','create:sequenced_assembly')
        .texture('kubejs:item/incomplete_sandwich')
        .displayName('切片面包')

    event.create('undo_sandwich')
        .food(food=>{
            food
                .hunger(5)
                .saturation(0.5454)
        })
        .texture('kubejs:item/incomplete_sandwich')
        .displayName('切片面包')    

    event.create('fishfood')
        .texture('kubejs:item/fishfood')
        .displayName('鱼食')

    event.create('incomplete_stupid_zombie','create:sequenced_assembly')
        .texture('kubejs:item/stupid_zombie')
        .displayName('加工中的机械僵尸头')

    event.create('incomplete_smart_zombie','create:sequenced_assembly')
        .texture('kubejs:item/smart_zombie')
        .displayName('吃饭中的智慧僵尸头')

    event.create('stupid_zombie')
        .texture('kubejs:item/stupid_zombie')
        .displayName('机械僵尸头')

    event.create('smart_zombie')
        .texture('kubejs:item/smart_zombie')
        .displayName('智慧僵尸头')

    event.create('ice_cube')
        .texture('kubejs:item/ice_cube')
        .displayName('冰块')

    event.create('incomplete_sushi','create:sequenced_assembly')
        .texture('kubejs:item/incomplete_sushi')
        .displayName('未完成的寿司卷')

    event.create('expensive_sushi').maxStackSize(1)
        .texture('kubejs:item/expensive_sushi')
        .displayName('§e“§6天§c才§4の§b便§9当§2”§f————大师の作 ￥32888')
        .glow(true)

    event.create('incomplete_ham','create:sequenced_assembly')
        .texture('kubejs:item/smoked_ham')
        .displayName('加工中的火腿')
        
    event.create('incomplete_burner','create:sequenced_assembly')
        .modelJson({parent:'create:block/blaze_burner/block_with_fire'})
        .displayName('行星发动机(点火中)')

    event.create('shadow_steel')
        .texture('kubejs:item/shadow_steel')
        .displayName('§8§l极夜·暗影钢')

    event.create('refined_radiance')
        .texture('kubejs:item/refined_radiance')
        .displayName('§l圣霭·光明石')
        .glow(true)

    event.create('super_driller')
        .modelJson({parent:'create:block/mechanical_drill/item'})
        .displayName('突破天际的钻头!')
        .glow(true)

    event.create('cake_shovel','shovel')
        .tier('iron')
        .glow(true)
        .texture('rainbowcompound:item/rainbow_shovel')
        .displayName('奶油刮刀')

    event.create('cake_knife','sword')
        .tier('iron')
        .glow(true)
        .texture('rainbowcompound:item/rainbow_knife')
        .displayName('蛋糕切刀')

})

