export type RootStackParamList = {
  navigate(arg0: string, arg1: {refresh: number}): unknown;
  LoginScreen: undefined;
  CheckInboxScreen: undefined | {notDetect: boolean};
  Print: {refresh: number} | undefined;
  SearchResultScreen: {refresh: number} | {data: any} | undefined;
  ArchiveProductsScreen: {refresh: number} | undefined;
};
export type BatchStackParamList = {
  Print: undefined;
  BatchEditScreen: undefined | {id: number; goBackScreen: string};
  ArchiveProductsScreen: undefined;
};
export type SearchStackParamList = {
  Search: undefined;
};

export type DrawerParamList = {
  Dashboard: undefined;
  Capture: undefined;
  Print: undefined;
  Search: undefined;
  Admin: undefined;
  Feedback: undefined;
  About: undefined;
  Console: undefined;
};
export type CombinedNavParamList = RootStackParamList &
  BatchStackParamList &
  SearchStackParamList &
  DrawerParamList;
