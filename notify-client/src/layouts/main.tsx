import {Routes,Route} from 'react-router-dom';
import { Home } from '../layouts/home';
import { Create } from '../layouts/create';
export const Main = () => {
  return (
    <main className='flex w-full h-[90vh] justify-center overflow-auto'>
        
        
            <Routes>
                {/* <Route path='/' element={<Landing />} /> */}
                <Route path='/home' element={<Home />} />
                <Route path='/create' element={<Create/>} />
            </Routes>
      
    </main>
    
  )
}
