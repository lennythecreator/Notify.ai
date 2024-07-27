import { faBell, faGripVertical, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-red-900'>
        <div className='flex items-center gap-4 ml-auto'>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faGripVertical} />

            <p>Profile</p>
        </div>
    </header>
  )
}
