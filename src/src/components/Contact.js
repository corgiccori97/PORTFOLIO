import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import sendimg from'../images/send.png';

function Contact() {
    const form = useRef();

    const onSubmitForm = e => {
        e.preventDefault();
        // 메일 보내지고 나면 form reset 되게 하기
        emailjs.sendForm('service_l1xqgga', 'template_awvzl2s', form.current, 'IQ-MI3dj74IgsOStZ').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        <section className={styles.contact} id="contact">
            <div className='container'>
                <h1>Contact</h1>
                <form ref={form} onSubmit={onSubmitForm}>
                    <label htmlFor='to_email'>받는 사람: </label>
                    <input type="email" id="to_email" defaultValue='tkdgmlgg7@gmail.com' disabled/>
                    <hr />
                    <label htmlFor='from_email'><strong> * </strong>보내는 분 이메일: </label>
                    <input type="email" id="from_email" name="email" placeholder="이메일을 입력하세요" required />
                    <hr />
                    <label htmlFor='from_name'><strong>* </strong>보내는 분 이름: </label>
                    <input type="text" id="from_name" name="from_name" placeholder="이름" required />
                    <hr />
                    <textarea id="message" name="message" placeholder="내용을 적어주세요(필수기재)"  required />
                    <br />
                    <button type="submit">
                        <img src={sendimg} alt="send" />
                    </button>
                </form>
            </div>
        </section>

        </>
    );

}

export default Contact;