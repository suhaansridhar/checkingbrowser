import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider, loader} from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home';
import About from './Components/About';
import HelpLayout from './Components/HelpLayout';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Careers, {careerLoader} from './Components/Careers';


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element = {<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='careers' element={<Careers />} loader={careerLoader}/>
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>


      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App
