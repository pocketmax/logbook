//pickup form used by residents to pickup packages
Ext.define('LogBook.view.Pickup', {
    extend: 'Ext.form.Panel',
    xtype: 'pickuppanel',
    alias: 'widget.pickup',
    requires: ['LogBook.view.Keypad'],
    config: {
        title: 'Pickup',
        layout: 'hbox',
        items: [{
            xtype: 'spacer',
            flex: 1
        },{
            xtype: 'toolbar',
            docked: 'top',
            itemId: 'heading',
            title: 'pickup',
            items: [{
                xtype: 'button',
                itemId: 'dropoff',
                text: 'dropoff'
            },{
                xtype: 'button',
                itemId: 'history',
                docked: 'right',
                text: 'history'
            }]
        }, {
            xtype: 'keypad',
            padding: '100 0 0 0'
        },{
            xtype: 'spacer',
            flex: 1
        }]
    }
});