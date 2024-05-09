class SearchView {
  _parentElement = document.querySelector('.search');
  _searchInputEl = this._parentElement.querySelector('.search__field');

  getQuery() {
    const query = this._searchInputEl.value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._searchInputEl.value = '';
    this._searchInputEl.blur();
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
