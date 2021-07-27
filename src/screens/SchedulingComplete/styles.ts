import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  padding-top: 96px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-bottom: 80px;
`;

export const Title = styled.Text`
  margin: 40px 0 16px;

  color: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Message = styled.Text`
  width: ${RFValue(250)}px;

  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  line-height: ${RFValue(25)}px;
  text-align: center;
`;

export const Footer = styled.View`
  align-items: center;

  width: 100%;

  margin: 80px 0;
`;
