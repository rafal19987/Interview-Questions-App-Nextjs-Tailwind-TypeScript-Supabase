import TechStackListItem from './TechStackListItem';
import { techStackIcons } from './techStackIcons';

const TechStackList = () => {
  return (
    <ul className="flex w-full flex-wrap justify-center items-center h-full p-4 md:w-3/5 md:justify-around">
      {techStackIcons.map((icon) => (
        <TechStackListItem key={icon.alt} icon={icon.icon} alt={icon.alt} />
      ))}
    </ul>
  );
};

export default TechStackList;
