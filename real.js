const Book = (function () {
  /**
   * Book class
   * @param {string} author
   * @param {string} title
   * @param {number} pages
   */
  function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  }

  /**
   * returns the author of the book
   * @returns string
   */
  Book.prototype.getAuthor = function () {
    return this.author;
  };

  /**
   * returns the title of the book
   * @returns string
   */
  Book.prototype.getTitle = function () {
    return this.title;
  };

  /**
   * returns the number pages of the book
   * @returns string
   */
  Book.prototype.getPages = function () {
    return this.pages;
  };

  return Book;
})();
