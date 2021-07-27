import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  align-items: flex-start;

  width: 100%;
  height: ${RFValue(273)}px;

  padding: ${getStatusBarHeight() + 18}px 24px 0;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  width: ${RFValue(350)}px;

  margin-top: 24px;

  color: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Subtitle = styled.Text`
  margin-top: 18px;

  color: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Content = styled.View`
  flex: 1;

  width: 100%;
  
  padding: 0 16px;
`;

export const Appointments = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 8px 29px;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CarWrapper = styled.View``;

export const CarFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: -14px;
  margin-bottom: 16px;
  padding: 12px 24px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;
