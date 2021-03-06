import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  buildRows() {
    const products = this.props.products;
    const rows = [];
    let newCategory = null;
    products.forEach((product) => {
      if (newCategory !== product.category || newCategory === null) {
        newCategory = product.category;
        rows.push(<ProductCategoryRow
          key={product.category}
          category={product.category}
        />);
      }

      rows.push(
        <ProductRow 
          key={product.name}
          product={product} 
        />
      );
    });

    return rows;
  }

  render() {
    const rows = this.buildRows();
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
