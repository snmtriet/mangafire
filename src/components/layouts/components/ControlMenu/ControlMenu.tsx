import React from 'react'
import ShareThis from './ShareThis'
import classNames from 'classnames'
import { useAppSelector } from '@/store'
import Top from './Top'
import Bottom from './Bottom'

const ControlMenu = () => {
  const { isShowMenu } = useAppSelector((state) => state.theme)
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
