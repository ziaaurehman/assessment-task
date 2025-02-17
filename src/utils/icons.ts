const ICONS = {
  RIGHT: 'ionicons:chevron-forward-outline',
  HOME: 'materialicons:home',
  Editor: 'ionicons:sparkles-outline',
  Gallery: 'foundation:camera',
  Customise: 'ionicons:shirt-outline',
  Wardrobe: 'materialicons:table-restaurant',
  Notification: 'entypo:notification',
  Inbox: 'ionicons:mail-outline',
  BELL: "materialcommunityicons:bell-circle",
  MENU: "entypo:menu",
  SEARCH : "feather:search",
  BACK: "ionicons:chevron-back",
  CIRCLES:"materialcommunityicons:google-circles",
  HEART:"antdesign:heart",
  SEND:"feather:send",
  UPLOAD:"feather:upload",
  DOWNLOAD:"feather:download",


} as const;

export type IconType = keyof typeof ICONS;

export default ICONS;
