import React , {Suspense , lazy} from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import "remixicon/fonts/remixicon.css";
import { Approviedr } from './component/context/Context.jsx';
import Loadding from './component/contact/Loadding.jsx';
const Lazyload = lazy(() => import('./App.jsx'))
ReactDOM.createRoot(document.getElementById('root')).render(
<Suspense fallback={<Loadding />}>
    <Approviedr>  
    <Lazyload />
    </Approviedr>
</Suspense>

  
,
)
