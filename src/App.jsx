/* eslint-disable jsx-a11y/accessible-emoji */
import './App.scss';
import { useState } from 'react';

import { findProducts, findProductsByQuery } from './api';
import { Table } from './components/Table';
import { UserTabs } from './components/Tabs';
import usersFromServer from './api/users';

// const products = productsFromServer.map((product) => {
//   const category = null; // find by product.categoryId
//   const user = null; // find by category.ownerId

//   return null;
// });

export const products = findProducts();

export const App = () => {
  const [sortField, setSortField] = useState('');
  const visibleProducts = findProductsByQuery(products, sortField);
  const reset = () => {
    setSortField('');
  };

  const [selectedUser, setSelectedUser] = useState(usersFromServer[0]);
  const onUserSelected = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <UserTabs
              users={usersFromServer}
              selectedUser={selectedUser}
              onUserSelected={onUserSelected}
            />

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  onChange={(event) => {
                    setSortField(event.target.value);
                  }}
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                <span className="icon is-right">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  {sortField && (
                  <button
                    onClick={reset}
                    data-cy="ClearButton"
                    type="button"
                    className="delete"
                  />
                  )
                  }
                </span>
              </p>
            </div>

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

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          { visibleProducts.length > 0 ? (
            <Table products={visibleProducts} />
          ) : (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
