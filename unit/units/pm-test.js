/*
 * unit
 *
 * http://jasmine.github.io/2.2/introduction.html
 */
describe("pm", function() {
    //
    module.declare(['pm'],function(require){
        var pm=require('pm');
        
        it('pm should defined',function(){
            console.log(pm);
            //
            expect(pm).toBeDefined();
        });
        //version
        it('pm\'s version,is:'+pm.version,function(){
            
            expect(pm.version).toMatch(/^\d+\.\d+\.\d+$/);
        });
        
        //pm.ns
        describe('pm.ns method',function(){
            //namespace
            it('pm.namespace alias pm.ns',function(){
                
                expect(pm.namespace).toBe(pm.ns);
            });
            var test=function(){};
            beforeEach(function(){
                pm.ns('test');
                pm.test=test;
                
                pm.ns('pm.test.one');
                pm.test.one={};
            });
            it('define pm.test namespace',function(){
                console.log(pm.ns('test'));
                expect(pm.ns('test')).toBe(test);
            });
            it('define pm.test.one={}',function(){
                expect(pm.ns('test.one')).toEqual({});
            });
        });
        
        //pm.utils
        describe('pm.utils object',function(){
            var utils=pm.utils;
            //
            it('pm.utils is defined',function(){
                expect(utils).toBeDefined();
            });
            
            //type
            it('pm.utils type,pm.utils.is*',function(){
                var _string='string';
                var _int=2;
                var _numeric=2.3;
                var _true=true;
                var _false=false;
                var _function=function(){};
                var _object={};
                var _array=[];
                var _has={'obj':'obj'};
                expect(utils.type(_string)).toBe('string');
                expect(utils.type(_int)).toBe('number');
                expect(utils.type(_numeric)).toBe('number');
                expect(utils.type(_true)).toBe('boolean');
                expect(utils.type(_false)).toBe('boolean');
                expect(utils.type(_function)).toBe('function');
                expect(utils.type(_object)).toBe('object');
                expect(utils.type(_array)).toBe('array');
                //
                expect(utils.isNumberic(_int)).toBe(true);
                expect(utils.isNumberic(_numeric)).toBe(true);
                expect(utils.isNumberic(_string)).toBe(false);
                //
                expect(utils.isString(_string)).toBe(true);
                //
                expect(utils.isFunction(_function)).toBe(true);
                expect(utils.isObject(_object)).toBe(true);
                expect(utils.isObject(_array)).toBe(true);
                expect(utils.isObject(_function)).toBe(true);
                expect(utils.isArray(_array)).toBe(true);
                expect(utils.has(_has,'obj')).toBeTruthy();
                expect(utils.has(_has,'no')).toBeFalsy();
            });
            
            //each
            it('pm.utils.each',function(){
                var _arr=[0,1,2];
                var _obj1={'1':'1','2':'2','3':'3'};
                //array
                utils.each(_arr,function(val,index){
                    
                    expect(val).toEqual(_arr[index]);
                });
                //object
                utils.each(_obj1,function(val,key){
                    
                    expect(val).toEqual(_obj1[key]);
                });
            });
            //map
            it('pm.utils.map',function(){
                var arr=[1,2,3];
                var obj={'one':1,'two':2,'three':3};
                var r1=utils.map(arr,function(value){
                    
                    return value * 3;
                });
                var r2=utils.map(arr,function(value,key){
                    
                    return value * 3;
                });
                
                expect(r1).toEqual([3,6,9]);
                expect(r2).toEqual([3,6,9]);
            });
            //keys
            it('pm.utils.keys',function(){
                var _obj1={'1':'1','2':'2','3':'3'};
                var _arr2=utils.keys(_obj1);
                
                expect(_arr2).toEqual(['1','2','3']);
            });
            //allKeys
            //TODO
            
            //indexOf
            
            //sortedIndex
            
            //findIndex
            
            //findLastIndex
            
            //values
            it('pm.utils.values',function(){
                var obj={'1':'1','2':'2','3':'3'};
                var r=utils.values(obj);
                
                expect(r).toEqual(['1','2','3']);
            });
            
            //uid
            it('pm.utils.uid',function(){
                var _uid1=utils.uid();
                var _uid2=utils.uid();
                //console.log(_uid1,_uid2);
                expect(_uid1).not.toEqual(_uid2);
            });
            
            //result
            it('pm.utils.result',function(){
                var obj={r1:'r1',r2:function(){return 'result2';}};
                
                var r1=utils.result(obj,'r1');
                var r2=utils.result(obj,'r2');
                expect(r1).toBe('r1');
                expect(r2).toBe('result2');
                expect(r2).not.toBe('r2');
            });
            
            //identity
            it('pm.utils.identity',function(){
                var r1='result';
                var r2=utils.identity(r1);
                expect(r1).toBe(r2);
            });
            
            //any
            it('pm.utils.some/any',function(){
                expect(utils.some).toBe(utils.any);
                var arr=[1,2,3,4,5];
                var r1=utils.some(arr,function(value,index,list){
                    
                    return value === 1;
                });
                var r2=utils.some(arr,function(value,index,list){
                    
                    return value === 6;
                });
                expect(r1).toBe(true);
                expect(r2).toBe(false);
                
                var obj={'1':1,'2':2};
                var o1=utils.some(obj,function(value,key,list){
                    
                    return value === 1;
                });
                var o2=utils.some(obj,function(value,key,list){
                    
                    return value === 6;
                });
                expect(o1).toBe(true);
                expect(o2).toBe(false);
            });
            
            //contains
            it('pm.utils.contains',function(){
                var arr=[1,2,3,4,5];
                var r1=utils.contains(arr,4);
                var r2=utils.contains(arr,6);
                expect(r1).toBe(true);
                expect(r2).toBe(false);
                
                var fun=function(){};
                var obj={'1':'1','2':{'2.1':'2.1'},'3':[1,2],'4':function(){},'5':fun};
                var o1=utils.contains(obj,'1');
                var o2=utils.contains(obj,'2');
                var o3=utils.contains(obj,{'2.1':'2.1'});
                var o4=utils.contains(obj,[1,2]);
                var o5=utils.contains(obj,function(){});
                var o6=utils.contains(obj,fun);
                
                expect(o1).toBe(true);
                expect(o2).toBe(false);
                expect(o3).toBe(false);
                expect(o4).toBe(false);
                expect(o5).toBe(false);
                expect(o6).toBe(true);
            });
            
            //extend
            it('pm.utils.extend',function(){
                var _obj1={'1':'1','2':'2','3':'3'};
                var _obj2=utils.extend(_obj1);
                expect(_obj2).toEqual(_obj1);
            });
            
            //pick
            it('pm.utils.pick',function(){
                var arr=['0','1','2'];
                var obj={'1':'1','2':'2','3':'3'};
                var r1=utils.pick(obj,arr);
                var r2=utils.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
                var r3=utils.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
                    
                    return utils.isNumber(value);
                });
                expect(r1).toEqual({'1':'1','2':'2'});
                expect(r2).toEqual({name: 'moe', age: 50});
                expect(r3).toEqual({age: 50});
            });
            
            //omit
            it('pm.utils.omit',function(){
                var arr=['0','1','2'];
                var obj1={'1':'1','2':'2','3':'3'};
                var obj2={'1':'x','2':'y','3':'z'};
                var r1=utils.omit(obj1,arr);
                var r2=utils.omit(obj2,arr);
                var r3=utils.omit(obj2,function(value,key,list){
                    
                    return key === '2';
                });
                
                expect(r1).toEqual({'3':'3'});
                expect(r2).toEqual({'3':'z'});
                expect(r3).toEqual({'1':'x','3':'z'});
            });
            
            //difference
            it('pm.utils.difference',function(){
                //
                var _arr1=[1,2,3,5,6,9];
                var _arr2=[1,2,3,4,5,7,8,9];
                var _r=utils.difference(_arr1,_arr2);
                
                expect(_r).toEqual([6]);
            });
            
            //filter
            it('pm.utils.filter',function(){
                var _arr1=[1,2,3,4,5];
                var _obj1={'1':'1','2':'2','3':'3'};
                var _r1=utils.filter(_arr1,function(value,index,list){
                    
                    if(value >= 3){
                        
                        return true;
                    }
                });
                var _r2=utils.filter(_obj1,function(value,key,list){
                    
                    return !utils.contains(['1','3'],key);
                });
                
                expect(_r1).toEqual([3,4,5]);
                expect(_r2).toEqual(['2']);
            });
            //isEmpty
            it('pm.utils.isEmpty',function(){
                var obj1={};
                var obj2={'t':''};
                var str1='';
                var str2='t';
                var arr1=[];
                var arr2=[1];
                
                expect(utils.isEmpty(obj1)).toBeTruthy();
                expect(utils.isEmpty(str1)).toBeTruthy();
                expect(utils.isEmpty(arr1)).toBeTruthy();
                expect(utils.isEmpty(obj2)).toBeFalsy();
                expect(utils.isEmpty(str2)).toBeFalsy();
                expect(utils.isEmpty(arr2)).toBeFalsy();
            });
            //toBoolean
            it('pm.utils.toBoolean',function(){
                var obj1={};
                var obj2={'t':''};
                var str1='';
                var str2='t';
                var arr1=[];
                var arr2=[1];
                var true1=true;
                var false1=false;
                var isNull=null;
                var isUndefined=undefined;
                
                expect(utils.toBoolean(obj1)).toBe(false);
                expect(utils.toBoolean(obj2)).toBe(true);
                expect(utils.toBoolean(str1)).toBe(false);
                expect(utils.toBoolean(str2)).toBe(true);
                expect(utils.toBoolean(arr1)).toBe(false);
                expect(utils.toBoolean(arr2)).toBe(true);
                expect(utils.toBoolean(true1)).toBe(true);
                expect(utils.toBoolean(false1)).toBe(false);
                expect(utils.toBoolean(isNull)).toBe(false);
                expect(utils.toBoolean(isUndefined)).toBe(false);
            });
            
            //isEqual
            it('pm.utils.isEqual',function(){
                
                expect(utils.isEqual(1,1)).toBe(true);
                expect(utils.isEqual(1,'1')).toBe(false);
                expect(utils.isEqual(1,1.0)).toBe(true);
                
                expect(utils.isEqual('1','1')).toBe(true);
                expect(utils.isEqual('1','2')).toBe(false);
                
                expect(utils.isEqual(true,true)).toBe(true);
                expect(utils.isEqual(true,false)).toBe(false);
                
                var reg=/\d/;
                expect(utils.isEqual(/\d/,/\d/)).toBe(false);
                expect(utils.isEqual(reg,reg)).toBe(true);
                
                var fun1=function(){};
                var fun2=function(){};
                expect(utils.isEqual(fun1,fun1)).toBe(true);
                expect(utils.isEqual(fun1,fun2)).toBe(false);
                
                var obj1={'1':'2','2':{'2':'2'}};
                var obj2={'1':'2','2':{'2':'3'}};
                expect(utils.isEqual({},{})).toBe(false);
                expect(utils.isEqual(obj1,obj1)).toBe(true);
                expect(utils.isEqual(obj1,obj2)).toBe(false);
                
                
            });
        });
    });
});
