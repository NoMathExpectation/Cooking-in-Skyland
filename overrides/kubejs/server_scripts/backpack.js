onEvent('recipes',event=>{
    event.remove({output:'sophisticatedbackpacks:iron_backpack',input:'sophisticatedbackpacks:backpack'})
    event.remove({output:'sophisticatedbackpacks:backpack'})
    event.shaped('sophisticatedbackpacks:backpack',[
        'ABA',
        'ACA',
        'BBB'
    ],{
        A:'string',
        B:'hay_block',
        C:'#forge:chests'
    })
    event.remove({output:'sophisticatedbackpacks:feeding_upgrade'})
    event.shaped('sophisticatedbackpacks:feeding_upgrade',[
        ' A ',
        'BCB',
        ' A '
    ],{
        A:'farmersdelight:tomato',
        B:'farmersdelight:cabbage',
        C:'sophisticatedbackpacks:upgrade_base'
    })
    event.replaceInput({output:'sophisticatedbackpacks:void_upgrade'},'ender_pearl','trashcans:item_trash_can')
    event.remove({output:'sophisticatedbackpacks:tank_upgrade'})
    event.shaped('sophisticatedbackpacks:tank_upgrade',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'create:fluid_tank',
        B:'sophisticatedbackpacks:upgrade_base'
    })
    event.replaceInput({output:'sophisticatedbackpacks:pump_upgrade'},'sophisticatedbackpacks:upgrade_base','sophisticatedbackpacks:tank_upgrade')
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_1'})
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'create:zinc_block',
        B:'iron_block',
        C:'sophisticatedbackpacks:stack_upgrade_starter_tier'
    })
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_3'})
    event.recipes.createMechanicalCrafting('sophisticatedbackpacks:stack_upgrade_tier_3',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'emerald_block',
        B:'lapis_block',
        C:'sophisticatedbackpacks:stack_upgrade_tier_2'
    })
    event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_4'})
    event.recipes.createMechanicalCrafting('sophisticatedbackpacks:stack_upgrade_tier_4',[
        ' ABA ',
        'AABAA',
        'BBCBB',
        'AABAA',
        ' ABA '
    ],{
        A:'diamond_block',
        B:'netherite_block',
        C:'sophisticatedbackpacks:stack_upgrade_tier_3'
    })

    event.remove({output:'sophisticatedbackpacks:battery_upgrade'})
    //背包系列
    
    /*Ingredient.registerCustomIngredientAction('packupgrade',(A,C)=>{
        let D = C.get(C.find(Ingredient.of('#curios:back'))).nbt
        if (A.nbt == null)
            A.nbt = {}
        A.nbt = A.nbt.merge({uuid:D.get()})
        return A;
    })
    Ingredient.registerCustomIngredientAction('packupgrade2',(A,C)=>{
        A.nbt = C.nbt
        return A;
    })*/

    event.remove({output:'sophisticatedbackpacks:iron_backpack'})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
            "type": "sophisticatedcore:item_enabled"
          }
        ],
        "pattern": [
          "AIA",
          "IBI",
          "AIA"
        ],
        "key": {
          "I": {
            "tag": "forge:ingots/iron"
          },
          "B": {
            "item": "sophisticatedbackpacks:copper_backpack"
          },
          'A':
          {
            'item':'create:zinc_ingot'
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:iron_backpack"
        }
      })
    /*event.shaped('sophisticatedbackpacks:iron_backpack',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'create:zinc_ingot',
        B:'iron_ingot',
        C:'sophisticatedbackpacks:copper_backpack'
    })*/
    event.remove({output:'sophisticatedbackpacks:diamond_backpack'})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "sophisticatedbackpacks:diamond_backpack",
            "type": "sophisticatedcore:item_enabled"
          }
        ],
        "pattern": [
          "AIA",
          "IBI",
          "AIA"
        ],
        "key": {
          "I": {
            "item": "lapis_lazuli"
          },
          "B": {
            "item": "sophisticatedbackpacks:gold_backpack"
          },
          'A':
          {
            'item':'emerald'
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:diamond_backpack"
        }
      })
    /*event.recipes.createMechanicalCrafting('sophisticatedbackpacks:diamond_backpack',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'emerald',
        B:'lapis_lazuli',
        C:'sophisticatedbackpacks:gold_backpack'
    })*/
    event.remove({output:'sophisticatedbackpacks:netherite_backpack'})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "sophisticatedbackpacks:netherite_backpack",
            "type": "sophisticatedcore:item_enabled"
          }
        ],
        "pattern": [
          "AIA",
          "IBI",
          "AIA"
        ],
        "key": {
          "I": {
            "item": "netherite_block"
          },
          "B": {
            "item": "sophisticatedbackpacks:diamond_backpack"
          },
          'A':
          {
            'item':'diamond_block'
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:netherite_backpack"
        }
      })
    /*event.recipes.createMechanicalCrafting('sophisticatedbackpacks:netherite_backpack',[
        ' ABA ',
        'AABAA',
        'BBCBB',
        'AABAA',
        ' ABA '
    ],{
        A:'diamond',
        B:'netherite_ingot',
        C:'sophisticatedbackpacks:diamond_backpack'
    })*/
})