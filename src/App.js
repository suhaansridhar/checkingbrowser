import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home';
import About from './Components/About';
import HelpLayout from './Components/HelpLayout';
import Faq from './Components/Faq';
import Contact from './Components/Contact';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element = {<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App
