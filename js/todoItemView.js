var TodoItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        if(!(options && options.model))
            throw new Error("TodoItemView requires a model");
        this.model.on('change',this.render,this)
    },

    events:{
        'click #toggle': 'onClickToggle',
        'click #delete': 'onClickDelete'
    },
    onClickToggle: function(){
        this.model.toggle();
        this.model.save();
    },
    onClickDelete: function(){
        this.model.destroy();
    },


    render:function(){

        this.$el.attr('id',this.model.id);
        this.$el.toggleClass('completed', this.model.get('completed'))
        var template = $("#todoItemTemplate").html();
        var html = Mustache.render(template,this.model.toJSON());
        this.$el.html(html);
        return this;
    }
});