import styles from './styles.module.scss'

interface IProps {
  onClick: () => void
  children: React.ReactNode
}

const HeaderButton = ({
  onClick,
  children
} : IProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default HeaderButton