import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Landing() {
  

    return (
      <>
         <main>
          <nav>
            <ul className='flex items-center'>
              <span className='text-2xl font-bold mr-auto'><FontAwesomeIcon icon={faPencil} /> Notify</span>
              <li className="mx-4">
                <a href="/login">About</a>
              </li>
              <li className="mx-4">
                <a href="/register">Contact</a>
              </li>
            </ul>
          </nav>
  
          <section className="flex flex-col gap-4">
            <h1>{/*Title goes here*/}</h1>
            <p className="text-left text-5xl font-semibold">Making notes quick and readable</p>
            <p className="text-left">With the power AI create quickand interactable notes with Noti</p>
            <div className="flex gap-4">
              <button className="text-white"><Link to={'/main'}>Get started</Link></button>
              <button className='border-2 bg-transparent border-slate-900'>Learn More</button>
            </div>
          </section>
      </main>
      </>
    )
  }
  
  export default Landing
  