import {camelize} from '@ember/string';
import Service, {inject as service} from '@ember/service';
import {set} from '@ember/object';

export default Service.extend({

  geocode: service(),
  map: service(),

  init() {
    if (!this.cachedMaps) {
      set(this, 'cachedMaps', {});
    }
    this._super(...arguments);
  },

  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let cachedElement = this.cachedMaps[camelizedLocation];
    if (cachedElement) {
      return cachedElement;
    }
    const createdElement = this._createMapElement();
    let geocodedLocation = await this.geocode.fetchCoordinates(location);
    this.map.createMap(createdElement, geocodedLocation);
    this.cachedMaps[camelizedLocation] = createdElement;
    return createdElement;
  },

  _createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
});