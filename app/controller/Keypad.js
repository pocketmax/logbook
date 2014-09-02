Ext.define('LogBook.controller.Keypad', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'keypad button': {
                tap: function(itm){

                    var container = itm.up('keypad');
                    var inputField = container.down('textfield#input');

                    //number field
                    if( Ext.isNumeric(itm.getText()) ){
                        inputField.setValue(inputField.getValue() + itm.getText());
                        container.down('button#enter').enable();
                    }

                    if(itm.getItemId() === 'back'){

                        inputField.setValue(inputField.getValue().slice(0,-1));

                    } else if(itm.getItemId() === 'enter'){
                        if( container.fireEvent('enter',container, inputField.getValue()) ){
                            inputField.setValue('');
                            itm.disable();
                        }
                    }

                }
            }
        }
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
