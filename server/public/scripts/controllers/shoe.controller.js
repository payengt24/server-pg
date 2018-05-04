app.controller('ShoeController', function ($http, ShoeService) {
    console.log('ShoeController works')
    var self = this;

    self.shoes = ShoeService.shoeList
    self.edit = true;
    self.save = false

    // self.shoeList = ShoeService.shoeList;

    self.addShoe = function (newShoe) {
        ShoeService.addShoe(newShoe);
        self.newShoe = { name: '', cost: '' } //clearing input once button has been submitted

    }

    self.allShoes = function () {
        ShoeService.allShoes();
    }

    self.updateShoe = function (shoeUpdate) {
        self.edit = true;
        self.save = false;
        ShoeService.updateShoe(shoeUpdate)
    }

    self.deleteShoe = function (shoeDelete) {
        ShoeService.deleteShoe(shoeDelete)
    }

    self.editMode = function (shoe) {
        self.edit = false;
        self.save = true;
    }


})