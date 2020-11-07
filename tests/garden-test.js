import { Selector } from 'testcafe';
import GardenPlannerPage from '../pageobjects/garden-planner-page.js';

fixture `Garden Planner`
    .page `https://www.pennys-garden-planner.com/`;

test('Garden planner grid displays on load', async t => {   
    await t
        .expect(GardenPlannerPage.gardenGrid.exists).ok();
});

test('User is able to add a row', async t => {   
    await t
        .click(GardenPlannerPage.addRowBtn)
        .click(GardenPlannerPage.addRowToTopOption)
        .expect(GardenPlannerPage.fourthRowFirstCell.exists).ok();
});

test('User is able to delete a row', async t => {   
    await t
        .click(GardenPlannerPage.deleteRowBtn)
        .click(GardenPlannerPage.deleteFirstRowOption)
        .expect(GardenPlannerPage.thirdRowFirstCell.exists).notOk();
});

test('User is able to add a column', async t => {   
    await t
        .click(GardenPlannerPage.addColBtn)
        .click(GardenPlannerPage.addColToLeftOption)
        .expect(GardenPlannerPage.fifthColFirstCell.exists).ok();
});

test('User is able to delete a column', async t => {   
    await t
        .click(GardenPlannerPage.deleteColBtn)
        .click(GardenPlannerPage.deleteFirstColOption)
        .expect(GardenPlannerPage.fourthColFirstCell.exists).notOk();
});

test('User is able to add a plant to a cell', async t => {   
    await t
        .click(GardenPlannerPage.firstRowSecondCell)
        .click(GardenPlannerPage.modalLeeks)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.exists).ok();
});

test('User is able to clear a cell', async t => {   
    await t
        .click(GardenPlannerPage.firstRowSecondCell)
        .click(GardenPlannerPage.modalLeeks)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.exists).ok()
        .click(GardenPlannerPage.firstRowSecondCell)
        .click(GardenPlannerPage.modalClearBtn)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.exists).notOk();
});