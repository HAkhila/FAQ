import React from 'react'
import { useState } from 'react';
import plus from '../../Images/plus.png'
import minus from '../../Images/minus.png'
import "./frequent.css"

function Frequent() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {

        if (selected === i) {
            return setSelected(null)
        }

        return setSelected(i);
    }

    const terms = [
        { title: "UI/UX Designer" }, { title: "Frontend Developer" }, { title: "Data Analyst" }, { title: "Sales Marketing" }, { title: "Motion Graphics" }, { title: "VFX Artist" }, { title: "IT Support" },
        { title: "White Hat Hacker " }, { title: "Game Designer" }, { title: "Full stack Developer" }, { title: "HR" }, { title: "Web Developer" }, { title: "Esports Player" }, { title: "Digital Marketing" },
    ];

    const buttonData = terms.map((data) => {

        return (
            <div>
                <button className='flex-button-group'> {data.title}</button>
            </div>
        )
    })

    const data = [
        {
            question: 'Is there a free trail available?',
            answer: 'A frequently asked questions list is often used in articles, websites, email lists'
        },

        {
            question: 'Can i change my plan later?',
            answer: 'If your are upgrading your plan, your changes will take effect right away. '
        },
        {
            question: 'What is your cancelation policy?',
            answer: ' A cancellation provision clause is a provision in an insurance policy that permits an insurer to cancel a policy at any time before its expiration date'
        },
        {
            question: 'How does billing work?',
            answer: ' An interval between one billing statement date and the next statement date for recurring goods or services provided from one company to another or a consumer.'
        },
        {
            question: 'How do i change my account email?',
            answer: ' its not possible to change your email address  therefore you need to create a new one. To create a new email address, you need to set up a new Gmail account'
        },
        {
            question: 'What is your cancelation policy?',
            answer: ' A cancellation provision clause is a provision in an insurance policy that permits an insurer to cancel a policy at any time before its expiration date'
        },
        {
            question: 'How does billing work?',
            answer: ' An interval between one billing statement date and the next statement date for recurring goods or services provided from one company to another or a consumer.'
        },
        {
            question: 'How do i change my account email?',
            answer: 'its not possible to change your email address  therefore you need to create a new one. To create a new email address, you need to set up a new Gmail account'
        },
    ];

    const faqData = data.map((data, i) => {
        return (
            <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                    <h2>{data.question}</h2>
                    <span >{selected === i ? <img src={minus} alt={minus} /> : <img src={plus} alt={plus} />}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                    {data.answer}
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="flexFaqQuestionContainer">  </div>
            <section className='FrequentlyAsked'>Frequently Asked Questions</section>
            <div className='flex-containerFrequently'>{buttonData}</div>
            <div className='flexQuestion'>  {faqData}</div>
        </div>
    )
}

export default Frequent;