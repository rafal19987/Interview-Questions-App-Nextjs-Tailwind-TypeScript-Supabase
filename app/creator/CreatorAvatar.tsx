import Image from 'next/image'
import creatorAvatar from 'assets/creator.png'

const CreatorAvatar = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-[120px] h-[120px] p-1 rounded-full bg-[#8FF7900]">
      <Image src={creatorAvatar} width={100} height={100} alt="avatar" />
    </div>
  )
}

export default CreatorAvatar
