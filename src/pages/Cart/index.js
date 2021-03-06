import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import * as CartAction from '../../store/modules/cart/action'

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

import formatValue from "../../utils/formatValue";
import EmptyCart from "../../components/EmptyCart";

export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector(({ cart }) => cart)

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + (product.price * product.amount);
      return totalPrice;
    }, 0);

    return formatValue(cartAmount)
  }, [products]);

  function increment(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount - 1));
  }

  function removeFromCart(id) {
    dispatch(CartAction.removeFromCart(id));
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                  <TotalContainer>
                    <ProductQuantity>{`${item.amount}x`}</ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.amount)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => increment(item)}>
                  <FeatherIcon name="plus" color="#E83F5B" size={16} />
                </ActionButton>
                <ActionButton onPress={() =>
                  item.amount > 1 ?   decrement(item) : removeFromCart(item.id)
                }>
                  <FeatherIcon name="minus" color="#E83F5B" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{cartSize} {cartSize == 1 ? 'item' : 'itens'}</TotalProductsText>
        <SubtotalValue>{cartTotal}</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
}
