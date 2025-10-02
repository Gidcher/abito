import { useOutletContext } from 'react-router-dom'
import { Card } from '../components/Card/Card'

export const Home = () => {
  const {products} = useOutletContext()

  return (
    <>
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">
                  Рекомендации для вас
                </h2>
                <ul className="content-main__list">
                  {
                    products.map(card => {
                      const { id, title, price, address, date, img } = card

                      return (
                        <Card
                          id={id}
                          key={id}
                          title={title}
                          price={price}
                          address={address}
                          date={date}
                          img={img}
                        />
                      )
                    })
                  }
                </ul>
              </div>
              <aside className="content-side">
                <h3 className="content-side__title">
                  Сервисы и услуги
                </h3>
                <div className="content-side__box">
                  <ul className="content-side__list">
                    <li className="content-side__list-item">
                      <img
                        className="content-side__list-item--image"
                        src="/image/services/delivery.svg"
                        alt="delivery"
                      />
                        <h5 className="content-side__list-item--title">
                          Доставка
                        </h5>
                        <p className="content-side__list-item--text">
                          Проверка при получении и возможность бесплатно вернуть товар
                        </p>
                    </li>
                    <li className="content-side__list-item">
                      <img
                        className="content-side__list-item--image"
                        src="/image/services/car.svg"
                        alt="car"
                      />
                        <h5 className="content-side__list-item--title">
                          Автотека
                        </h5>
                        <p className="content-side__list-item--text">
                          Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                        </p>
                    </li>
                    <li className="content-side__list-item">
                      <img
                        className="content-side__list-item--image"
                        src="/image/services/house.svg"
                        alt="house"
                      />
                        <h5 className="content-side__list-item--title">
                          Онлайн-бронирование жилья
                        </h5>
                        <p className="content-side__list-item--text">
                          Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                        </p>
                    </li>
                  </ul>

                  <footer className="content-side__footer">
                    <p className="content-side__footer--item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a
                      className="content-side__footer--item"
                      href="#!"
                    >
                      Политика конфиденциальности
                    </a>
                    <a
                      className="content-side__footer--item"
                      href="#!"
                    >
                      Обработка данных
                    </a>
                  </footer>
                </div>
              </aside>
            </div>
          </div>
        </section>
    </>
)
}