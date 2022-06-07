import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateNoticeContent from "../components/Notice Board/CreateNoticeContent"
const CreateNotice = () => {
  return (
    <div>
      <Header/>
      <CreateNoticeContent/>
      <Footer/>
    </div>
  )
}

export default CreateNotice