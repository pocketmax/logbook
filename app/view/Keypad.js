Ext.define('LogBook.view.Keypad', {
    extend: 'Ext.Container',
    xtype: 'keypad',
    requires: ['Ext.Label'],
    config: {
        items: [{
            xtype: 'textfield',
            placeHolder: 'APT #',
            itemId: 'input',
            readOnly: true
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'button',
                flex: 1
            },
            items: [{
                text: '7'
            }, {
                text: '8'
            }, {
                text: '9'
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'button',
                flex: 1
            },
            items: [{
                text: '4'
            }, {
                text: '5'
            }, {
                text: '6'
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'button',
                flex: 1
            },
            items: [{
                text: '1'
            }, {
                text: '2'
            }, {
                text: '3'
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'button',
                flex: 1
            },
            items: [{
                iconCls: 'arrow_left',
                itemId: 'back',
                ui: 'backkey'
            }, {
                text: '0'
            },{
                iconCls: 'arrow_right',
                itemId: 'enter',
                ui: 'enterkey',
                disabled: true
            }]
        }]
    }
});