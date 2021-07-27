import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { 
  Calendar as CustomCalendar, 
  LocaleConfig,
  DateCallbackHandler
} from 'react-native-calendars';

import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDatesProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  },
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps {
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={( direction ) => 
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      }

      headerStyle={{
        marginBottom: 10,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        backgroundColor: theme.colors.background_secondary,
      }}

      theme={{
        textDayFontFamily: theme.fonts.secondary_400,
        textDayHeaderFontSize: 10,
        textDayHeaderFontFamily: theme.fonts.primary_600,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.primary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}

      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export {
  Calendar,
  MarkedDatesProps,
  DayProps,
  generateInterval
}
