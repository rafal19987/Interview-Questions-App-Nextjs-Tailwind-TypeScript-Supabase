import Image from 'next/image';

const TechStackListItem = ({ icon, alt }: { icon: string; alt: string }) => {
  return (
    <li className='flex px-2 mt-2 xl:mt-4'>
      <Image src={icon} alt={alt}></Image>
    </li>
  );
};

export default TechStackListItem;
