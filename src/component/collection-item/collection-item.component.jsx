import React from 'react';
import './collection-item.styles.scss'

import CustomButotn from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
    <CustomButotn onClick={() => addItem(item)} inverted>
      Add to cart
    </CustomButotn>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);