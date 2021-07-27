import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: ${RFValue(109)}px;
  height: ${RFValue(92)}px;

  margin-bottom: 8px;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Name = styled.Text`
  margin-top: 12px;

  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;
