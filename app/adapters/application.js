import DS from 'ember-data';
import ENV from 'frontend/config/environment';

export default DS.JSONAPIAdapter.extend(CacheableAdapterMixin, {

  namespace : ENV.APP.API_NAMESPACE,
  host      : ENV.APP.API_HOST,

});
