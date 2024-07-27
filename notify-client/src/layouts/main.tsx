import {Routes,Route} from 'react-router-dom';
import { Home } from '../layouts/home';
import { Create } from '../layouts/create';
import Landing from '../pages/landing';
export const Main = () => {
  return (
    <main className='flex w-full'>
        <section>
        
        <Routes>
            {/* <Route path='/' element={<Landing />} /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={<Create/>} />
        </Routes>
        </section>
    </main>
    
  )
}
