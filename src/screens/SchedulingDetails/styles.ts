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

  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 36}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 40px;
  padding-bottom: 16px;
  padding-right: 18.5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIcon = styled.View`
  align-items: center;
  justify-content: center;

  padding: 12px;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const RentalPrice = styled.View`
  width: 100%;

  margin: 16px 0;
`;

export const RentalPriceLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const RentalPriceQuota = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const RentalPriceTotal = styled.Text`
  color: ${({ theme }) => theme.colors.success};

  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Footer = styled.View`
  width: 100%;

  padding: 24px 24px ${getBottomSpace() + 24}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;
