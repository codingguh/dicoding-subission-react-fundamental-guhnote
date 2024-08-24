
import { Menu, rem } from "@mantine/core"
import { IconLanguage } from "@tabler/icons-react"
import  { useContext } from 'react'
import LocaleContext from '../../../context/LocaleContext'

const LanguageToggle = () => {
    const { locale, toggleLocale } = useContext(LocaleContext)
  return (
    <Menu.Item
    onClick={toggleLocale}
        leftSection={
          <IconLanguage
            style={{ width: rem(21), height: rem(21) }}
            stroke={1.5}
          />
        }
      >
        {locale === 'id' ? 'English' : 'Bahasa'}
      </Menu.Item>
  )
}

export default LanguageToggle
