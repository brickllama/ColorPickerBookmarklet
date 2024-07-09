(function() { function createPopup() { 
    var colorPicker = window.open('', '_blank', 'width=300,height=200,scrollbars=no,resizable=yes');
    colorPicker.document.write('<html><head><title>Color Picker</title></head><body style="font-family: Arial, sans-serif; text-align: center;">');
    colorPicker.document.write('<h2 style="color: #333;">Color Picker</h2>');
    colorPicker.document.write('<input type="color" />');
    }
    createPopup();
})();