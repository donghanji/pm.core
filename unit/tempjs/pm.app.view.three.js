/*
 * pm.ajax.js
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

(function(){
    //
    var $global=module.globals('$');
    //
    module.declare('pm.app.view.three',[$global,'pm.view'],function(require){
        var $=require($global);
        var pm=require('pm');
        
        var three=pm.view.create({
            
        });
        
        pm.ns('pm.app.view.three');
        pm.app.view.three=three;
        
        three.init=function(){
            console.log('--pm.app.view.three init--');  
        };
        
        return three;
    });
})();