/*
 * unit
 *
 * http://jasmine.github.io/2.2/introduction.html
 */
describe("pm.ajax", function() {
    //
    module.declare(['pm.ajax'],function(require){
        var ajax=require('pm.ajax');
        
        describe('pm.ajax object',function(){
            it('defined ajax.config',function(){
                //
                expect(ajax.config).toBeDefined();
            });
            it('defined ajax.request',function(){
                //
                expect(ajax.request).toBeDefined();
            });
        });
    });
});
