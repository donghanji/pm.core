/*
 * pm.app.view.one.js
 *
 * www.pm.cn - v0.0.1 - 2015
            
*/

'use strict';

(function(){
    //
    var $global=module.globals('$');
    //
    module.declare('pm.app.view.one',[$global,'pm.view'],function(require){
        var $=require($global);
        var pm=require('pm');
        
        var one=pm.view.create({
            
        });
        
        pm.ns('pm.app.view.one');
        pm.app.view.one=one;
        
        one.init=function(){
            console.log('--pm.app.view.one init--');  
        };
        
        return one;
    });
})();