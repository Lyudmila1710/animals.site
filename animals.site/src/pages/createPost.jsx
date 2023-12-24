import Header from "../components/header";
import React, { useRef } from 'react';
import Footer from "../components/footer";

const AddPage = () => {
    let message=useRef()
    let message1=useRef()

    function load(e) {
        e.preventDefault();

        var formdata = new FormData(document.getElementById("load"));

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/pets", requestOptions)
            .then(response => response.status)
            .then(result => {
                console.log(result);
                if (result == 200) { message.current.classList.remove('d-none')
                message1.current.classList.add('d-none')
              }
              else
              if (result.error.code==422) {message1.current.classList.remove('d-none')
              message.current.classList.add('d-none')}
            })

            .catch(error => console.log('error', error));
    }

    return ( 
        <div>
        <Header/>
<div className="w-50 bg-dark" style={{ color:"white",
    "borderRadius": "10px",
    "margin": "54px auto",
    "padding": "30px 40px",
    "boxShadow": "20px 20px 80px rgb(92, 92, 92)"}}>
        <h2 className="text-center">Добавьте пост!</h2>
        <form className="contei w-50 m-auto p-5" id="load"  onSubmit={load} >
            <label htmlFor="inputA">Ваше имя</label>
            <input type="text" className="form-control" id="inputA" required name="name" />
            <br />
            <label htmlFor="inputK">Введите номер телефона</label>
            <input type="text" className="form-control" pattern='^[\d\+]{12}$' id="inputK" required name="phone" />
            <br />
            <label htmlFor="inputEmail1">Введите вашу почту</label>
            <input type="email" className="form-control" id="inputEmail1" placeholder="Почта" required name="email" />
            <br />
            <details className="w-100 d-flex flex-column justify-content-center align-items-center">
        
            <summary className="btn btn-outline-light w-75 m-auto" style={{ "margin": "auto", "marginBottom": "20px", "overflow": "hidden", "textOverflow": "ellipsis" }}>
    Зарегистрироваться
</summary>
                
                <div className="d-flex flex-column justify-content-center align-items-center w-50" style={{ "margin": "auto" }}>
                    <div className="mb-4 w-100">
                        <br />
                        <input type="password" className="form-control border border-primary" placeholder="Пароль" required name="password" />
                    </div>
                    <div className="mb-4 w-100">
                        <input type="password" className="form-control border border-primary" placeholder="Введите пароль повторно" required name="password_confirmation" />
                    </div>
                </div>
            </details>
            <br />
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Выберите файл: </label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" required name="photos1" />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Выберите файл: </label>
                <input type="file" className="form-control-file" id="exampleFormControlFile2" name="photos2" />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Выберите файл: </label>
                <input type="file" className="form-control-file" id="exampleFormControlFile3" name="photos3" />
            </div>
            <br />
            <label htmlFor="inputLast">Имя</label>
            <input type="text" className="form-control" id="inputKlich" name="mark" />
            <br />
            <label htmlFor="inputLast">Вид животного</label>
            <input type="text" className="form-control" id="inputVid" required name="kind" />
            <br />
            <label htmlFor="inputLast">Район</label>
            <input type="text" className="form-control" id="inputLast" required name="district" />
            <br />
            <label htmlFor="exampleFormControlTextarea1">Описание</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
            <br />
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" required name="confirm" />
                <label className="form-check-label" htmlFor="gridCheck">
                    Подтвердите что вы не робот
                </label>
            </div>
            <br />

            <div className="d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-outline-light me-2">Выложить объявление</button>
            </div>
        </form>
        <div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно выложили объявление!
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Упс, ошибка! Попробуйте выложить объявление позже
    </div>
        <pre></pre>
        </div>
        <Footer/>
</div>
     );
}
 
export default AddPage;