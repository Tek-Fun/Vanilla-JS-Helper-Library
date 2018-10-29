var serializeArray = function(form) {
  var serialized = [];
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];

    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

    if (field.type === 'select-multiple') {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push({
          name: field.name,
          value: field.options[n].value
        });
      }
    } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized.push({
        name: field.name,
        value: field.value
      });
    }
  }
  return serialized;
};
