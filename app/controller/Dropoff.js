Ext.define('LogBook.controller.Dropoff', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'toolbar button#dropoff': {
                tap: function(itm){
                    console.log(itm);
                    var maindeck = Ext.getCmp('maindeck');
                    maindeck.setActiveItem('dropoff');
                }
            },
            'dropoffpanel': {
                activate: function (itm) {
                    itm.down('list#results').getStore().clearFilter();
                    itm.down('list#results').getStore().filter([{id: 'pickupdatetime', property: 'pickupDateTime', value: null}]);

                }
            },
            'dropoffpanel radiofield#carrier': {
                tap: function (itm) {
                    var store = itm.up('dropoffpanel').down('list#results').getStore();
                    store.filter('carrier', itm.getValue());
                }
            },
            'dropoffpanel keypad': {
                enter: function(itm, val){
                    var panel = itm.up('dropoffpanel');
                    var results = panel.down('list#results');
                    var formData = panel.down('formpanel').getValues();
                    if( Ext.isEmpty(formData.carrier) ){
                        alert('carrier is a required field');
                        return false;
                    } else {
                        for(var i = 1; i<=formData.totalPackages; i++){
                            results.getStore().add({
                                aptNum: Ext.Number.from(val,0),
                                carrier: formData.carrier
                            });
                        }
                        panel.down('formpanel').setValues({totalPackages: 1});
                        console.log('add package with apt: ' + Ext.Number.from(val,0) + ' and carrier: ' + formData.carrier);
                    }
                    return true;
                }
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
