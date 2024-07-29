import { faBell, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


type HeaderProps = {
    title: string
}

export const Header = (props:HeaderProps) => {
  return (
    <header className='flex justify-between items-center p-4 bg-white'>
        <h1 className='text-lg font-semibold'>{props.title}</h1>
        <div className='flex items-center gap-4 ml-auto'>
            <FontAwesomeIcon className='bg-slate-50 p-2 rounded-lg text-slate-500' icon={faBell} />
            <FontAwesomeIcon className='bg-slate-50 p-2 rounded-lg text-slate-500' icon={faMoon} />
            <p>Profile</p>
        </div>
    </header>
  )
}
