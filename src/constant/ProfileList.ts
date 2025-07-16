import {
  DeleteIcon,
  FaqIcon,
  LogoutIcon,
  NotificationYellowIcon,
  PaymentMethodIcon,
  RightIcon,
  SettingIcon,
  ShortlistIcon,
  SupportIcon,
  UserIcon,
} from '../assets';

export const profileList = [
  {
    id: 1,
    sublist: [
      {
        id: 1,
        title: 'Edit Profile',
        leftIcon: UserIcon,
        rightIcon: RightIcon,
        navigation: 'PersonalInfo',
      },
    ],
  },
  {
    id: 2,
    sublist: [
      {
        id: 1,
        title: 'Shortlisted',
        leftIcon: ShortlistIcon,
        rightIcon: RightIcon,
        navigation: 'ShortList',
      },
      {
        id: 2,
        title: 'Notifications',
        leftIcon: NotificationYellowIcon,
        rightIcon: RightIcon,
        navigation: 'Notification',
      },
      {
        id: 4,
        title: 'Subscription',
        leftIcon: PaymentMethodIcon,
        rightIcon: RightIcon,
        navigation: 'Subscription',
      },
    ],
  },
  {
    id: 3,
    sublist: [
      {
        id: 1,
        title: 'Support',
        leftIcon: SupportIcon,
        rightIcon: RightIcon,
        navigation: '',
      },
      {
        id: 2,
        title: 'FAQs',
        leftIcon: FaqIcon,
        rightIcon: RightIcon,
        navigation: 'Faq',
      },
      {
        id: 3,
        title: 'Setting',
        leftIcon: SettingIcon,
        rightIcon: RightIcon,
        navigation: 'Setting',
      },
    ],
  },
  {
    id: 5,
    sublist: [
      {
        id: 1,
        title: 'Log out',
        leftIcon: LogoutIcon,
        rightIcon: RightIcon,
        navigation: 'Logout',
      },
    ],
  },
  {
    id: 6,
    sublist: [
      {
        id: 1,
        title: 'Delete Account',
        leftIcon: DeleteIcon,
        rightIcon: RightIcon,
        navigation: 'Delete',
      },
    ],
  },
];
