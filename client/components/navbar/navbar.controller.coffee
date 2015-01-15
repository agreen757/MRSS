'use strict'

angular.module 'indmrssApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [{
    title: 'Home',
    link: '/'
   },
    {title: 'Feed', link: '/rss'}]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()