import React from 'react'
import Banner from '../PageComponent/Home/Banner'
import Welcome from '../PageComponent/Home/Welcome'
import Classoffer from '../PageComponent/Home/Classoffer'
import Slidingimg from '../PageComponent/Home/Slidingimg'
import Eventcounting from '../PageComponent/Home/Eventcounting'
import Exportteacher from '../PageComponent/Home/Exportteacher'
import Suggestions from '../PageComponent/Home/Suggestions'


function Home() {
  return (
    <div>
      <Banner />
      <Welcome />
      <Classoffer />
      <Slidingimg />
      <Eventcounting />
      <Exportteacher />
      <Suggestions />

    </div>
  )
}

export default Home
