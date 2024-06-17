import './App.css';
import {AnimatePresence} from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import CompanyPage from './page/CompanyPage';
import ArtistPage from './page/ArtistPage';
import AuditionPage from './page/AuditionPage';
import AdminLoginPage from './page/AdminLoginPage';
import PrPage from './page/PrPage';
import NewsDetailPage from './page/NewsDetailPage';
import NoticeDetailPage from './page/NoticeDetailPage';
import NewsPage from './page/NewsPage';
import NoticePage from './page/NoticePage';
import AdminActorPage from './page/AdminActorPage';
import ArtistDetailPage from './page/ArtistDetailPage';
import NewsWrite from './components/NewsWrite';
import NoticeWrite from './components/NoticeWrite';

function App() {
  return (
    <div className="App">
            <AnimatePresence>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/artist' element={<ArtistPage/>} />
          <Route path='/audition' element={<AuditionPage/>}/>
          <Route path='/pr' element={<PrPage/>}/>
          <Route path='/adminLogin' element={<AdminLoginPage/>}/>
          <Route path='/adminNewsWrite' element={<NewsWrite/>}/>
          <Route path='/adminNoticeWrite' element={<NoticeWrite/>}/>
          <Route path='/adminNewsWrite/:postId' element={<NewsWrite/>}/>
          <Route path='/adminNoticeWrite/:postId' element={<NoticeWrite/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/notice' element={<NoticePage/>}/>
          <Route path='/newsDetail/:postId' element={<NewsDetailPage/>}/>
          <Route path='/noticeDetail/:postId' element={<NoticeDetailPage/>}/>
          <Route path='/adminActor' element={<AdminActorPage/>}/>
          <Route path='/adminActor/:name' element={<AdminActorPage/>}/>
          <Route path='/artist/:name' element={<ArtistDetailPage/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
