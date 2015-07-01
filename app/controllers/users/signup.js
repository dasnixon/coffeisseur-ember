import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((response) => {
        this.transitionToRoute('index');

        this.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: response.session.email,
          password: response.session.password
        });
      });
    }
  }
});
