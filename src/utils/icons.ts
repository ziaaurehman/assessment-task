const ICONS = {
  RIGHT: 'ionicons:chevron-forward-outline',

} as const;

export type IconType = keyof typeof ICONS;

export default ICONS;
