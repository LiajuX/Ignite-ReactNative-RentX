import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  align-items: flex-start;

  width: 100%;
  height: ${RFValue(325)}px;

  padding: ${getStatusBarHeight() + 18}px 24px 0;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  width: ${RFValue(230)}px;

  margin-top: 24px;

  color: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 32px;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;

export const DateValue = styled.Text<DateValueProps>`
  ${({ selected, theme }) => !selected && css`
    border-bottom-width: 1px;
    border-color: ${theme.colors.text};
  `};

  color: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  width: 100%;

  padding: 24px 24px ${getBottomSpace() + 24}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
