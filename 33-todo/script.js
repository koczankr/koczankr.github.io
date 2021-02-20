$('#add').on('click', () => { 
    $('#todos').append(`<li class="athuzhato">${$('#nextTodo').val()}</li>`)
});

$('ul').on('click', '.athuzhato', (event) => { 
    $(event.target).toggleClass('athuzott');
});
