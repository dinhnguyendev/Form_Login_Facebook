import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './Styles/App/App.css';
function App() {

  const responseFacebook = (response) => {
    alert("login successfully!");
    const data = `Tên: ${response.name}; Email: ${response.email}`;
    console.log(response);
    alert(data);
  }
  return (
    <div className="register">
      <div className="register__big">
        <div className="register__form">
          <div className="register__form__content">
            <div className="register__heading">
              <div className="register__heading__text">
                <div className="register__heading__text__big">
                  Đăng Nhập
                </div>
                <div className="register__heading__text__small">
                  Chào bạn quay lại
                </div>
              </div>
              <div className="register__heading__logo">
                <img src="https://static.chotot.com/storage/assets/LOGIN/logo_register.png" alt=""
                  className="register__heading__logo__img" />
              </div>
            </div>
            <form className="register__container">
              <div className="register__container__item">
                <input type="text" placeholder="Nhập SĐT của bạn" className="register__input"
                />
              </div>
              <div className="register__container__item">
                <input type="text" placeholder="Nhập mật khẩu"
                  className="register__input"
                />
              </div>
              <div className="register__button">
                <button className="register__btn register__btn__active">
                  Đăng Nhập
                </button>
              </div>
            </form>
            <div className="register__title">
              Bạn quên mật khẩu
            </div>
            <div className="register__or">hoặc sử dụng</div>
            <div className="register__footer">
              <ul className="register__list">
                <li className="register__list__item">
                  <img className="register__list__image"
                    src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" alt="" />
                  <FacebookLogin
                    appId="586252699781698"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class hidden"
                    icon="fa-facebook"
                  />
                </li>
                <li className="register__list__item">
                  <img className="register__list__image"
                    src="https://static.chotot.com/storage/assets/LOGIN/google.svg" alt="" />
                </li>
                <li className="register__list__item">
                  <img className="register__list__image"
                    src="https://static.chotot.com/storage/assets/LOGIN/apple.svg" alt="" />
                </li>
              </ul>
            </div>
            <div className="register__login">
              <div className="register__login__item">Bạn chưa có tài khoản?</div>
              <a className="register__login__link"> Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </div>
      <div className="App">


      </div>
    </div>


  );
}

export default App;
