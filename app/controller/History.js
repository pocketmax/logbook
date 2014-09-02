Ext.define('LogBook.controller.History', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'toolbar button#history': {
                tap: function(itm){
                    var maindeck = Ext.getCmp('maindeck');
                    maindeck.setActiveItem('history');
                }
            },
            'toolbar#historyheading radiofield[name=groupby]': {
                check: function(itm){
                    console.log(itm);
                    console.log(itm.getValue());
                    var results = itm.up('formpanel').down('list#results');
                    results.getStore().setGroupField(itm.getValue()).load();
//                    var maindeck = Ext.getCmp('maindeck.');
//                    maindeck.setActiveItem('history');
                }
            },
            'toolbar#historyheading radiofield[name=orderby]': {
                check: function(itm){
                    console.log(itm);
                    console.log(itm.getValue());
                    var results = itm.up('formpanel').down('list#results');
                    results.getStore().sort(itm.getValue());
                    results.getStore().load();

//                    var maindeck = Ext.getCmp('maindeck.');
//                    maindeck.setActiveItem('history');
                }
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
