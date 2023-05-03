import Image from 'next/image'
import creatorAvatar from 'assets/avatar.png'

const CreatorAvatar = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#8FF7900] overflow-hidden">
      <Image src={creatorAvatar} width={100} height={100} alt="avatar" />
    </div>
  )
}

export default CreatorAvatar
