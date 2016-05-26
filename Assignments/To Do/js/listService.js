/**
 * Created by danielgraff1 on 12/16/15.
 */
(function(){
    'use strict';

    angular.module('listService', ['ngStorage'])
        .service('listService', listService);

    listService.$inject = ['$localStorage'];

    function listService($localStorage) {

        var ls = this;
        ls.currentList = 0;
        ls.listCount = 1;
        ls.itemCount = 0;
        ls.items = [];
        ls.listNames = ["To Do"];
        ls.addList = addList;
        ls.changeList = changeList;
        ls.addItem = addItem;
        ls.deleteList = deleteList;
        ls.deleteItem = deleteItem;
        ls.checked = checked;
        ls.removeChecked = removeChecked;

        // define functions
        function addList(listName) {
            ls.listCount++;
            ls.currentList = ls.listCount-1;
            ls.listNames.push(listName);
            $localStorage.listCount = ls.listCount;
            $localStorage.currentList = ls.currentList;
            $localStorage.listNames = ls.listNames;
        }

        function changeList(listNumber) {
            ls.currentList = listNumber;
            $localStorage.currentList = ls.currentList;
        }

        function addItem(itemName) {
            ls.items.push ({name: itemName, listNum: ls.currentList, status: 0});
            $localStorage.items = ls.items;
        }

        function deleteList(index) {
            ls.listNames.splice(index, 1);
            for(var i = 0; i < ls.items.length; i++) {
                if (ls.items[i].listNum == index) {
                    ls.items.splice(i, 1);
                    i--;
                }
            }
            $localStorage.listNames = ls.listNames;
        }

        function deleteItem(index) {
            ls.items.splice(index, 1);
            $localStorage.items = ls.items;
        }

        function checked(name){
            for (var i = 0; i < ls.items.length; i++){
                if (ls.items[i].name == name){
                   if (ls.items[i].status ==0){
                       ls.items[i].status = 1;
                   }
                    else {ls.items[i].status = 0;}
                }
            }
            $localStorage.items = ls.items;
        }

        function removeChecked(){
            for (var i = 0; i < ls.items.length; i++){
                if (ls.items[i].status == 1 && ls.items[i].listNum == ls.currentList){
                    ls.items.splice(i, 1);
                    i--;
                }
            }
            $localStorage.items = ls.items;
        }

        (function() {
            if($localStorage.items){
                ls.items = $localStorage.items;
            }
            if($localStorage.listNames){
                ls.listNames = $localStorage.listNames;
            }
            if($localStorage.currentList){
                ls.currentList = $localStorage.currentList;
            }
            if($localStorage.listCount){
                ls.listCount = $localStorage.listCount;
            }
        })();
    }


}());
