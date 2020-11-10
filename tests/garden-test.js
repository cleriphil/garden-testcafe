import { Selector } from 'testcafe';
import GardenPlannerPage from '../pageobjects/garden-planner-page.js';

fixture `Garden Planner`
    .page `https://www.pennys-garden-planner.com/`;

test('Garden planner grid displays on load', async t => {   
    await t
        .expect(GardenPlannerPage.gardenGrid.exists).ok();
});

test('add a row', async t => {   
    await t
        .click(GardenPlannerPage.addRowBtn)
        .click(GardenPlannerPage.addRowToTopOption.a)
        .expect(GardenPlannerPage.fourthRowFirstCell.button.exists).ok();
});

test('delete a row', async t => {   
    await t
        .click(GardenPlannerPage.deleteRowBtn)
        .click(GardenPlannerPage.deleteFirstRowOption.a)
        .expect(GardenPlannerPage.thirdRowFirstCell.button.exists).notOk();
});

test('add a column', async t => {   
    await t
        .click(GardenPlannerPage.addColBtn)
        .click(GardenPlannerPage.addColToLeftOption.a)
        .expect(GardenPlannerPage.fifthColFirstCell.button.exists).ok();
});

test('delete a column', async t => {   
    await t
        .click(GardenPlannerPage.deleteColBtn)
        .click(GardenPlannerPage.deleteFirstColOption.a)
        .expect(GardenPlannerPage.fourthColFirstCell.button.exists).notOk();
});

test('add a plant to a cell', async t => {   
    await t
        .click(GardenPlannerPage.firstRowSecondCell.button)
        .click(GardenPlannerPage.modalLeeks.span)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.div.exists).ok();
});

test('clear a cell', async t => {   
    await t
        .click(GardenPlannerPage.firstRowSecondCell.button)
        .click(GardenPlannerPage.modalLeeks.span)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.div.exists).ok()
        .click(GardenPlannerPage.firstRowSecondCell.button)
        .click(GardenPlannerPage.modalClearBtn)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.div.exists).notOk();
});

// test('edit a cell', async t => {   
//     await t
//         .click(GardenPlannerPage.firstRowSecondCell.button)
//         //code    
// });