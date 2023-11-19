import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import ShareThis from './ShareThis'
import { useAppSelector } from '@/store'
import Top from './Top'
import Bottom from './Bottom'

const ControlMenu = () => {
  const { isShowMenu } = useAppSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <div id="ctrl-menu" className={classNames(isShowMenu && 'active')}>
      <Top />
      <hr />
      <Bottom />
      <ShareThis />
    </div>
  )
}

export default ControlMenu
