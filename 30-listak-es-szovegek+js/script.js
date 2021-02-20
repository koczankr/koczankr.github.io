let names = ['Krisztián', 'Anita', 'Kende', 'Kamilla'];
$('body').append('<ul id="lista">');

names.forEach((name) => {
    if (name === 'Krisztián') {
        $('#lista').append(`<li><strong>${name}</strong></li>`);
    } else {
        $('#lista').append(`<li>${name}</li>`);
    }
});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

  $('body').append(`<h1>${additionalBlock.title}</h1>`);
  $('body').append(`<p>${additionalBlock.text}</p>`);