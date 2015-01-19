Ext.define('LogBook.controller.History', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            panel: 'historypanel',
            results: 'historypanel list#results'

        },
        control: {
            'toolbar button#history': {
                tap: function(itm){
                    var maindeck = Ext.getCmp('maindeck');
                    maindeck.setActiveItem('history');
                }
            },
            'toolbar#historyheading #groupby': {
                toggle: function(seg, itm){
                    console.log(itm);
                    console.log(itm.getItemId());
                    var results = this.getResults();
                    results.getStore().setGroupField(itm.getItemId()).load();
                }
            },
            'toolbar#historyheading #orderby': {
                toggle: function(seg, itm){
                    console.log(itm);
                    console.log(itm.getItemId());
                    var results = this.getResults();
                    results.getStore().sort(itm.getItemId());
                    results.getStore().load();
                }
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
