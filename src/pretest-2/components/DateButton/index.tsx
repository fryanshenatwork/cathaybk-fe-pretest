import styles from './styles.module.scss'
import clx from 'classnames'

interface IProps {
  children: React.ReactNode
  isSameMonth: boolean
  isToday: boolean
  isSelected: boolean
  onClick: () => void
}

const DateButton = ({
  children,
  isSameMonth,
  isToday,
  isSelected,
  onClick
}: IProps) => {
  return (
    <button
      onClick={isSameMonth ? onClick : () => {}}
      className={clx(
        styles.date,
        {
          [styles['none-same-month']]: !isSameMonth,
          [styles.today]: isToday,
          [styles.selected]: isSelected,
        }
      )}
    >
      { children }
    </button>
  )
}

export default DateButton