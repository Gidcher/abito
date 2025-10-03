import { useOutletContext, useParams } from 'react-router-dom'

export const Product = () => {
  const {products} = useOutletContext()
  const { id } = useParams()

  const findProduct = products.find((p) => p.id === +id)

  return (
    <>
      <section className="content">
        <div className="container">
          {findProduct
            ? <div className="content-box">
              <div className="content-product">
                <div className="content-product__left">
                  <h2 className="content-product__title">
                    {findProduct.title}
                  </h2>
                  <img
                    className="content-product__img"
                    src={findProduct.img}
                    alt="electro-scooter"
                  />
                  <p className="content-product__text">
                    {findProduct.description}
                  </p>
                </div>
                <div className="content-product__right">
                  <h2 className="content-product__price">
                    {findProduct.price}
                  </h2>
                  <button
                    className="btn btn-primary btn-large"
                    type="button"
                  >
                    Показать телефон
                  </button>
                </div>
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
                        src="/images/services/delivery.svg"
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
                        src="/images/services/car.svg"
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
                        src="/images/services/house.svg"
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
            : <h2>Товар не найден</h2>
          }
        </div>
      </section>
    </>
  )
}