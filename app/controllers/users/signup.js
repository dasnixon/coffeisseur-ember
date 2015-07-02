import Ember from 'ember';

export default Ember.Controller.extend({
  isSaving: false,

  actions: {
    save() {
      this.get('model').validate().then(() => {
        this.get('isSaving', true);
        this.get('model').save().then((response) => {
          this.transitionToRoute('index');

          this.get('session').authenticate('simple-auth-authenticator:devise', {
            identification: response.session.email,
            password: response.session.password
          });
        });
      }).catch(() => {
        this.set('isSaving', false);
      });
    }
  }
});
