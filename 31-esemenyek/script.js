$('#button1').on('click', () => {
    console.log('Igen, most rámkattintottál');
});

$('#button2').on('click', () => {
    $('#button1').text('Másik felirat');
});

$('#button3').on('click', () => {
    $('button').css('background-color', $('#text').val());
    $('#button3').attr('disabled', true);
});