$(document).ready(function() {
    var todoItems = new TodoItems([
        new TodoItem({description : 'asdkh1'}),
        new TodoItem({description : 'asdkh2'})
    ]);
    var todoItemsView = new TodoItemsView({model : todoItems});
    $('body').append(todoItemsView.render().$el);
});
