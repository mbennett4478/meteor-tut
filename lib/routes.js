FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('homeLayout');
	}	
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		BlazeLayout.render('mainLayout', {main: 'recipes'});
	}	
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe-book',
	action() {
		BlazeLayout.render('mainLayout', {main: 'recipeSingle'});
	}	
});