/*
 * unit
 *
 * http://jasmine.github.io/2.2/introduction.html
 */
describe("pm.dataset", function() {
    //
    module.declare(['pm','pm.dataset'],function(require){
        var pm=require('pm');
        var ds=require('pm.dataset');
        var utils=pm.utils;
        
        describe('pm.dataset object',function(){
            it('pm.dataset is a function',function(){
                //
                expect(utils.isFunction(ds)).toBe(true);
            });
            it('defined dataset.create',function(){
                //
                expect(ds.create).toBeDefined();
            });
            
            it('dataset.set method',function(){
                //
                expect(ds.prototype.set).toBeDefined();
            });
            it('dataset.get method',function(){
                //
                expect(ds.prototype.get).toBeDefined();
            });
            it('dataset.save method',function(){
                //
                expect(ds.prototype.save).toBeDefined();
            });
            it('dataset.handle method',function(){
                //
                expect(ds.prototype.handle).toBeDefined();
            });
            it('dataset.val method',function(){
                //
                expect(ds.prototype.val).toBeDefined();
            });
        });
    });
});
