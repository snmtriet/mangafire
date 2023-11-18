import { ShareSocial } from '@/components/shared'

const Alert = () => {
  return (
    <div className="alert bg-secondary text-center">
      <p>
        If you enjoy the website, please consider sharing it with your friends.
        Thank you!
      </p>
      <ShareSocial />
    </div>
  )
}

export default Alert
