import { useContext } from 'react'
import LocaleContext from '../context/LocaleContext'
import content from '../utils/locale'

function useLanguage(page) {
  const { locale } = useContext(LocaleContext)

  return content[`${page}Page`][locale]
}

export default useLanguage
