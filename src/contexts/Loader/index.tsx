import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import Loader from 'components/Loader'

type LoaderContextProps = {
  showLoader: () => void
  hideLoader: () => void
}

type Props = {
  children: ReactNode
}

const Context = createContext<LoaderContextProps>({} as LoaderContextProps)

function LoaderContext({ children }: Props) {
  const [visible, setVisible] = useState<boolean>(false)

  const showLoader = useCallback(() => {
    setVisible(true)
  }, [])

  const hideLoader = useCallback(() => {
    setVisible(false)
  }, [])

  const providerValues = {
    showLoader,
    hideLoader
  }

  return (
    <Context.Provider value={providerValues}>
      <>
        {visible && <Loader />}
        {children}
      </>
    </Context.Provider>
  )
}

function useLoader() {
  const context = useContext(Context)
  return context
}

export { LoaderContext, useLoader }
