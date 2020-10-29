import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        this.gardenGrid = Selector('#gridContainer');
    }
}

export default new GardenPlannerPage();