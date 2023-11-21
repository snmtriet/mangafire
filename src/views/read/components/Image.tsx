import classNames from 'classnames'

type ImageProps = {
  wrapperClassName: string
  imageClassName: string
  number: number
  src?: string
}

const Image = (props: ImageProps) => {
  const { wrapperClassName, imageClassName, number, src } = props

  return (
    <div data-number={number} className={classNames('img', wrapperClassName)}>
      <img
        data-number={number}
        className={imageClassName}
        src={src}
        alt={`Page ${number}`}
      />
    </div>
  )
}

export default Image
