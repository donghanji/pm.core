/*
 * unit
 *
 * http://jasmine.github.io/2.2/introduction.html
 */
describe("pm.view", function() {
    //
    module.declare(['pm','pm.view'],function(require){
        var pm=require('pm');
        var view=require('pm.view');
        var utils=pm.utils;
        
        describe('pm.view object',function(){
            it('pm.view is a function',function(){
                //
                expect(utils.isFunction(view)).toBe(true);
            });
            it('defined view.create',function(){
                //
                expect(view.create).toBeDefined();
            });
            //
            var fun=function(){};
            var events={'click':'clickEvent'};
            var v1=view.create({
                'fun':fun,
                'events':events
            });
            it('create a view,add fun method',function(){
                expect(v1.fun).toBe(fun);
            });
            it('create a view,add events',function(){
                
                expect(v1.events).toEqual(events);
            });
            
            //
            it('view.get method',function(){
                
                expect(view.prototype.get).toBeDefined();
            });
            it('view.set method',function(){
                
                expect(view.prototype.set).toBeDefined();
            });
            it('view.save method',function(){
                
                expect(view.prototype.save).toBeDefined();
            });
        });
    });
});
