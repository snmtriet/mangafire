import { useState } from 'react'
import PageLayout from './Tabs/PageLayout'
import { Image, Shortcut } from './Tabs'
import classNames from 'classnames'

enum TAB_ENUM {
  PAGE_LAYOUT = 1,
  IMAGE = 2,
  SHORTCUT = 3,
}

const AdvancedModal = () => {
  const [tab, setTab] = useState<TAB_ENUM>(TAB_ENUM.PAGE_LAYOUT)

  const handleChangeTab = (tab: TAB_ENUM) => setTab(tab)

  return (
    <div
      className="modal fade advanced-settings show"
      id="advancedModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="advancedModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog limit-w modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-close" data-dismiss="modal">
            <i className="fa-solid fa-xmark" />
          </div>
          <h5>Advanced Settings</h5>
          <ul
            className="nav nav-tabs"
            data-tabs=".advanced-settings .tab-content"
          >
            <li className="nav-item">
              <button
                onClick={() => handleChangeTab(TAB_ENUM.PAGE_LAYOUT)}
                className={classNames(
                  'nav-link tab',
                  tab === TAB_ENUM.PAGE_LAYOUT && 'active'
                )}
                data-name="page-layout"
              >
                Page Layout
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleChangeTab(TAB_ENUM.IMAGE)}
                className={classNames(
                  'nav-link tab',
                  tab === TAB_ENUM.IMAGE && 'active'
                )}
                data-name="image"
              >
                Image
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleChangeTab(TAB_ENUM.SHORTCUT)}
                className={classNames(
                  'nav-link tab',
                  tab === TAB_ENUM.SHORTCUT && 'active'
                )}
                data-name="shortcut"
              >
                Shortcuts
              </button>
            </li>
          </ul>

          {tab === TAB_ENUM.PAGE_LAYOUT && <PageLayout />}
          {tab === TAB_ENUM.IMAGE && <Image />}
          {tab === TAB_ENUM.SHORTCUT && <Shortcut />}
        </div>
      </div>
    </div>
  )
}

export default AdvancedModal
