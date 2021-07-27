import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;

  margin: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 36}px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 50px;

  padding: 36px 0 16px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  margin-bottom: 4px;
  
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  line-height: ${RFValue(10.88)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  line-height: ${RFValue(27.12)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  margin-bottom: 4px;
  
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  line-height: ${RFValue(10.88)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};

  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  line-height: ${RFValue(27.12)}px;
`;

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const About = styled.Text`
  padding: 16px 0 47px;

  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  line-height: ${RFValue(25)}px;
  text-align: justify;
`;

export const Footer = styled.View`
  width: 100%;

  padding: 24px 24px ${getBottomSpace() + 24}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;
