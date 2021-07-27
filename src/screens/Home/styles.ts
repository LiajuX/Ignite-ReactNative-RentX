import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../dtos/carDTO';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  justify-content: flex-end;

  width: 100%;
  height: ${RFValue(113)}px;

  padding: 32px 24px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>)
.attrs({
  contentContainerStyle: {
    padding: 16
  },
  showsVerticalScrollIndicator: false,
})``;
