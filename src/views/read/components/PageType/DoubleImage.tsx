import { useAppSelector } from '@/store'
import { fitClassName } from '../../Read'
import Image from '../Image'
import classNames from 'classnames'

type DoubleImageProps = {
  index: number
  src: string
  left?: boolean
  right?: boolean
}

const DoubleImage = (props: DoubleImageProps) => {
  const { index, src, left, right } = props
  const { pageIndex, fitType } = useAppSelector((state) => state.theme)

  return (
    <Image
      key={index}
      src={src}
      number={index + 1}
      wrapperClassName={classNames(
        pageIndex + 4 > index + 1 && 'loaded',
        left && 'left',
        right && 'right',
        index + 1 === pageIndex ? 'd-block' : 'd-none'
      )}
      imageClassName={fitClassName[fitType]}
    />
  )
}

export default DoubleImage
