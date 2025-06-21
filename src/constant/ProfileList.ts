import {
  FaqIcon,
  LogoutIcon,
  NotificationYellowIcon,
  PaymentMethodIcon,
  RightIcon,
  SettingIcon,
  ShortlistIcon,
  UserIcon,
  UserReviewIcon,
} from '../assets';

export const profileList = [
  {
    id: 1,
    sublist: [
      {
        id: 1,
        title: 'Personal Info',
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
        id: 3,
        title: 'Payment Method',
        leftIcon: PaymentMethodIcon,
        rightIcon: RightIcon,
        navigation: 'PaymentMethod',
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
        title: 'FAQs',
        leftIcon: FaqIcon,
        rightIcon: RightIcon,
        navigation: 'Faq',
      },
      {
        id: 2,
        title: 'User Reviews',
        leftIcon: UserReviewIcon,
        rightIcon: RightIcon,
        navigation: 'UserReview',
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
];
