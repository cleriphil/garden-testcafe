import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        this.gardenGrid = Selector('#gridContainer');
        this.addRowBtn = Selector('#add-row-btn'); 
        this.addRowFirstDropDownOption = Selector('#add-row-btn').nth(0);
        this.addRowFirstDropDownOption2 = Selector('#add-row-btn').sibling('.dropdown-menu').filterVisible().nth(0);
    }
}

export default new GardenPlannerPage();