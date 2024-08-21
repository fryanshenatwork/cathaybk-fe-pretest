import { createContext } from "react";

export interface ICalendarContext {
  displayMonth: Date
  setDisplayMonth: () => void
}

const CalendarContext = createContext<ICalendarContext>({
  displayMonth: new Date(),
  setDisplayMonth: () => {}
})

export default CalendarContext