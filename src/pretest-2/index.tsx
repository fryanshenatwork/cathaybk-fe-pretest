import { useCallback, useMemo, useState } from 'react'
import Header from './components/Header'
import useCalendarDates from './hooks/useCalendarDates'
import { format, add, sub, isSameMonth, isSameDay, isAfter, isBefore } from 'date-fns'
import DateButton from './components/DateButton'

import styles from './styles.module.scss'

interface ISelectedDates {
  0: Date | null
  1: Date | null
}

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState<ISelectedDates>([null, null])
  const [displayMonth, setDisplayMonth] = useState(new Date())
  const calendarDates = useCalendarDates(displayMonth)

  const displayHeader = useMemo(() => format(displayMonth, 'yyyy年M月'), [displayMonth])

  const onClickPrevMonth = useCallback(() => {
    setDisplayMonth((prevState) => sub(prevState, { months: 1 }))
  }, [setDisplayMonth])

  const onClickNextMonth = useCallback(() => {
    setDisplayMonth((prevState) => add(prevState, { months: 1 }))
  }, [setDisplayMonth])

  const onClickDate = useCallback((selectedDate: Date) => {
    if (!selectedDates[0]) {
      setSelectedDates([selectedDate, null])
    } else if (!selectedDates[1]) {
      if (
        isSameDay(selectedDate, selectedDates[0])
        || isAfter(selectedDate, selectedDates[0])
      ) {
        setSelectedDates(prev => [prev[0], selectedDate])
      } else {
        setSelectedDates([selectedDate, null])
      }
    } else {
      setSelectedDates([selectedDate, null])
    }

  }, [selectedDates, setSelectedDates])

  const checkSelected = useCallback((date: Date) => {
    if (!selectedDates[0] && !selectedDates[1]) { return false }

    if (selectedDates[0] && !selectedDates[1]) {
      return isSameDay(date, selectedDates[0])
    } else if (selectedDates[0] && selectedDates[1]) {
      return (
        isSameDay(date, selectedDates[0]) || isAfter(date, selectedDates[0])
      ) && (
        isSameDay(date, selectedDates[1]) || isBefore(date, selectedDates[1])
      )
    }

    return false
  }, [selectedDates])

  const today = useMemo(() => new Date(), [])

  return (
    <div className={styles.calendar}>
      <Header
        onClickPrev={onClickPrevMonth}
        onClickNext={onClickNextMonth}
      >
        { displayHeader }
      </Header>
      <div className={styles.dates}>
        {
          calendarDates.map(({date, key}) => (
            <DateButton
              key={key}
              isToday={isSameDay(today, date)}
              isSelected={checkSelected(date)}
              isSameMonth={isSameMonth(displayMonth, date)}
              onClick={() => onClickDate(date)}
            >{ format(date, 'dd') }</DateButton>
          ))
        }
      </div>
    </div>
  )
}

export default Calendar