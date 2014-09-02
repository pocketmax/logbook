Ext.define('LogBook.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    id: 'maindeck',
    requires: [
        //'Ext.TitleBar',
        //'Ext.Video'
    ],
    config: {
        layout: 'card',
        items: [{
            xtype: 'pickuppanel',
            itemId: 'pickup'
        },{
            xtype: 'dropoffpanel',
            itemId: 'dropoff'
        },{
            xtype: 'searchresultspanel',
            itemId: 'searchresults'
        },{
            xtype: 'historypanel',
            itemId: 'history'
        }]
    }
});
