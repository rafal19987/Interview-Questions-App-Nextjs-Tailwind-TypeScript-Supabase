import Image from 'next/image'
import loadingIcon from '../assets/loadingIcon.svg'

const LoadingIcon = (): JSX.Element => {
  return (
    <>
      <Image
        className=" mt-32 animate-spin"
        src={loadingIcon}
        width={40}
        height={40}
        alt="Loading..."
      ></Image>
    </>
  )
}

export default LoadingIcon
