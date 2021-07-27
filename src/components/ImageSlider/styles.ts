import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;

  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  margin-left: 8px;
  border-radius: 3px;

  background-color: ${({ theme, active }) => 
    active ? theme.colors.shape_dark : theme.colors.shape
  };
`;

export const CarImageWrapper = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: 36px;

  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
