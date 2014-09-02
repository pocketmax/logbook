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
                xtype: 'label',
                html: 'group by: ',
                docked: 'left'
            },{
                xtype: 'radiofield',
                name: 'groupby',
                label: 'carrier',
                value: 'carrier',
                docked: 'left'
            }, {
                xtype: 'radiofield',
                name: 'groupby',
                label: 'Apt #',
                value: 'aptNum',
                docked: 'left'
            }, {
                xtype: 'label',
                html: ' :order by',
                docked: 'right'
            },{
                xtype: 'radiofield',
                name: 'orderby',
                label: 'Apt #',
                value: 'aptNum',
                docked: 'right'
            },{
                xtype: 'radiofield',
                name: 'orderby',
                label: 'carrier',
                value: 'carrier',
                docked: 'right'
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