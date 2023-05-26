import SocialListItem from './SocialListItem';
import { socialLinkIcons } from './socialLinkIcons';

const SocialList = (): JSX.Element => {
  return (
    <ul className="flex flex-col items-center justify-between h-56 md:h-full w-full md:flex-row lg:max-w-screen-sm">
      {socialLinkIcons.map((item) => (
        <SocialListItem
          key={item.description}
          icon={item.icon}
          alt={item.alt}
          description={item.description}
          reference={item.reference}
          isEmail={item.isEmail}
        />
      ))}
    </ul>
  );
};

export default SocialList;
