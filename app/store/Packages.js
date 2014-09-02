Ext.define('LogBook.store.Packages', {
    extend: 'Ext.data.Store',
    config: {
        model: 'LogBook.model.Package',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id  : 'packages'
        },
        groupField:'aptNum'
    }
});
