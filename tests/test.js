import { Selector } from 'testcafe';
import GardenPlannerPage from '../pageobjects/garden-planner-page.js';

fixture `Getting Started`
    .page `https://www.pennys-garden-planner.com/`;

test('Garden planner grid displays on load', async t => {
    await t
        .expect(GardenPlannerPage.gardenGrid.exists).ok();
});