$('#add').on('click', () => { 
    $('#todos').append(`<li class="item">${$('#nextTodo').val()}<span class="action"><img class="trash" src="./style/trash.svg" alt="törlés"><img class="done" src="./style/done1.svg" alt="kész"></span></li>`)
    $('#nextTodo').val('')
    $('#nextTodo').focus()
});

$('ul').on('click', '.done', (event) => { 
    $(event.target).parent().parent().toggleClass('kesz');

    if ($(event.target).attr('src') === './style/done2.svg') { 
        $(event.target).attr('src', './style/done1.svg')
    }
    else {
        $(event.target).attr('src', './style/done2.svg')
    }
});

$('ul').on('click', '.trash', (event) => { 
    $(event.target).parent().parent().remove();
});
