import classNames from 'classnames'
import Top from './Top'
import Bottom from './Bottom'
import ShareThis from './ShareThis'
import { useAppSelector } from '@/store'

const ControlMenu = () => {
  const { isShowMenu } = useAppSelector((state) => state.theme)

  return (
    <div
      id="ctrl-menu"
      className={classNames(isShowMenu && 'active')}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <Top />
      <hr />
      <Bottom />
      <ShareThis />
    </div>
  )
}

export default ControlMenu
