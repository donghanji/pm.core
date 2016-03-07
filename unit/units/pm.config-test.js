/*
 * unit
 *
 * http://jasmine.github.io/2.2/introduction.html
 */
describe("pm.config", function() {
    //
    module.declare(['pm.config'],function(require){
        //pm.config
        describe('pm.config object',function(){
            var mc=require('pm.config');
            
            it('config LOGIC_SERVER_PATH',function(){
                //
                expect(mc.LOGIC_SERVER_PATH).toBeDefined();
            });
            it('config AJAX_RESTFUL_API',function(){
                //
                expect(mc.AJAX_RESTFUL_API).toBeDefined();
            });
        });
    });
});
