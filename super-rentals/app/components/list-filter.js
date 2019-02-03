import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.doFilter('');
  },

  actions: {
    handleFilterEntry() {
      this.doFilter(this.value);
    }
  },

  doFilter(filterValue){
    let filterAction = this.filter;
    filterAction(filterValue).then((filterResults) => {
      if (filterResults.query === this.value) {
        this.set('results', filterResults.results);
      }
    });
  }
});
