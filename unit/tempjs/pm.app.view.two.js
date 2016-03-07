/*
 * pm.app.view.two.js
 *
 * www.pm.cn - v0.0.1 - 2015
            
*/

'use strict';

(function(){
    //
    var $global=module.globals('$');
    //
    module.declare('pm.app.view.two',[$global,'pm.view'],function(require){
        var $=require($global);
        var pm=require('pm');
        
        var two=pm.view.create({
            
        });
        
        pm.ns('pm.app.view.two');
        pm.app.view.two=two;
        
        two.init=function(){
            console.log('--pm.app.view.two init--');
        };
        
        return two;
    });
})();