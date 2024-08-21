import HeaderButton from '../HeaderButton'
import styles from './styles.module.scss'

interface IProps {
  onClickPrev: () => void
  onClickNext: () => void
  children: React.ReactNode
}

const Header = ({
  onClickNext,
  onClickPrev,
  children
} : IProps) => {
  return (
    <div className={styles.header}>
      <HeaderButton onClick={onClickPrev}>&lt;</HeaderButton>
      <div className={styles['current-month']}>{ children }</div>
      <HeaderButton onClick={onClickNext}>&gt;</HeaderButton>
    </div>
  )
}

export default Header