export const CategoriesTabs = () => {
  
 return (
    <div className="panel-block is-flex-wrap-wrap">
    <a
      href="#/"
      data-cy="AllCategories"
      className="button is-success mr-6 is-outlined"
    >
      All
    </a>

    <a
      data-cy="Category"
      className="button mr-2 my-1 is-info"
      href="#/"
    >
      Category 1
    </a>

    <a
      data-cy="Category"
      className="button mr-2 my-1"
      href="#/"
    >
      Category 2
    </a>

    <a
      data-cy="Category"
      className="button mr-2 my-1 is-info"
      href="#/"
    >
      Category 3
    </a>
    <a
      data-cy="Category"
      className="button mr-2 my-1"
      href="#/"
    >
      Category 4
    </a>
  </div>
 )
}