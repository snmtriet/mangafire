import { FIT_ENUM } from '@/constants/fit.constant'
import { PAGE_ENUM } from '@/constants/page.constant'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import { PROGRESS_OFFSET_ENUM } from '@/constants/progress.constant'
import { READ_DIRECTION_ENUM } from '@/constants/readDirection.constant'
import { THEME_ENUM } from '@/constants/theme.constant'

export const themeConfig = {
  layout: {
    type: THEME_ENUM.LAYOUT_TYPE_DEFAULT,
  },
  isShowHeader: true,
  isShowMenu: true,
  pageType: PAGE_ENUM.LONG_STRIP,
  progressPosition: PROGRESS_OFFSET_ENUM.LEFT,
  readDirection: READ_DIRECTION_ENUM.READ_DIRECTION_LTR,
  fitType: FIT_ENUM.FIT_WIDTH,
  isShowPanel: null,
}
