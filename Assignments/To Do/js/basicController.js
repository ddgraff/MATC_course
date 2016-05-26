(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = ['listService'];

    function basicController(listService) {

        // list everything
        var bc = this;
        bc.sometext = 'default value';
        bc.listName = '';
        bc.currentList = listService.currentList;
        bc.listNames = listService.listNames;
        bc.addList = addList;
        bc.Items = listService.items;
        bc.changeList = changeList;
        bc.newItem = '';
        bc.addItem = addItem;
        bc.deleteList= deleteList;
        bc.deleteItem = deleteItem;
        bc.checked = checked;
        bc.removeChecked = removeChecked;


        // define functions
        function addList() {
            listService.addList(bc.listName);
            bc.listName = '';
        }

        function changeList(index) {
            bc.currentList = index;
            listService.changeList(index);
        }

        function addItem() {
            listService.addItem(bc.newItem);
            bc.newItem = '';
        }

        function deleteList(index) {
            listService.deleteList(index);
        }

        function deleteItem(index) {
            listService.deleteItem(index);
        }

        function checked(n){
            listService.checked(n);
        }

        function removeChecked(){
            listService.removeChecked();
        }
    }

}());
