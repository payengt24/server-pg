app.service('ShoeService', function ($http) {
    console.log('ShoeService is loaded')
    var self = this;

    self.shoeList = {list: []};


    // self.shoe = function (shoe) {
    //     console.log('i am working!!!!')
    //     $http({
    //         method: 'POST',
    //         url: '/shoe',
    //         data: shoe,
    //     })
    //         .then(function (response) {
    //             console.log(response.data)

    //             self.allShoes();
    //         })
    //         .catch(function (error) {
    //             console.log('error on task POST', error)
    //         })
    //     self.allShoes();
    // }

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

    self.allShoes();
}) 