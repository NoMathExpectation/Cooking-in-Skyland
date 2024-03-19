onEvent('recipes',event=>{
    event.remove({output:'solsweetpotato:food_book'})
    event.shapeless('solsweetpotato:food_book',['book','rotten_flesh'])
    //event.remove({output:Fluid.of('lava'),type:'create:mixing'})
    event.recipes.createMixing(Fluid.of('lava',300),'blackstone').superheated()
    event.remove({output:'solcarrot:food_book'})
    event.shapeless('solcarrot:food_book','solsweetpotato:food_book')
    event.shapeless('solsweetpotato:food_book','solcarrot:food_book')
<<<<<<< HEAD
})
=======
})
>>>>>>> 3c107d1 (0.9.1)
