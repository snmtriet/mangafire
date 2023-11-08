import { PAGE_ENUM } from '@/constants/page.constant'
import { PROGRESS_OFFSET_ENUM } from '@/constants/progress.constant'
import { READ_DIRECTION_ENUM } from '@/constants/readDirection.constant'
import { THEME_ENUM } from '@/constants/theme.constant'

export const themeConfig = {
  layout: {
    type: THEME_ENUM.LAYOUT_TYPE_DEFAULT,
  },
  isShowHeader: false,
  isShowMenu: true,
  pageType: PAGE_ENUM.PAGE_SINGLE,
  progressOffset: PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_LEFT,
  readDirection: READ_DIRECTION_ENUM.READ_DIRECTION_LTR,
}
