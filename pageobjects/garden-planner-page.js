import { Selector } from 'testcafe';

class MenuItem {
    constructor (addDelete, rowColumn, text) {
        this.a = Selector('#'+ addDelete + "-" + rowColumn + "-btn").sibling('div').child('a').withText(text);      
    }
}

class Cell {
    constructor (x, y){
        this.button = Selector('#r' + x + "c" + y);
    }
}

class ModalItem {
    constructor (text){
        this.span = Selector('.modal-body').child('.list-group').child('button').child().withText(text);
    }
}

class CellPlant {
    constructor (cell, text){
        this.div = cell.child('.plants').child('.plant').child('.'+ text);
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
        this.firstRowSecondCell.leeks = new CellPlant(this.firstRowSecondCell.button,'leek');
        this.firstRowSecondCell.lettuce = new CellPlant(this.firstRowSecondCell.button,'lettuce');
        this.firstRowSecondCell.peas = new CellPlant(this.firstRowSecondCell.button,'pea');

        this.modal = {
            clearBtn: Selector('.modal-body').child('button').child('span').withText('Clear plot'),
            leeks: new ModalItem('Leeks'),
            lettuce: new ModalItem('Lettuce'),
            peas: new ModalItem('Peas')
        }        
    }
}

export default new GardenPlannerPage();