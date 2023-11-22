import { useState } from 'react'
import { setShowHeader, useAppDispatch, useAppSelector } from '@/store'
import { Direction, ImageFit, PageType, Progress } from './Buttons'
import Modal, { AdvancedModal } from '@/components/ui/Modal'

const Bottom = () => {
  const [openSettings, setOpenSettings] = useState(false)
  const dispatch = useAppDispatch()
  const { isShowHeader } = useAppSelector((state) => state.theme)

  const onToggleHeader = () => {
    dispatch(setShowHeader(!isShowHeader))
  }

  const handleOpenSettings = () => setOpenSettings(true)
  const handleCloseSettings = () => setOpenSettings(false)

  return (
    <>
      <div className="btn-options mb-2 tooltipz" title="Use H button to toggle">
        <div data-value="sticky" className="d-block">
          <button className="justify-content-between" onClick={onToggleHeader}>
            <span>{isShowHeader ? 'Header Sticky' : 'Header Hidden'}</span>
            {isShowHeader ? (
              <i className="fa-light fa-window-maximize fa-lg"></i>
            ) : (
              <i className="fa-light fa-square fa-lg"></i>
            )}
          </button>
        </div>
      </div>
      <PageType />
      <ImageFit />
      <Direction />
      <Progress />
      <button className="jb-btn" onClick={handleOpenSettings}>
        <span>Advanced Settings</span>
        <i className="fa-light fa-sliders fa-lg"></i>
      </button>
      <Modal
        open={openSettings}
        onClose={handleCloseSettings}
        className="advanced-settings"
      >
        <AdvancedModal />
      </Modal>
    </>
  )
}

export default Bottom
