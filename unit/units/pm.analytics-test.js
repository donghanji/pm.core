/*
 * unit
 *
 * http://jasmine.github.io/2.2/introduction.html
 */
describe("pm.analytics", function() {
    //
    module.declare(['pm.analytics'],function(require){
        //pm.analytics
        var pm=require('pm');
        var analytics=require('pm.analytics');
        var utils=pm.utils;
        
        describe('pm.analytics object',function(){
            it('pm.analytics is a function',function(){
                //
                expect(utils.isFunction(analytics)).toBe(true);
            });
            it('defined analytics.create',function(){
                //
                expect(analytics.create).toBeDefined();
            });
            
            it('analytics.get method',function(){
                //
                expect(analytics.prototype.get).toBeDefined();
            });
            it('analytics.info method',function(){
                //
                expect(analytics.prototype.info).toBeDefined();
            });
        });
    });
});
