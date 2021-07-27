import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { CarDTO } from '../../dtos/carDTO';

import { LoadAnimation } from '../../components/LoadAnimation';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';

import api from '../../services/api';

import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
  Container, 
  Content, 
  Header, 
  Subtitle, 
  Title
} from './styles';

interface CarProps {
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
  id: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);

      } catch (error) {
        console.log(error);

      } finally {
        setIsLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <BackButton 
          onPress={handleGoBack} 
          color={theme.colors.background_secondary} 
        />

        <Title>
          Seus agendamentos, estão aqui.
        </Title>

        <Subtitle>
          Conforto, segurança e praticidade.
        </Subtitle>
      </Header>

      { isLoading ? <LoadAnimation /> :
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>
              { cars.length < 9 ? `0${cars.length}` : cars.length }
            </AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />

                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>

                  <CarFooterPeriod>
                    <CarFooterDate>{ item.startDate }</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={14}
                      color={theme.colors.text_detail}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{ item.endDate }</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      }
    </Container>
  );
}
