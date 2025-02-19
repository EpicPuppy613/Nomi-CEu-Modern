ServerEvents.recipes(event => {
    event.shaped(

        // Space Suit
        '4x kubejs:thermal_cloth', [
            'SSS',
            'SSS',
            'SSS'
        ], {
            S: 'minecraft:string'
        })

    event.shaped(
        'kubejs:unprepared_space_helmet', [
            'TTT',
            'T T',
            '   '
        ], {
            T: 'kubejs:thermal_cloth'
        })

    event.shaped(
        'kubejs:unprepared_space_chestpiece', [
            'T T',
            'TTT',
            'TTT'
        ], {
            T: 'kubejs:thermal_cloth'
        })

    event.shaped(
        'kubejs:unprepared_space_leggings', [
            'TTT',
            'T T',
            'T T'
        ], {
            T: 'kubejs:thermal_cloth'
        })

    event.shaped(
        'kubejs:unprepared_space_boots', [
            '   ',
            'T T',
            'T T'
        ], {
            T: 'kubejs:thermal_cloth'
        })

    event.shaped(
        'kubejs:pressure_layer', [
            'CPC',
            'CPC',
            'CPC'
        ], {
            C: 'kubejs:thermal_cloth',
            P: 'gtceu:black_steel_plate'
        })

    event.shaped(
        'kubejs:radiation_layer', [
            'CPC',
            'CPC',
            'CPC'
        ], {
            C: 'kubejs:thermal_cloth',
            P: 'gtceu:lead_plate'
        })

    event.remove({ id: "gcyr:shaped/space_helmet" })
    event.recipes.gtceu.assembler("space_helmet")
        .itemInputs("kubejs:unprepared_space_helmet", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_helmet")
        .duration(300)
        .EUt(30)

    event.remove({ id: "gcyr:shaped/space_chestplate" })
    event.recipes.gtceu.assembler("space_chestplate")
        .itemInputs("kubejs:unprepared_space_chestpiece", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_chestplate")
        .duration(300)
        .EUt(30)

    event.remove({ id: "gcyr:shaped/space_legs" })
    event.recipes.gtceu.assembler("space_leggings")
        .itemInputs("kubejs:unprepared_space_leggings", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_leggings")
        .duration(300)
        .EUt(30)

    event.remove({ id: "gcyr:shaped/space_boots" })
    event.recipes.gtceu.assembler("space_boots")
        .itemInputs("kubejs:unprepared_space_boots", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_leggings")
        .duration(300)
        .EUt(30)

    // ID Chip
    event.remove({ id: "gcyr:shapeless/id_chip" })
    event.shaped(
        'gcyr:id_chip', [
            'VEC',
            'VPC',
            'VSC'
        ], {
            E: 'gtceu:mv_emitter',
            S: 'gtceu:mv_sensor',
            V: 'gtceu:vibrant_alloy_plate',
            P: 'gtceu:glass_plate',
            C: '#gtceu:circuits/mv'
        })

    // Rocket Scanner
    event.remove({ id: "gcyr:shaped/rocket_scanner" })
    event.recipes.extendedcrafting.shaped_table(
        'gcyr:rocket_scanner', [
            "RPEPR",
            "PXCXP",
            "PCACP",
            "PXCXP",
            "RPEPR"
        ], {
            P: 'gtceu:double_steel_plate',
            R: 'gtceu:hv_robot_arm',
            X: 'gtceu:hv_machine_casing',
            A: 'gtceu:mv_assembler',
            E: 'gtceu:hv_emitter',
            C: '#gtceu:circuits/hv'
        }, 2
    )

    //Motors and Tanks
    event.shaped(
        'gcyr:basic_rocket_motor', [
            ' P ',
            'PPP',
            'TTT'
        ], {
            P: 'gtceu:double_steel_plate',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').strongNBT()
        })

    event.shaped(
        'gcyr:basic_fuel_tank', [
            'PTP',
            'PTP',
            'PTP'
        ], {
            P: 'gtceu:stainless_steel_plate',
            T: 'enderio:fluid_tank'
        })

    // Launch Pad           
    event.shaped(
        '9x gcyr:launch_pad', [
            'CCC',
            'CCC',
            'CCC'
        ], {
            C: 'gtceu:concrete_dust'
        })

})