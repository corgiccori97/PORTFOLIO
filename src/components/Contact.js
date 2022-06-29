import styles from './Contact.module.css';
import { init, send } from 'emailjs-com';
import { useEffect } from 'react';

// 아이폰 메일 형식처럼 UI 짜기
function Contact() {
    useEffect(() => {
        init('IQ-MI3dj74IgsOStZ');
    }, [])

    const onSubmitForm = e => {
        send('service_l1xqgga', 'service_l1xqgga')
    }

    return (
        <>
        <section className={styles.contact} id="contact">
            <h1>Contact</h1>
            <hr />
            <form className='emailForm'>
                <input type="email" id="to_email" value="tkdgmlgg7@gmail.com" />
                <input type="email" id="from_email" placeholder="이메일을 입력하세요" />
                <input type="text" id="title" placeholder="제목" />
                <input type="textarea" id="content" placeholder="내용" />
                <button type="submit" onClick={onSubmitForm}>Send</button>
            </form>
        </section>

        </>
    );

}

export default Contact;