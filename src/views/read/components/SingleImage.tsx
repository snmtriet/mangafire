import classNames from 'classnames'
import { isBrowser, isMobile, isTablet } from 'react-device-detect'
import { useAppSelector } from '@/store'
import { fitClassName } from '../Read'
import Image from './Image'

type SingleImageProps = {
  index: number
  src: string
}

const SingleImage = (props: SingleImageProps) => {
  const { index, src } = props
  const { pageIndex, fitType } = useAppSelector((state) => state.theme)

  return (
    <Image
      src={src}
      number={index + 1}
      wrapperClassName={classNames(
        // pageIndex + 4 > index + 1 && 'loaded',
        'fit-w'
        // isBrowser && pageIndex === index + 1 ? 'd-block' : 'd-none',
        // (isTablet || isMobile) && !isBrowser && 'd-block'
      )}
      imageClassName={fitClassName[fitType]}
    />
  )
}

export default SingleImage
