import './app.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/Components/home/HomePage';
import PostDetails from './pages/Components/home/Component/PostDetails';
import ProfileUser from './pages/Components/home/Component/ProfileUser';
import LoginPhone from './pages/Components/Form/Phone/Login';
import RegisterPhone from './pages/Components/Form/Phone/Register';
import CreatePost from './pages/Components/home/Component/CreatePost';
import Posts from './pages/Components/home/Component/Posts';
import {ToastContainer} from 'react-toastify'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Ma3arid from './pages/Components/home/Component/ma3arid';
import Notifcation from './pages/Components/home/Component/Notifcation';
import UpdateProfile from './pages/Components/home/Component/UpdateProfile';
import axios from 'axios';
import EditPost from './pages/Components/home/Component/EditPost';
import Chahada from './pages/Components/home/Component/Chahada';
import Chahadasend from './pages/Components/home/Component/Chahadasend';
import ChatUsers from './pages/Components/home/Component/ChatUsers';
import VerifyAccount from './pages/Components/home/Component/VerifyAccount';
import SupportChat from './pages/Components/home/Component/SupportChat';
import Dawarate from './pages/Components/home/Component/dawarate';
import Dawra7 from './pages/Components/home/Component/dawarate/Dawra7';
import Dawra1 from './pages/Components/home/Component/dawarate/Dawra1';
import TalabDawra from './pages/Components/home/Component/TalabDawra';
import Dawra2 from './pages/Components/home/Component/dawarate/Dawra2';
import Dawra3 from './pages/Components/home/Component/dawarate/Dawra3';
import Dawra4 from './pages/Components/home/Component/dawarate/Dawra4';
import Dawra5 from './pages/Components/home/Component/dawarate/Dawra5';
import Dawra6 from './pages/Components/home/Component/dawarate/Dawra6';
import Dawra8 from './pages/Components/home/Component/dawarate/Dawra8';
import About from './pages/Components/home/Component/About';
import CreatePub from './pages/Components/home/Component/Publicitè/CreatePub';
import PublicDetails from './pages/Components/home/Component/Publicitè/PubDestails';
import EditPub from './pages/Components/home/Component/Publicitè/EditPub';
import TalabTaloux from './pages/Components/home/Component/TalabTaloux';

function App() {


  const [userId, setUserId] = useState();
  const [postId, setpostId] = useState();
  const {user} = useSelector(state => state.auth)
  const [srcChahada,setsrcChahada] = useState()
  const [arrivale,setArrivale] = useState()
  const [posts, setPosts] = useState([]);
  const [titleCourse,setTitle] = useState()


  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage arrivale={arrivale} posts={posts} setPosts={setPosts}  setUserId={setUserId} user={user} setpostId={setpostId} />} />
        <Route path='/Login' element={<LoginPhone/>} />
        <Route path='/Register' element={<RegisterPhone/>} />
        <Route path='/:userName' element={<ProfileUser setpostId={setpostId} user={user} userId={userId} setUserId={setUserId} posts={posts} />} />
        <Route path='/انشاء-منشور' element={user?._id ? <CreatePost user={user} />: <LoginPhone/>} />
        <Route path='/انشاء-حملة-اعلانية' element={user?.isAccountVerified ? <CreatePub user={user} /> : user?._id ? <VerifyAccount/> : <LoginPhone/>} />
        <Route path='/تفاصيل-اعلان/:postId' element={<PublicDetails  user={user} posts={posts}/>} />
        <Route path='/تعديل-اعلان/:postId' element={<EditPub user={user} posts={posts}/>} />
        <Route path='/دورات-تدريبية' element={ <Dawarate user={user} />} />
        <Route path='/Post-details/:postId' element={<PostDetails setArrivale={setArrivale}  posts={posts} user={user} postId={postId}  />} />
        <Route path='/Posts' element={<Posts setpostId={setpostId} />} />
        <Route path='/المعارض' element={<Ma3arid/>} />
        <Route path='/الاشعارات/:userId' element={<Notifcation/>} />
        <Route path='/تعديل-الملف-الشخصي/:userId' element={<UpdateProfile/>} />
        <Route path='/تعديل-البوست/:postId' element={<EditPost/>} />
        <Route path='/طلب-شهادة/:userId' element={user?._id ? <Chahada setsrcChahada={setsrcChahada} /> : <LoginPhone/>} />
        <Route path='/طلب-شهادة/الصفحة2/:userId' element={user?._id ? <Chahadasend srcChahada={srcChahada}/> : <LoginPhone/>} />
        <Route path='/chat/:userId' element={user?._id ? <ChatUsers srcChahada={srcChahada} user={user} /> : <LoginPhone/>} />
        <Route path='/توثيق-الحساب/:userId' element={user?._id ? <VerifyAccount setsrcChahada={setsrcChahada} /> : <LoginPhone/>} />
        <Route path='/Support' element={user?._id ? <SupportChat/> : <LoginPhone/>} />
        <Route path='/About' element={<About/>} />
        {/* dawarate */}
        <Route path='/طلب-الدورة' element={ <TalabDawra  title={titleCourse}/> } />
        {/* dawarate */}
        <Route path='/الدورة-الاولى' element={ <Dawra1 setTitle={setTitle}/> } />
        <Route path='/الدورة-التانية' element={ <Dawra2 setTitle={setTitle}/> } />
        <Route path='/الدورة-التالتة' element={ <Dawra3 setTitle={setTitle}/> } />
        <Route path='/الدورة-الرابعة' element={ <Dawra4 setTitle={setTitle}/> } />
        <Route path='/الدورة-الخامسة' element={ <Dawra5 setTitle={setTitle}/> } />
        <Route path='/الدورة-السادسة' element={ <Dawra6 setTitle={setTitle}/> } />
        <Route path='/الدورة-السابعة' element={ <Dawra7 setTitle={setTitle}/> } />
        <Route path='/الدورة-التامنة' element={ <Dawra8 setTitle={setTitle}/> } />
        {/* ta2kid talabia */}
        <Route path='/تاكيد-الطلبية/:userName/:postId' element={ <TalabTaloux   /> } />
      </Routes>
      {window.innerWidth > 400 && <div className="pc-app-loading">
        <div className="pc-app-loading-container">
          <div className="pc-app-center">
          
          <h2> <span >عذرًا !</span> حاول تصفح الموقع عن طريق الهاتف المحمول. نحن نعمل على بعض التحسينات لواجهة الحاسوب لتحسين تجربتك.
شكرًا لتفهمك!</h2>
    <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727169652/iokhdj9caz4lt11afa6s.png" alt="" />
          </div>
      <img id='img-rotate' src="https://res.cloudinary.com/dvivzto6g/image/upload/v1727170383/pwxldnzae1ptenikomqk.png" alt="" />
        </div>
      </div>}
    </BrowserRouter>
  );
}

export default App;
