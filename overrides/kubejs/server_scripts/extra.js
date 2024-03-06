onEvent('recipes',event=>{
    event.remove({output:'solsweetpotato:food_book'})
    event.shapeless('solsweetpotato:food_book',['book','rotten_flesh'])
})