//DEBUG NOTES//

// outerHtml
test('test', async t => {
    const debugEl = Selector('#gridContainer').addCustomDOMProperties({
        outerHTML: el => el.outerHTML
    });
    console.log('debugEl is ', await debugEl.outerHTML);
});

// OR 

test('test', async t => {
    const debugEl = GardenPlannerPage.addRowToTopOption.addCustomDOMProperties({
        outerHTML: el => el.outerHTML
    });
    console.log('debugEl is ', await debugEl.outerHTML);
});

//.debug() 
test('test', async t => {   
    await t
        .debug()
        .expect(GardenPlannerPage.gardenGrid.exists).ok();
});

//CLI --speed

// --speed <factor>
// Specifies the test execution speed.

// Tests are run at the maximum speed by default. You can use this option to slow the test down.

// factor should be a number between 1 (the fastest) and 0.01 (the slowest).

// testcafe chrome my-tests --speed 0.1
// If the speed is also specified for an individual action, the action's speed setting overrides the test speed.

// Default value: 1


//Don't use:
test('test', async t => {
    console.log('garden grid is', GardenPlannerPage.gardenGrid); //not good, returns [Function: __$$clientFunction$$]
});

//OTHER:

class Cell {
    constructor (x, y){
        this.el = Selector('#r' + x + "c" + y);
    }
}


this.fourthRowFirstCell = new Cell("4","0");