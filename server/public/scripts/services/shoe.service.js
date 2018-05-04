app.service('ShoeService', function ($http) {
    console.log('ShoeService is loaded')
    var self = this;

    self.shoeList = { list: [] };
    self.newShoe = { name: '', cost: '' };


    self.addShoe = function (newShoe) {
        $http({
            method: 'POST',
            url: '/shoe',
            data: newShoe
        })
            .then(function (response) {
                console.log(response);
                self.allShoes();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    self.allShoes = function () {
        $http({
            method: 'GET',
            url: '/shoe',
        })
            .then(function (response) {
                console.log('my response', response.data);
                self.shoeList.list = response.data
            })
            .catch(function (error) {
                console.log('this is an error on GET shoe', error)
            });
    }


    self.updateShoe = function (shoeUpdate) {
        $http({
            method: 'PUT',
            url: '/shoe',
            data: shoeUpdate
        })
            .then(function (response) {
                console.log(response.config.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    self.deleteShoe = function (shoeDelete) {
        $http({
            method: 'DELETE',
            url: '/shoe',
            params: shoeDelete
        })
            .then(function (response) {
                console.log(response);
                self.allShoes();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    self.allShoes();
}) 