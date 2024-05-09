import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = Number(btn.dataset.goto);
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.currentPage;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // 1st page
    if (currentPage === 1 && numPages > 1) {
      return `
        ${this._generateMarkupButtonRight(currentPage)}
          `;
    }
    // 1st page and other pages
    //other pages
    if (currentPage < numPages) {
      return `
      ${this._generateMarkupButtonLeft(currentPage)}
      ${this._generateMarkupButtonRight(currentPage)}
        `;
    }
    //last page
    if (currentPage === numPages && numPages > 1) {
      return `
      ${this._generateMarkupButtonLeft(currentPage)}
        `;
    }

    return '';
  }
  _generateMarkupButtonLeft(currentPage) {
    return `
        <button data-goto='${
          currentPage - 1
        }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>`;
  }

  _generateMarkupButtonRight(currentPage) {
    return `
    <button data-goto='${
      currentPage + 1
    }' class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;
  }
}

export default new PaginationView();
