import Ember from 'ember';

export default Ember.Controller.extend({
  isSaving: false,

  actions: {
    save() {
      this.get('model').validate().then(() => {
        this.get('isSaving', true);
        this.get('model').save().then(() => {
          this.transitionToRoute('index');

          this.get('session').authenticate('simple-auth-authenticator:devise', {
            identification: this.get('model.email'),
            password: this.get('model.password')
          });
        }, (/*response */) => {
          this.set('isSaving', false);
        });
      }).catch(() => {
        this.set('isSaving', false);
      });
    }
  }
});
