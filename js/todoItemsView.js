var TodoItemsView = Backbone.View.extend({
    tagName:"ul",
    id:'todoItems',
    initialize:function (options) {
        if(!(options && options.model))
            throw new Error('Model is not specified.');
        this.model.on('add',this.onAdd,this);
        this.model.on('remove',this.onRemove,this);
    },

    onRemove:function(todoItem){
        this.$('li#' + todoItem.id).remove();
    },

    onAdd:function (todoItem) {
        var todoItemView = new TodoItemView({model:todoItem});
        this.$el.append(todoItemView.render().el);
    },


    events:{
        'click #addItem':'addItem',
        'keypress #newTodoItem':'onKeyPress'
    },


    onKeyPress:function (e) {
        if (e.keyCode == 13) {
            this.addItem();
        }
    },


    addItem:function () {

        var $textBox = this.$('#newTodoItem');
        if ($textBox.val() === '') 
            return;
        var item = new TodoItem({title:$textBox.val()});
        this.model.create(todoItem)
        $textBox.val('');
    },

    render: function () {
        var self = this;
        this.$el.append("<input type= 'text' id='newTodoItem' autofocus/>");
        this.$el.append("<button id='addItem'>Add Item</button>");
        this.model.each(function(todoItem){
            var todoItemView = new TodoItemView({model: todoItem});
            self.$el.append(todoItemView.render().$el)
        });
        return this;
    }
})