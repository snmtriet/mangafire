import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { themeConfig } from '@/configs/theme.config'

import {
  FitType,
  LayoutType,
  PageType,
  ProgressOffsetType,
  ReadDirectionType,
  SubPanelType,
} from '@/@types/theme'

export type ThemeState = {
  layout: {
    type: LayoutType
    previousType?: LayoutType
  }
  isShowHeader: boolean
  isShowMenu: boolean
  pageType: PageType
  progressPosition: ProgressOffsetType
  readDirection: ReadDirectionType
  pageIndex: number
  activeSwiper: number
  fitType: FitType
  isShowSubPanel: SubPanelType
  isSwiping: boolean
}

export type HeaderType = {}

const initialState: ThemeState = {
  layout: themeConfig.layout,
  isShowHeader: themeConfig.isShowHeader,
  isShowMenu: themeConfig.isShowMenu,
  pageType: themeConfig.pageType,
  progressPosition: themeConfig.progressPosition,
  readDirection: themeConfig.readDirection,
  pageIndex: 1,
  activeSwiper: 1,
  fitType: themeConfig.fitType,
  isShowSubPanel: themeConfig.isShowPanel,
  isSwiping: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<LayoutType>) => {
      state.layout = {
        ...state.layout,
        ...{ type: action.payload },
      }
    },
    setShowHeader: (state, action: PayloadAction<boolean>) => {
      state.isShowHeader = action.payload
    },
    setPageType: (state, action: PayloadAction<PageType>) => {
      state.pageType = action.payload
    },
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.isShowMenu = action.payload
    },
    setProgressPosition: (state, action: PayloadAction<ProgressOffsetType>) => {
      state.progressPosition = action.payload
    },
    setReadDirection: (state, action: PayloadAction<ReadDirectionType>) => {
      state.readDirection = action.payload
    },
    setPreviousLayout: (state, action) => {
      state.layout.previousType = action.payload
    },
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload
    },
    setActiveSwiper: (state, action: PayloadAction<number>) => {
      state.activeSwiper = action.payload
    },
    setFitType: (state, action: PayloadAction<FitType>) => {
      state.fitType = action.payload
    },
    setShowSubPanel: (state, action: PayloadAction<SubPanelType>) => {
      state.isShowSubPanel = action.payload
    },
    setIsSwiping: (state, action: PayloadAction<boolean>) => {
      state.isSwiping = action.payload
    },
  },
})

export const {
  setLayout,
  setPreviousLayout,
  setShowHeader,
  setShowMenu,
  setPageType,
  setProgressPosition,
  setReadDirection,
  setPageIndex,
  setFitType,
  setShowSubPanel,
  setActiveSwiper,
  setIsSwiping,
} = themeSlice.actions

export default themeSlice.reducer
