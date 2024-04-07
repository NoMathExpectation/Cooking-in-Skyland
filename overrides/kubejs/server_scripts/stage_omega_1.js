onEvent('recipes', event => {
    event.remove({ output: 'integrateddynamics:crystalized_menril_block'})
    event.remove({ output: 'integrateddynamics:menril_resin' })
    event.remove({ output: 'integrateddynamics:crystalized_menril_chunk' })
    event.remove({ output: 'integrateddynamics:squeezer' })
    event.remove({ output: 'integrateddynamics:drying_basin' })
    event.remove({ output: 'integrateddynamics:machanical_squeezer' })
    event.remove({ output: 'integrateddynamics:machanical_drying_basin' })
    event.remove({ output: 'integrateddynamics:crystalized_chorus_block' })
    event.remove({ output: 'integrateddynamics:crystalized_chorus_chunk' })
    event.remove({ output: 'integrateddynamics:liquid_chorus' })
    // modified menril_resin recipes.
    // protein: menril_resin = '1 -> 1'
    // popped_chorus_fruit: liquid_chorus = super_heated ? '1 -> 500' : (heated ? None : '1 -> 100')
    event.recipes.createCompacting(Fluid.of('integrateddynamics:menril_resin', 1000),
        Fluid.of('kubejs:protein', 1000))
    event.recipes.createCompacting('integrateddynamics:crystalized_menril_block',
        Fluid.of('integrateddynamics:menril_resin', 1000))
    event.recipes.createCompacting('minecraft:popped_chorus_fruit',
        Fluid.of('integrateddynamics:liquid_chorus', 100)).heated()
    event.recipes.createCompacting('minecraft:popped_chorus_fruit',
        Fluid.of('integrateddynamics:liquid_chorus', 500)).superheated()
    event.shaped('9x integrateddynamics:crystalized_menril_chunk', [
        '   ',
        ' A ',
        '   '
    ], {
        A: 'integrateddynamics:crystalized_menril_block',
    })
    event.shaped('integrateddynamics:crystalized_menril_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'integrateddynamics:crystalized_menril_chunk',
    })
    event.shaped('integrateddynamics:crystalized_chorus_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'integrateddynamics:crystalized_chorus_chunk',
    })
    event.shaped('9x integrateddynamics:crystalized_chorus_chunk', [
        '   ',
        ' A ',
        '   '
    ], {
        A: 'integrateddynamics:crystalized_chorus_block',
    })
    // experience_bottle
    // experience means you can fly
    event.recipes.createCompacting('512x experience_bottle',
        Fluid.of('minecraft:milk', 1000)).superheated()
    event.recipes.createCompacting('64x experience_bottle',
        Fluid.of('minecraft:milk', 1000)).heated()
    event.recipes.createCompacting('8x experience_bottle',
        Fluid.of('minecraft:milk', 1000))
    event.recipes.createCompacting('64x experience_bottle',
        Fluid.of('kubejs:protein', 1000)).superheated()
    event.recipes.createCompacting('8x experience_bottle',
        Fluid.of('kubejs:protein', 1000)).heated()
    event.recipes.createCompacting('experience_bottle',
        Fluid.of('kubejs:protein', 1000))

    event.recipes.createMixing('integrateddynamics:menril_berries', [
        'integrateddynamics:crystalized_menril_chunk', Fluid.of('minecraft:water', 100)]).heated()
})
