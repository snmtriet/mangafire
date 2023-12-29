import classNames from 'classnames'
import { useRef, useEffect, memo } from 'react'
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

  const { pageIndex, fitType } = useAppSelector((state) => state.theme)

  useEffect(() => {
    if (!indexOnScreen) return
    dispatch(setPageIndex(index + 1))
  }, [indexOnScreen])

  useEffect(() => {
    const image = document.getElementById(`page-${pageIndex}`)
    image?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }, [])

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
        wrapperClassName={classNames('loaded d-block')}
        imageClassName={fitClassName[fitType]}
      />
    </div>
  )
}

LongStripImage.displayName = 'LongStripImage'

export default memo(LongStripImage)
