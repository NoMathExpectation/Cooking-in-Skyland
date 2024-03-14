onEvent('recipes',event=>{
    event.remove({mod:'functionalstorage'})
    event.remove({output:"ironchest:crystal_chest"})
    event.remove({input:"ironchest:crystal_chest"})
    event.remove({output:"ironchest:diamond_to_crystal_chest_upgrade"})
    event.remove({output:'create:tree_fertilizer'})
})