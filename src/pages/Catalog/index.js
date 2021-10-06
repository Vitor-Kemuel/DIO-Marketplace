import React, { useState } from 'react';
import View from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';
import {
  Container,
  PriceContainer,
  Product,
  ProductButton,
  ProductButtonText,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle
} from './styles';

export default function Catalog() {
  const [products, setProducts] = useState([
    {
      id: '1',
      title: 'Assinatura Trimestral',
      image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
      price: 150,
    },
  ]);
  return(
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtrator={(item) => item.id}
          listFooterComponents={ <View /> }
          listFooterComponentsStyle={{
            heigth: 80,
          }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{ formatValue(item.price) }</ProductPrice>
                <ProductButton onPress = {()=>{}}>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
    </Container>
  );
};
