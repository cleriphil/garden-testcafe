import { Selector } from 'testcafe';

class MenuItem {
    constructor (addDelete, rowColumn, text) {
        this.item = Selector('#'+ addDelete + "-" + rowColumn + "-btn").sibling('div').child('a').withText(text);      
    }
}

class Cell {
    constructor (x, y){
        this.el = Selector('#r' + x + "c" + y);
    }
}

class GardenPlannerPage {
    constructor () {
        this.gardenGrid = Selector('#gridContainer');
        
        this.addRowBtn = Selector('#add-row-btn'); 
        this.addRowToTopOption = new MenuItem('add','row','To top');
        this.fourthRowFirstCell = new Cell('4','0');
        
        this.deleteRowBtn = Selector('#delete-row-btn');
        this.deleteFirstRowOption = new MenuItem('delete','row','1');
        this.thirdRowFirstCell = new Cell('3','0');

        this.addColBtn = Selector('#add-col-btn'); 
        this.addColToLeftOption = new MenuItem('add','col','To left');
        this.fifthColFirstCell = new Cell('0','4');

        this.deleteColBtn = Selector('#delete-col-btn');
        this.deleteFirstColOption = new MenuItem('delete','col','1');
        this.fourthColFirstCell = new Cell('0','3');

        this.firstRowSecondCell = new Cell('0','1');
        this.modalLeeks = Selector('.modal-body').child('.list-group').child('button').child().withText('Leeks');
        this.firstRowSecondCellLeeks = this.firstRowSecondCell.el.child('.plants').child('.plant').child('.leek');
        this.modalClearBtn = Selector('.modal-body').child('button').child('span').withText('Clear plot');
    }
}

export default new GardenPlannerPage();