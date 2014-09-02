Ext.define('LogBook.controller.Pickup', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'toolbar button#pickup': {
                tap: function (itm) {
                    itm.up('main').setActiveItem('pickup');
                }
            },
            'pickuppanel keypad': {
                enter: function(itm, val){
                    var maindeck = Ext.getCmp('maindeck');
                    var searchresults = maindeck.getComponent('searchresults');
                    searchresults.search(val);
                    maindeck.setActiveItem(searchresults);
                }
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
