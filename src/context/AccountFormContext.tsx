import { ReactNode, createContext, useContext, useState } from "react"

interface AccountProps {
  name?: string
  email?: string
  phone?: string
  birth?: string
  password?: string
  passwordConfirmation?: string
}

interface AccountFormContextProps {
  accountFormData: AccountProps
  updateAccountFormData: (value: AccountProps) => void
}

interface AccountFormProvider {
  children: ReactNode
}

const AccountFormContext = createContext({} as AccountFormContextProps)

export function AccountFormProvider({ children }: AccountFormProvider) {
  const [accountFormData, setAccountFormData] = useState<AccountProps>(
    {} as AccountProps
  )

  function updateAccountFormData(value: AccountProps) {
    setAccountFormData((prevState) => ({ ...prevState, ...value }))
  }

  return (
    <AccountFormContext.Provider
      value={{ accountFormData, updateAccountFormData }}
    >
      {children}
    </AccountFormContext.Provider>
  )
}

export function useAccountForm() {
  const context = useContext(AccountFormContext)

  return context
}
