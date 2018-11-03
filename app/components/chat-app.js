import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default Component.extend({

	title: 'Messaging',
	lists: [
		{avatar:'assets/images/user-profile.png',name:'Dery Aprianto',date:'Dec 25',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.'},
		{avatar:'assets/images/user-profile.png',name:'Abigail Hanzo',date:'Nov 11',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua.'},
		{avatar:'assets/images/user-profile.png',name:'Sunil Rajput',date:'Feb 10',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{avatar:'assets/images/user-profile.png',name:'Merry',date:'Jan 20',text:'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{avatar:'assets/images/user-profile.png',name:'Riska Putri',date:'Feb 12',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{avatar:'assets/images/user-profile.png',name:'Rudi Harianto',date:'Nov 14',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.'},
		{avatar:'assets/images/user-profile.png',name:'Mujaidin',date:'Nov 13',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.'},
	],

    activeUserService: service('active-user'),
    nameIsSet: computed('activeUserService.user',function() {
    	const usernames = this.get('activeUserService').get('user');
    	user: this.get('activeUserService').get('user'),
    	console.log(usernames);
        return this.get('activeUserService').hasUser();
    }),

});
