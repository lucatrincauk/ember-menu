App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://mns-menu.firebaseio.com')
});
App.ApplicationSerializer = DS.FirebaseSerializer.extend();

App.Router.map(function() {
	this.resource('dishes', function() {
		this.route('add');
	});
	this.resource('dish', { path: 'dishes/:dish_id' });	
	this.resource('days');
	
});

App.DishesRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('dish');
	}
});
App.DaysRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('day');

	}
});

App.Dish = DS.Model.extend({
	title: DS.attr(),
	image: DS.attr(),
	description: DS.attr()
});
App.Day = DS.Model.extend({
	dish: DS.attr()
});

    App.DishesAddController = Ember.ObjectController.extend({
      init: function() {
        this.set('dish',  Ember.Object.create());
      },
      
        saveDish: function() {
       
            var newDish = this.store.createRecord('dish', {
              title: this.get('dish.title')
            });
   
         
        }
      
    });

// App.Dish.FIXTURES = [
// 	{
// 		"id": 0,
// 		"title": "Pasta Carbonara",
// 		"image": "images/app-carbonara.jpg",
// 		"description": "Carbonara is an Italian pasta dish from Latium, and more specifically Rome, based on eggs, cheese, bacon, and black pepper."
// 	},
// 	{
// 		"id": 1,
// 		"title": "Sausage and mash",
// 		"image": "images/app-sausage-and-mash.jpg",
// 		"description": "Sausages and mash is a traditional British dish made of mashed potatoes and sausages."
// 	},
// 	{
// 		"id": 2,
// 		"title": "Fish and chips",
// 		"image": "images/app-fish-and-chips.jpg",
// 		"description": "Fish and chips is a hot dish of English origin, consisting of battered fish, commonly Atlantic cod or haddock, and deep-fried chips."
// 	}
// ];