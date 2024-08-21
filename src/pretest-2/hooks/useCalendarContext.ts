import { useContext } from "react"
import calendarContext from '../context'
import type { ICalendarContext } from '../context'

export default () => useContext<ICalendarContext>(calendarContext)