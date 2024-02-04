import Navbar from './Navbar'
import Menu from './Menu'
import { useState } from 'react'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div>
      <Navbar
        onChangeCategory={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Menu selectedCategory={selectedCategory} />
    </div>
  )
}

export default Home
