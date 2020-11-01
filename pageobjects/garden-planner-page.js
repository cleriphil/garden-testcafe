import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        this.gardenGrid = Selector('#gridContainer');
        this.addRowBtn = Selector('#add-row-btn'); 
        this.addRowFirstDropDownOption = Selector('#add-row-btn').sibling('div').child('a').withText('To top');
    }
}

export default new GardenPlannerPage();