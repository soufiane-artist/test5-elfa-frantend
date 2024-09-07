import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './pages/Menu';
import HomePage from './pages/Components/home/HomePage';
import PostDetails from './pages/Components/home/Component/PostDetails';
import ProfileUser from './pages/Components/home/Component/ProfileUser';
import LoginPhone from './pages/Components/Form/Phone/Login';
import RegisterPhone from './pages/Components/Form/Phone/Register';
import CreatePost from './pages/Components/home/Component/CreatePost';
import Posts from './pages/Components/home/Component/Posts';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme='colored'/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Login' element={<LoginPhone/>} />
        <Route path='/Register' element={<RegisterPhone/>} />
        <Route path='/Profile-user' element={<ProfileUser/>} />
        <Route path='/new-post' element={<CreatePost/>} />
        <Route path='/Post-details' element={<PostDetails/>} />
        <Route path='/Posts' element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
