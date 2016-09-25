(function() {
  'use strict';

  angular
    .module('ngMdTag', [])
    .directive('ngMdTag', ngMdTag);

  /**
   * @ngInject
   */
  function ngMdTag() {
    return {
      restrict: 'EA',
      scope: {
        origList: '=',
        label: '@',
        pattern: '@',
        patternMsg: '@',
        placeholder: '@'
      },
      template: [
        '<div class="multi-input" layout="row" layout-align="start top">',
        ' <span class="title">{{ vm.label }}</span>',
        ' <div flex class="list" layout="row" layout-wrap>',
        '   <md-input-container md-no-float ng-repeat="data in vm.origList track by $index">',
        '     <div class="read-only">{{data}}</div>',
        '     <md-button class="md-icon-button action remove" aria-label="删除" ng-click="vm.delData(data)">',
        '       <ng-md-icon warning icon="remove_circle" size="24"></ng-md-icon>',
        '     </md-button>',
        '   </md-input-container>',
        '   <md-input-container md-no-float>',
        '     <input aria-label="data" type="text" placeholder="{{vm.placeholder}}" ng-model="vm.dataNew" ng-keydown="vm.keyDown($event)" ng-blur="vm.blur()">',
        '     <span class="error-message" ng-class="vm.errorMessage ? \'show\' : \'\'">' +
        '       {{ vm.errorMessage }}',
        '     </span>',
        '     <md-button class="md-icon-button action" aria-label="添加" ng-click="vm.addData()">',
        '       <ng-md-icon primary icon="add_circle" size="24"></ng-md-icon>',
        '     </md-button>',
        '   </md-input-container>',
        ' </div>',
        '</div>'].join(''),
      controller: Controller,
      controllerAs: 'vm'
    };

    /**
     * @ngInject
     */
    function Controller($scope) {
      var vm = this;

      vm.label = $scope.label;
      vm.placeholder = $scope.placeholder;
      vm.origList = $scope.origList || [];

      $scope.$watch('origList', function() {
        vm.origList = $scope.origList || [];
      });

      vm.keyDown = function(event) {
        vm.errorMessage = '';
        if(event.keyCode === 13) {
          vm.addData();
        }
      };

      vm.blur = function() {
        if(vm.dataNew) {
          vm.addData();
        }
      };

      vm.addData = function() {
        vm.errorMessage = '';

        if(vm.dataNew === undefined || vm.dataNew === '') {
          vm.errorMessage = '请输入内容';
          return;
        }

        if(vm.origList.indexOf(vm.dataNew) !== -1) {
          vm.errorMessage = '已经存在数据';
          return;
        }

        if($scope.pattern && !new RegExp($scope.pattern).test(vm.dataNew)) {
          vm.errorMessage = $scope.patternMsg || '请输入正确的内容';
          return;
        }

        if(vm.dataNew) {
          vm.origList.push(vm.dataNew);
          vm.dataNew = '';
        }

        $scope.origList = vm.origList;
      };

      vm.delData = function(data) {
        vm.origList = vm.origList.filter(function(dt) {
          return dt !== data;
        });

        $scope.origList = vm.origList;
      };
    }
  }

})();
