import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Work } from './components/Work';

const AnimatedRoutes = () => {
  const location = useLocation();

  return(
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='work' element={<Work />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export { AnimatedRoutes }
