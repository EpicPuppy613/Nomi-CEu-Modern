ItemEvents.modification(event => {
    event.modify('minecraft:sugar_cane', item => { item.burnTime = 300 })

    const itemsToModify = [
        'gtceu:dark_soularium_nugget',
        'gtceu:dark_soularium_dust',
        'gtceu:tiny_dark_soularium_dust',
        'gtceu:dark_soularium_block',
        'gtceu:dark_soularium_ingot',
        'gtceu:small_dark_soularium_dust',
        'hostilenetworks:prediction',
        /empowered/
    ];

    itemsToModify.forEach(itemName => {
        event.modify(itemName, item => {
            const ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")
            const builder = new ItemBuilder(itemName).glow(true)
            item.setItemBuilder(builder)
        })
    })

})