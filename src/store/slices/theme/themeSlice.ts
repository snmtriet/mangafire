import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { themeConfig } from '@/configs/theme.config'
import {
  LayoutType,
  PageType,
  ProgressOffsetType,
  ReadDirectionType,
} from '@/@types/theme'

export type ThemeState = {
  layout: {
    type: LayoutType
    previousType?: LayoutType
  }
  isShowHeader: boolean
  isShowMenu: boolean
  pageType: PageType
  progressOffset: ProgressOffsetType
  readDirection: ReadDirectionType
}

export type HeaderType = {}

const initialState: ThemeState = {
  layout: themeConfig.layout,
  isShowHeader: themeConfig.isShowHeader,
  isShowMenu: themeConfig.isShowMenu,
  pageType: themeConfig.pageType,
  progressOffset: themeConfig.progressOffset,
  readDirection: themeConfig.readDirection,
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
    setProgressOffset: (state, action: PayloadAction<ProgressOffsetType>) => {
      state.progressOffset = action.payload
    },
    setReadDirection: (state, action: PayloadAction<ReadDirectionType>) => {
      state.readDirection = action.payload
    },
    setPreviousLayout: (state, action) => {
      state.layout.previousType = action.payload
    },
  },
})

export const {
  setLayout,
  setPreviousLayout,
  setShowHeader,
  setShowMenu,
  setPageType,
  setProgressOffset,
  setReadDirection,
} = themeSlice.actions

export default themeSlice.reducer
