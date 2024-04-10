const item = await Graviton.crateStatusbarItem("Click me!");

await item.show();

item.onClick(() => {
    item.setLabel("You clicked me!")
})

Graviton.whenUnload().then(() => Graviton.exit())
