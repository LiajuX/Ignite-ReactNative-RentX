import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 16px;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(92)}px;
`;
