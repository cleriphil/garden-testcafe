import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        this.gardenGrid = Selector('#gridContainer');
        this.addRowBtn = Selector('#add-row-btn'); 
        this.addRowToTopOption = Selector('#add-row-btn').sibling('div').child('a').withText('To top');
        this.fourthRowFirstCell = Selector('#r4c0');
        this.deleteRowBtn = Selector('#delete-row-btn');
        this.deleteFirstRowOption = Selector('#delete-row-btn').sibling('div').child('a').nth(0);
        this.thirdRowFirstCell = Selector('#r3c0');
    }
}

export default new GardenPlannerPage();