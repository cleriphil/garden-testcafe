import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        const addRowBtnSelector = Selector('#add-row-btn');
        const deleteRowBtnSelector = Selector('#delete-row-btn');

        this.gardenGrid = Selector('#gridContainer');
        
        this.addRowBtn = addRowBtnSelector; 
        this.addRowToTopOption = addRowBtnSelector.sibling('div').child('a').withText('To top');
        this.fourthRowFirstCell = Selector('#r4c0');
        
        this.deleteRowBtn = deleteRowBtnSelector;
        this.deleteFirstRowOption = deleteRowBtnSelector.sibling('div').child('a').nth(0);
        this.thirdRowFirstCell = Selector('#r3c0');
    }
}

export default new GardenPlannerPage();