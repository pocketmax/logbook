Ext.define('LogBook.view.History', {
    extend: 'Ext.form.Panel',
    xtype: 'historypanel',
    alias: 'widget.history',
    requires: ['LogBook.store.Packages'],
    config: {
        layout: 'hbox',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            itemId: 'heading',
            title: 'history',
            items: [{
                xtype: 'button',
                itemId: 'pickup',
                text: 'pickup'
            }]
        },{
            xtype: 'toolbar',
            docked: 'top',
            itemId: 'historyheading',
            defaults: {
                width: 150,
                labelWidth: '100'
            },
            items: [{
                xtype: 'segmentedbutton',
                itemId: 'groupby',
                docked: 'left',
                items: [{
                    text: 'group by carrier',
                    itemId: 'carrier'
                }, {
                    text: 'group by Apt #',
                    itemId: 'aptNum',
                    pressed: true
                }]
            }, {
                xtype: 'segmentedbutton',
                itemId: 'orderby',
                docked: 'right',
                items: [{
                    text: 'order by carrier',
                    itemId: 'carrier',
                    pressed: true
                }, {
                    text: 'order by Apt #',
                    itemId: 'aptNum'
                }]
            }]
        },{
            xtype: 'list',
            flex: 1,
            grouped: true,
            itemId: 'results',
            store: 'packages',
            itemTpl: '{aptNum} {carrier} pickup: {pickupDateTimeLabel} dropoff: {dropoffDateTimeLabel}'
        }]
    }
});