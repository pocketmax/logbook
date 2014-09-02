Ext.define('LogBook.controller.SearchResults', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'searchresultspanel toolbar button#back': {
                tap: function(itm){
                    itm.up('main').setActiveItem('pickup');
                }
            },
            'searchresultspanel button#pickup': {
                tap: function(itm){
                    var store = itm.up('searchresultspanel').down('list#results').getStore();
                    store.each(function(r){
                        r.set('pickupDateTime',Ext.Date.now());
                    });
                    store.clearFilter('apt');
//                    store.sync();

                }
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
