$('#inc').on('click', () => { 
    $('#number').text(parseInt($('#number').html()) + 1)
});

$('#dec').on('click', () => { 
    $('#number').text(parseInt($('#number').html()) - 1)
});
