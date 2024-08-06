import React, { useContext } from 'react'
import './Main.css'
import { Icons } from '../../Icons/Icons'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  

    return (
        <div className='main'>
            <div className="nav">
                <p>TextAura</p>
                
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Human.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={()=>{
                                setInput("I'm looking for recommendations on must-try places in Hyderabad to experience some awesome biryani. What are the top spots that locals and food enthusiasts swear by for the best biryani in the city?")
                            }}>
                                <p>What are the top spots that locals and food enthusiasts swear by for the best biryani in Hyderabad?</p>
                                <img src={Icons.food_icon} alt="" />
                            </div>
                            <div className="card" onClick={()=>{
                                setInput("I have a job interview tomorrow and want to make a great impression. Can you share some unique and interesting tips to help me stand out and perform well?");
                            }}>
                                <p>Prepare me for a job interview</p>
                                <img src={Icons.interview_icon} alt="" />
                            </div>
                            <div className="card" onClick={()=>{
                                setInput("What is lazy loading in React. What is its purpose, how does it work, and what are the benefits of using it? Provide code examples to illustrate the concept.");
                            }}>
                                <p>What is Lazy Loading?</p>
                                <img src={Icons.question_icon} alt="" />
                            </div>
                            <div className="card" onClick={()=>{
                                setInput("How can I center a div element horizontally and vertically within its parent container using CSS? Explain different methods and their suitability for various scenarios. Provide code examples for each method.");
                            }}>
                                <p>How to Center a Div 😎</p>
                                <img src={Icons.code_icon} alt="" />
                            </div>
                        </div>

                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={Icons.keyboard_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={Icons.cbot} alt="" />
                            {
                                loading ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                    :
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>

                    </div>

                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input id='input-text' onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            
                             <img onClick={() => onSent()} src={Icons.send_icon} alt="" /> 
                        </div>
                    </div>
                    <p className="bottom-info">
                        Made with 🖤 by <a href="https://ruthwikreddy.me">Ruthwik Reddy.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;
