import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        this.gardenGrid = Selector('#gridContainer');
        this.addRowBtn = Selector('#add-row-btn'); 
        //add selector for array of dropdown options
    }
}

export default new GardenPlannerPage();