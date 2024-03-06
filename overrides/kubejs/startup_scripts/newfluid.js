onEvent('fluid.registry',event=>{
    event.create('oil')
        .displayName('食用油')
        .bucketColor(0xcdcd00)
        .thickTexture(0xCDCD00)
        //.thinTexture(0xCDCD00); 
    event.create('protein')
        .displayName('蛋白质液')
        .bucketColor(0xFFE7AF)
        .thinTexture(0xFFE7AF)
    event.create('happywater')
        .displayName('烈焰人快乐水')
        .stillTexture('kubejs:fluid/happy')
        .flowingTexture('kubejs:fluid/happy')
        .bucketColor(0xFFA199)

})
