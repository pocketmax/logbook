Ext.define('LogBook.view.SearchResults', {
    extend: 'Ext.Container',
    xtype: 'searchresultspanel',
    alias: 'widget.searchresults',
    search: function(apt){
        console.log('search worked!');
        this.getComponent('results').getStore().clearFilter();
        this.getComponent('results').getStore().filter([{
            id: 'pickupdatetime', property: 'pickupDateTime', value: null
        }, {
            id: 'apt', property: 'aptNum', value: apt
        }]);
    },
    config: {
        layout: 'hbox',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            itemId: 'heading',
            title: '',
            items: [{
                xtype: 'button',
                itemId: 'back',
                text: 'pickup'
            }]
        },{
            xtype: 'list',
            itemId: 'results',
            store: 'packages',
            flex: 2,
            itemTpl: '{aptNum} {carrier}'
       },{
            xtype: 'container',
            flex: 1,
            items: [{
                xtype: 'label',
                html: 'signature'
            },{
                xtype: 'component',
                html: 'sign here'
            },{
                xtype: 'button',
                itemId: 'pickup',
                text: 'pickup'
            }]
        }]
    }
});