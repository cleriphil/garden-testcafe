import { Selector } from 'testcafe';

class GardenPlannerPage {
    constructor () {
        const addRowBtnSelector = Selector('#add-row-btn');
        const deleteRowBtnSelector = Selector('#delete-row-btn');
        const addColBtnSelector = Selector('#add-col-btn');
        const deleteColBtnSelector = Selector('#delete-col-btn');

        this.gardenGrid = Selector('#gridContainer');
        
        this.addRowBtn = addRowBtnSelector; 
        this.addRowToTopOption = addRowBtnSelector.sibling('div').child('a').withText('To top');
        this.fourthRowFirstCell = Selector('#r4c0');
        
        this.deleteRowBtn = deleteRowBtnSelector;
        this.deleteFirstRowOption = deleteRowBtnSelector.sibling('div').child('a').nth(0);
        this.thirdRowFirstCell = Selector('#r3c0');

        this.addColBtn = addColBtnSelector; 
        this.addColToLeftOption = addColBtnSelector.sibling('div').child('a').withText('To left');
        this.fifthColFirstCell = Selector('#r0c4');

        this.deleteColBtn = deleteColBtnSelector;
        this.deleteFirstColOption = deleteColBtnSelector.sibling('div').child('a').nth(0);
        this.fourthColFirstCell = Selector('#r0c3');
    }
}

export default new GardenPlannerPage();