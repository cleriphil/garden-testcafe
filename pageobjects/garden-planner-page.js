import { Selector } from 'testcafe';

class MenuItem {
    constructor (addDelete, rowColumn, text) {
        this.item = Selector('#'+ addDelete + "-" + rowColumn + "-btn").sibling('div').child('a').withText(text);      
    }
}


class GardenPlannerPage {
    constructor () {
        const firstRowSecondCell = Selector('#r0c1');

        this.gardenGrid = Selector('#gridContainer');
        
        this.addRowBtn = Selector('#add-row-btn'); 
        this.addRowToTopOption = new MenuItem('add','row','To top');
        this.fourthRowFirstCell = Selector('#r4c0');
        
        this.deleteRowBtn = Selector('#delete-row-btn');
        this.deleteFirstRowOption = new MenuItem('delete','row','1');
        this.thirdRowFirstCell = Selector('#r3c0');

        this.addColBtn = Selector('#add-col-btn'); 
        this.addColToLeftOption = new MenuItem('add','col','To left');
        this.fifthColFirstCell = Selector('#r0c4');

        this.deleteColBtn = Selector('#delete-col-btn');
        this.deleteFirstColOption = new MenuItem('delete','col','1');
        this.fourthColFirstCell = Selector('#r0c3');

        this.firstRowSecondCell = firstRowSecondCell;
        this.modalLeeks = Selector('.modal-body').child('.list-group').child('button').child().withText('Leeks');
        this.firstRowSecondCellLeeks = firstRowSecondCell.child('.plants').child('.plant').child('.leek');
        this.modalClearBtn = Selector('.modal-body').child('button').child('span').withText('Clear plot');
    }
}

export default new GardenPlannerPage();