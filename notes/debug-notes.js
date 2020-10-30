//DEBUG NOTES//

// outerHtml
test('test', async t => {
    const grid = Selector('#gridContainer').addCustomDOMProperties({
        outerHTML: el => el.outerHTML
    });
    console.log('grid is ', await grid.outerHTML);
});

//.debug()
test('test', async t => {   
    await t
        .debug()
        .expect(GardenPlannerPage.gardenGrid.exists).ok();
});


//Don't use:
test('test', async t => {
    console.log('garden grid is', GardenPlannerPage.gardenGrid); //not good, returns [Function: __$$clientFunction$$]
});

