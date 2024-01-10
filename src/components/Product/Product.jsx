import classNames from 'classnames';

import { findCategory, findUser } from '../../api';

export const Product = ({ product }) => {
  const category = findCategory(product.categoryId);
  const user = findUser(category.ownerId);

  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {product.id}
      </td>

      <td data-cy="ProductName">{product.name}</td>
      <td data-cy="ProductCategory">{`${category.icon} - ${category.title}`}</td>

      <td
        data-cy="ProductUser"
        className={classNames(
          { 'has-text-link': user.sex === 'm',
            'has-text-danger': user.sex === 'f' },
        )}
      >
        {user.name}
      </td>
    </tr>
  );
};
