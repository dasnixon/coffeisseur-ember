import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return 'session';
  },

  authenticate: function(data) {
    var url = this.buildURL('session');
    return this.ajax(url, 'POST', {
      data: data
    });
  }
});
