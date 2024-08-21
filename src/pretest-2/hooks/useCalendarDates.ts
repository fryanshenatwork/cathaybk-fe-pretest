import {
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval
} from 'date-fns'

const useCalendarDates = (displayMonth: Date) => {
  const start = startOfWeek(startOfMonth(displayMonth))
  const end = endOfWeek(endOfMonth(displayMonth))

  return eachDayOfInterval({ start, end }).map((e, idx) => ({ date:e, key: idx }))

}

export default useCalendarDates