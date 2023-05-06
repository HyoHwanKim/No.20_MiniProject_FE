import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Mypage from './pages/Mypage'
import Write from './pages/Write'
import ProfileEdit from './pages/ProfileEdit'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<ProfileEdit />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App