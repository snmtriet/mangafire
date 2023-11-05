import type { ElementType, ReactNode } from 'react'
import classNames from 'classnames'

import type { CommonProps } from '@/@types/common'

import { Spinner } from '../ui'

interface BaseLoadingProps extends CommonProps {
  asElement?: ElementType
  customLoader?: ReactNode
  loading: boolean
  spinnerClass?: string
}

interface LoadingProps extends BaseLoadingProps {
  type?: 'default' | 'cover' | 'gif'
}

const DefaultLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = 'div',
    customLoader,
  } = props

  return loading ? (
    <Component
      className={classNames(!customLoader && 'loading-default', className)}
    >
      {customLoader ? (
        <>{customLoader}</>
      ) : (
        <Spinner className={spinnerClass} size={40} />
      )}
    </Component>
  ) : (
    <>{children}</>
  )
}
const GifLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = 'div',
    customLoader,
  } = props

  return loading ? (
    <Component
      className={classNames(!customLoader && 'loading-default', className)}
    >
      {customLoader ? (
        <>{customLoader}</>
      ) : (
        <img src="/loading.gif" className={`gif-loading ${spinnerClass}`} />
      )}
    </Component>
  ) : (
    <>{children}</>
  )
}

const CoveredLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = 'div',
    customLoader,
  } = props

  return (
    <Component className={classNames(loading ? 'relative' : '', className)}>
      {children}
      {loading && (
        <div className="w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0" />
      )}
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {customLoader ? (
            <>{customLoader}</>
          ) : (
            <Spinner className={spinnerClass} size={40} />
          )}
        </div>
      )}
    </Component>
  )
}

const Loading = ({ type, ...rest }: LoadingProps) => {
  switch (type) {
    case 'default':
      return <DefaultLoading {...rest} />
    case 'cover':
      return <CoveredLoading {...rest} />
    case 'gif':
      return <GifLoading {...rest} />
    default:
      return <DefaultLoading {...rest} />
  }
}

Loading.defaultProps = {
  loading: false,
  type: 'default',
  asElement: 'div',
}

export default Loading
