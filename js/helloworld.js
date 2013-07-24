/*
$(document).ready( function () {
            var title = $("h1").attr("title");
            alert($("h1"));
});
*/
/*
$(function(){
    var Todo = Backbone.Model.extend({   
    defaults: function() {
      return {
        title: "empty todo...",
        order: Todos.nextOrder(),
        done: false
      };
    },
     toggle: function() {
      this.save({done: !this.get("done")});
    }
    })});
*/

/* test1
(function($){
    var ListView = Backbone.View.extend({
    el: $('body'), // attaches `this.el` to an existing element.
    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

       this.render(); // not all views are self-rendering. This one is.
    },
    render: function(){
      $(this.el).append("<ul> <li>hello world!</li> </ul>");
    }
  });
  var listView = new ListView();
})(jQuery);
*/

 Person = Backbone.Model.extend({
   defaults: {
     name: 'Fetus',
     age: 0,
     children: []
    },
    initialize: function(){
     //alert("Welcome to this world");
     this.bind("change:name", function(){
         var name = this.get("name"); // 'Stewie Griffin' 
         //alert("Changed my name to " + name );
      });
     },
     replaceNameAttr: function( name ){
      this.set({ name: name });
      }
    });

 var person = new Person({ name: "Thomas", age: 67, children: ['Ryan']});
 person.replaceNameAttr('Stewie Griffizzzzzzzzzzzn');
 // This triggers a change and will alert()