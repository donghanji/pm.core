/*
 * pm.ajax.js
 *
 *
*/

'use strict';

(function(){
    //
    var $global=module.globals('$');
    //
    module.declare('pm.app.view.buy',[$global,'pm.view'],function(require){
        var $=require($global);
        var pm=require('pm');
        
        var buy=pm.view.create({
            el:'.el',
            initialize:function(){
                console.log('--pm.app.view.buy--');
                console.log('--el initialize--');
            },
            fields:{
                //'v1':'[data-field="v1"]',
                //'v2':'#v2',
                //'v3':'[data-field="v3"]'
            },
            defaults:{
                'v6':'v6',
                'v8':'v8'
            },
            events:{
                'click':'clickEvent',
                'blur input':'blurEvent'
            },
            changes:{
                'v2':'changeV2',
                'v3':'changeV3',
                '*':'changeAny'
            },
            _ensureElement:function(){
                
                return console.log('to rewrite _ensureElement');
            },
            clickEvent:function(){
                
                var data=this.get();
            },
            changeV2:function(){
                console.log('by view change, v2:',this.get('v2'));
            },
            changeV3:function(){
                
                console.log('by view change, v3:',this.get('v3'));
            },
            blurEvent:function(e){
                
                var $target=$(e.target);
                var field=$target.attr('data-field');
                var value=$target.val();
                //
                //this.set(field,value);
            },
            changeAny:function(value,field){
                console.log('--any change--');
                console.log(value,field);
            }
        });
        
        //
        pm.ns('pm.app.view.buy');
        pm.app.view.buy=buy;
        
        //
        buy.init=function(){
            buy.set({'v1':'11','v2':'2s2','v3':'4x4','v5':'test div','v7':'http://10.0.0.32:81/Static/assets/jobs/job_13.png'});
            console.log(buy.get('v6'));
            
            console.log('---buy.data---');
            console.log(buy.data);
        }
        
        return buy;
    });
})();