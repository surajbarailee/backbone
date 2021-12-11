var TodoItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        if(!(options && options.model))
        throw new Error("TodoItemView requires a model");
    },

    render:function(){
        this.$el.html(this.model.get('description'));
        return this;
    }
});