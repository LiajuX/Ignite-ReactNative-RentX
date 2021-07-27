import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from '../../dtos/carDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
  About,
  Brand,
  CarImage,
  Container, 
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type
} from './styles';

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon width={RFValue(20)} height={RFValue(20)} />
          </Type>
        </About>
      </Details>

      <CarImage 
        resizeMode="contain" 
        source={{ uri: data.thumbnail }} 
      />
    </Container>
  );
}
