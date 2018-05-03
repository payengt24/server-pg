app.controller('ShoeController', function ($http, ShoeService) {
    console.log('ShoeController works')
    var self = this;

    self.shoes = ShoeService.shoeList

    // self.shoeList = ShoeService.shoeList;

    self.allShoes = function () {
        ShoeService.allShoes();
    }

})