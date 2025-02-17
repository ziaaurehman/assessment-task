import { adaptiveFont, adaptiveSize, moderateScale } from './scaleUtils';

export const FONT_SIZES = {
  TITLE: adaptiveFont(28),
  SUBTITLE: adaptiveFont(24),
  SECTION_TITLE: adaptiveFont(18),
  SECTION_TITLE_LARGE: adaptiveFont(20),
  SECTION_TITLE_SMALL: adaptiveFont(16),
  BODY: adaptiveFont(14),
  CAPTION: adaptiveFont(12),
  FOOTNOTE: adaptiveFont(10),
  BUTTON_TEXT: adaptiveFont(14),
  EXTRA_SMALL: adaptiveFont(8),
};

export const SPACING = {
  PAGE_HORIZONTAL: moderateScale(16),
  PAGE_VERTICAL: moderateScale(16),
  LARGE: moderateScale(40),
  SEMI_LARGE: moderateScale(28),
  MEDIUM: moderateScale(20),
  MEDIUM_PLUS: moderateScale(24),
  SEMI_MEDIUM: moderateScale(16),
  SMALL: moderateScale(12),
  EXTRA_SMALL: moderateScale(10),
  TINY: moderateScale(4),
};

export const HEIGHTS = {
  LARGE_ICON_SIZE: adaptiveSize(36, true),
  MEDIUM_LARGE_ICON_SIZE: adaptiveSize(32, true),
  MEDIUM_ICON_SIZE: adaptiveSize(20, true),
  TAB_INACTIVE: adaptiveSize(26,true),
  TAB_ACTIVE: adaptiveSize(28,true),
};

export const BORDERS = {
  DEFAULT_BORDER: moderateScale(1),
  BOLD_BORDER: moderateScale(2),
  RADIO_SELECTED_BORDER: moderateScale(3),
};

export const RADIUS = {
  LARGE: moderateScale(20),
  MEDIUM: moderateScale(12),
  MEDIUM_SMALL: moderateScale(10),
  SMALL: moderateScale(8),
  TINY: moderateScale(4),
  FULL: moderateScale(100),
};


export const FONT_WEIGHTS: Record<string, FontWeight> = {
  REGULAR: '400',
  MEDIUM: '500',
  SEMI_BOLD: '600',
  BOLD: '700',
  EXTRA_BOLD: '800',
  BLACK: '900',
};

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold';

export const FONT_FAMILY = {
  REGULAR: 'Inter-Regular',
  MEDIUM: 'Inter-Medium',
  SEMI_BOLD: 'Inter-SemiBold',
  BOLD: 'Inter-Bold',
};
