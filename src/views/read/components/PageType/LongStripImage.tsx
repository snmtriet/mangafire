import { useRef, useEffect, memo } from 'react'
import classNames from 'classnames'
import Image from '../Image'
import { fitClassName } from '../../Read'
import { useOnScreen } from '@/utils/hooks'
import { setPageIndex, useAppDispatch, useAppSelector } from '@/store'

type LongStripImageProps = {
  index: number
  src: string
}

const LongStripImage = (props: LongStripImageProps) => {
  const { index, src } = props
  const dispatch = useAppDispatch()
  const imageRef = useRef<HTMLDivElement | null>(null)
  const indexOnScreen = useOnScreen(imageRef)
  const { pageIndex, fitType, isSwiping } = useAppSelector(
    (state) => state.theme
  )

  useEffect(() => {
    if (!indexOnScreen) return
    dispatch(setPageIndex(index + 1))
  }, [indexOnScreen])

  useEffect(() => {
    if (indexOnScreen) return
    if (imageRef && imageRef.current && pageIndex === index + 1) {
      imageRef.current.scrollIntoView({
        behavior: isSwiping ? 'smooth' : 'auto',
        block: 'start',
      })
    }
  }, [pageIndex])

  return (
    <div
      className={classNames('page', fitClassName[fitType])}
      style={{ marginBottom: '30px' }}
      ref={imageRef}
      id={`page-${index + 1}`}
    >
      <Image
        src={src}
        number={index + 1}
        wrapperClassName={classNames(
          pageIndex + 6 > index + 1 && 'loaded',
          'd-block'
        )}
        imageClassName={fitClassName[fitType]}
      />
    </div>
  )
}

LongStripImage.displayName = 'LongStripImage'

export default memo(LongStripImage)
