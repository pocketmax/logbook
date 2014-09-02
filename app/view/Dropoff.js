Ext.define('LogBook.view.Dropoff', {
    extend: 'Ext.Container',
    xtype: 'dropoffpanel',
    alias: 'widget.dropoff',
    requires: ['LogBook.store.Packages'],
    config: {
        layout: 'hbox',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            itemId: 'heading',
            title: 'dropoff',
            items: [{
                xtype: 'button',
                itemId: 'pickup',
                text: 'pickup'
            }]
        },{
            xtype: 'list',
            itemId: 'results',
            store: 'packages',
            flex: 2,
            itemTpl: '{aptNum} {carrier}'
        },{
            xtype: 'formpanel',
            flex: 1,
            items: [{
                xtype: 'radiofield',
                name : 'carrier',
                value: 'UPS',
                label: 'UPS'
            },{
                xtype: 'radiofield',
                name : 'carrier',
                value: 'FEDEX',
                label: 'FEDEX'
            },{
                xtype: 'radiofield',
                name : 'carrier',
                value: 'USPS',
                label: 'USPS'
            },{
                xtype: 'radiofield',
                name : 'carrier',
                value: 'ONTRAC',
                label: 'ONTRAC',
                labelWidth: '40%'
            },{
                xtype: 'keypad'
            }]

        }]
    }
});