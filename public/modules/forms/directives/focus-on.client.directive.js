'use strict';

angular.module('forms').directive('focusOn',function() {
    return {
        restrict : 'A', 
        link : function($scope, $element, $attr) {
            $scope.$watch($attr.focusOn,function(focusVal) {
                if(focusVal === true) {
                    var $input_element;

                    if($element[0].querySelector('input')){
                        $input_element = $element[0].querySelector('input');
                    }else if($element[0].querySelector('select')){
                        $input_element = $element[0].querySelector('select');
                    }else if($element[0].querySelector('textarea')){
                        $input_element = $element[0].querySelector('.textarea');
                    }else if($element[0].querySelector('.angular-input-stars')){
                        $input_element = $element[0].querySelector('.angular-input-stars');
                    }else{
                        return;
                    }
                    setTimeout(function() {
                        console.log($('.activeField'));
                        $('html, body').animate({
                            scrollTop: $('.activeField').offset().top
                        },400);
                    }, 0);
                }
            });
        }
    };
});