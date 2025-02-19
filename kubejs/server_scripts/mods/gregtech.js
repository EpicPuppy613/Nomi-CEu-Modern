ServerEvents.recipes(event => {

    event.shapeless('gtceu:red_alloy_dust', ['gtceu:copper_dust', '4x minecraft:redstone'])

    event.shapeless('gtceu:conductive_alloy_dust', ['minecraft:redstone', 'gtceu:iron_dust'])

    event.recipes.gtceu.extractor('one_experience_fluid')
        .itemInputs('miniutilities:experience_pearl')
        .outputFluids(Fluid.of('enderio:xp_juice', 140))
        .duration(80)
        .EUt(32)

    //DML MATTERS
    event.recipes.gtceu.extractor('overworld_fluid')
        .itemInputs('hostilenetworks:overworld_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 200))
        .duration(40)
        .EUt(32)
    event.recipes.gtceu.extractor('nether_experience_fluid')
        .itemInputs('hostilenetworks:nether_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 400))
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extractor('ender_experience_fluid')
        .itemInputs('hostilenetworks:end_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 500))
        .duration(100)
        .EUt(32)

    event.recipes.gtceu.fluid_solidifier('one_experience_solid')
        .itemOutputs('miniutilities:experience_pearl')
        .inputFluids(Fluid.of('enderio:xp_juice', 140))
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    //IMPOSSIBLE REALM DATA
    event.shaped(
        'kubejs:impossible_realm_data', [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A: 'hostilenetworks:overworld_prediction',
            B: 'miniutilities:experience_pearl'
        }
    )
    event.shaped(
        '2x kubejs:impossible_realm_data', [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A: 'hostilenetworks:nether_prediction',
            B: 'miniutilities:experience_pearl'
        }
    )
    event.shaped(
        '4x kubejs:impossible_realm_data', [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A: 'hostilenetworks:end_prediction',
            B: 'miniutilities:experience_pearl'
        }
    )

    //NETHER STAR RECIPES
    event.remove({ id: "hostilenetworks:living_matter/extraterrestrial/nether_star" })
    event.remove({ id: "gtceu:implosion_compressor/implodedust_nether_star_tnt" })

    event.recipes.gtceu.forge_hammer('nether_star_block_to_star')
        .itemInputs('gtceu:nether_star_block')
        .itemOutputs('9x minecraft:nether_star')
        .duration(100)
        .EUt(24)

    event.recipes.gtceu.implosion_compressor('implosion_star_tnt')
        .itemInputs('4x gtceu:nether_star_dust', '2x minecraft:tnt', 'gtceu:dark_ash_small_dust')
        .itemOutputs('3x minecraft:nether_star')
        .duration(20)
        .EUt(30)


    //SPACE STUFF

    event.recipes.gtceu.centrifuge('moon_deuterium')
        .itemInputs('kubejs:moon_dust')
        .outputFluids(Fluid.of('gtceu:deuterium', 100))
        .duration(200)
        .EUt(20)

    event.shaped(
        'kubejs:quantum_flux', [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: 'enderio:pulsating_crystal',
            B: 'hostilenetworks:end_prediction'
        }
    )


    event.shaped(
        'kubejs:quantum_flux', [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: 'minecraft:diamond',
            B: 'kubejs:moon_dust'
        }
    )

    event.recipes.gtceu.extractor('extract_quantum_flux')
        .itemInputs('kubejs:impossible_realm_data')
        .itemOutputs('kubejs:quantum_flux')
        .duration(100)
        .EUt(3000)


    //LAIR DATA
    event.shaped(
        'kubejs:dragon_lair_data', [
            'ABB',
            'BBB',
            'BBB'
        ], {
            A: 'kubejs:impossible_realm_data',
            B: 'hostilenetworks:end_prediction'
        }
    )

    event.shaped(
        'kubejs:wither_realm_data', [
            'ABB',
            'BBB',
            'BBB'
        ], {
            A: 'kubejs:impossible_realm_data',
            B: 'hostilenetworks:nether_prediction'
        }
    )



})