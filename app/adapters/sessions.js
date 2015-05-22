import ApplicationAdapter from '/adapters/application';

export default ApplicationAdapter.extend({
  authenticate: function(data) {
    var url = this.buildURL('session');
    return this.ajax(url, 'POST', {
      data: data
    });
  }
});
