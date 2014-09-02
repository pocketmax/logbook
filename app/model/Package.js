Ext.define('LogBook.model.Package', {
    extend: 'Ext.data.Model',
    //requires: ['LogBook.model.Carrier','LogBook.model.Resident'],
    config: {
        fields: [
            { name: 'aptNum', type: 'int' },
            { name: 'carrier', type: 'string' },
            { name: 'dropoffDateTime', type: 'int', defaultValue: Ext.Date.now() },
            { name: 'dropoffDateTimeLabel', convert: function(v, r){
                if(!r.get('dropoffDateTime')){
                    return '-';
                }
                return Ext.util.Format.date(new Date(r.get('dropoffDateTime')),'m/d/Y h:m a')
            } },
            { name: 'pickupDateTime', type: 'int', defaultValue: null },
            { name: 'pickupDateTimeLabel', convert: function(v, r){
                if(!r.get('pickupdateDateTime')){
                    return '-';
                }
                return Ext.util.Format.date(new Date(r.get('pickupDateTime')),'m/d/Y h:m a')
            } }

        ]
//        associations: [
//            { type: 'belongsTo', model: 'LogBook.model.Carrier', modelKey: 'id', foreignKey: 'carrierId' },
//            { type: 'belongsTo', model: 'LogBook.model.Resident', modelKey: 'aptNum', foreignKey: 'aptNum' }
//        ]
    }
});
