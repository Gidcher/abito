import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { useEffect, useState } from 'react'
import { cardArray } from '../constants'

export const Layout = () => {
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState([])

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleSearchArray = () => {
    setProducts(cardArray.filter((p) => {
      return p.title.toUpperCase().includes(searchText.toUpperCase()) || p.price.includes(searchText)
    }))
  }

  useEffect(() => {
    setProducts(cardArray)
  }, [])

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Поиск по объявлениям"
                value={searchText}
                onChange={handleSearch}
              />
              <button
                className="btn btn-primary search-btn"
                type="button"
                onClick={handleSearchArray}
              >
                <img
                  className="search-btn__icon"
                  src="/images/search.svg"
                  alt="search"
                  width="15px"
                  height="15px"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{products}} />
      </main>
    </>
  )
}