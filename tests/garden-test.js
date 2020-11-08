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
        .click(GardenPlannerPage.addRowToTopOption.item)
        .expect(GardenPlannerPage.fourthRowFirstCell.el.exists).ok();
});

test('delete a row', async t => {   
    await t
        .click(GardenPlannerPage.deleteRowBtn)
        .click(GardenPlannerPage.deleteFirstRowOption.item)
        .expect(GardenPlannerPage.thirdRowFirstCell.el.exists).notOk();
});

test('add a column', async t => {   
    await t
        .click(GardenPlannerPage.addColBtn)
        .click(GardenPlannerPage.addColToLeftOption.item)
        .expect(GardenPlannerPage.fifthColFirstCell.el.exists).ok();
});

test('delete a column', async t => {   
    await t
        .click(GardenPlannerPage.deleteColBtn)
        .click(GardenPlannerPage.deleteFirstColOption.item)
        .expect(GardenPlannerPage.fourthColFirstCell.el.exists).notOk();
});

test('add a plant to a cell', async t => {   
    await t
        .click(GardenPlannerPage.firstRowSecondCell.el)
        .click(GardenPlannerPage.modalLeeks)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.exists).ok();
});

test('clear a cell', async t => {   
    await t
        .click(GardenPlannerPage.firstRowSecondCell.el)
        .click(GardenPlannerPage.modalLeeks)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.exists).ok()
        .click(GardenPlannerPage.firstRowSecondCell.el)
        .click(GardenPlannerPage.modalClearBtn)
        .expect(GardenPlannerPage.firstRowSecondCellLeeks.exists).notOk();
});