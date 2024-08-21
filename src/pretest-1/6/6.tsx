/** Please write the sample code to debounce handleOnChange **/
import { useRef } from 'react'

const useDebounce = (callback: () => void, timer: number) => {
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null)

  return () => {
    if (timerRef.current) { clearTimeout(timerRef.current) }
    timerRef.current = setTimeout(callback, timer)
  }
}

const SearchBox = () => {
  const onChangeAjax = () => { console.log('ajax called') }
  const handleOnChange = useDebounce(onChangeAjax, 500)

  return (
    <input
      type="search"
      name="p"
      onChange={handleOnChange}
    />
  )
}

export default SearchBox