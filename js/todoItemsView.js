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
        'keypress #newTodoItem':'onKeyPress'
    },


    onKeyPress:function (e) {
        if (e.keyCode == 13) {
            var $textBox = this.$('#newTodoItem');
            if ($textBox.val() === '') 
                return;
            var item = new TodoItem({title:$textBox.val()});
            this.model.create(item)
            $textBox.val('');
            }
    },

    render: function () {
		var template = $("#todoItemsTemplate").html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
    }
})