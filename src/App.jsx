import React from 'react';
import './App.css'
import screen from './assets/screen.png'
import socialmedia from './assets/socialmedia.png'
import logo from './assets/logo.png'

import audio from './assets/audio.png'
import band from './assets/band.png'
import bon from './assets/bon.png'
import book from './assets/books.png'
import cameo from './assets/cameo.png'
import club from './assets/club.png'
import com from './assets/com.png'
import contact from './assets/contact.png'
import gift from './assets/gift.png'

import crossimg1 from './assets/Fantastical 1.png'
import crossimg2 from './assets/Fantastical 2.png'

function App() {
  return (
    <>
    <div className='main'>
          <div className='navbar'>
            <img src={logo} alt="" />
            <button id='signup'>Signup free</button>
          </div>
          <div className='heading'>
            <h2>CNNCT – Easy <br />
            Scheduling Ahead</h2>
          </div>
          <button id='signup'>Signup free</button>
          <div className='img'>
            <img src={screen} alt='example' />
          </div>
          <div className="content2">
             <h2>Simplified scheduling for you and your team</h2>
             <p>CNNCT eliminates the back-and-forth of scheduling meetings so you can focus on what matters. Set your availability,
               share your link, <br />
               and let others book time with you instantly.</p>
          </div>
          <div className='sidebyside'>
            <div>
              <h2 id='meeting_content'>Stay Organized with Your <br /> Calendar & Meetings</h2> <br />
              <p>
              Seamless Event Scheduling 
              </p> <br />
              <ul>
              <li>View all your upcoming meetings and appointments in one place.</li><br />
              <li>Syncs with Google Calendar, Outlook, and iCloud to avoid conflicts.</li> <br />
              <li>Customize event types: one-on-ones, team meetings, group sessions, and webinars.</li> <br />
              </ul>
            </div>
            <div>
              <img id="crossimg1" src={crossimg1} alt="" />
              <img id="crossimg2" src={crossimg2} alt="" / >
            </div>
          </div>
          <div className="customer_stories">
            <div>
            <h1>Here's what our <span id='customer'>customer</span> <br />
            has to says</h1><br />
            <button id='stories'>Read customer stories</button>
            </div>
            
            <p>short description goes in here lorem ipsum <br /> is a placeholder text to <br /> demonstrate.</p>
          </div>

          <br /><br />



          <div className="amazingtool">
            <div id='amazingtoolitem1'className='amazingitems'>
              <p id="amazintool-heading">Amazing tool!Saved me months</p> 
              <p id='testinomials'>This is placeholder for your testinomials and what your client has to <br /> say,put them here and make sure 100% true and meaningful </p>
              <div id="amazintool-director"> 
                <p id='icon'></p>
                <div>
                  <p>Jhon master</p>
                  <p>Director,Spark.com</p>
                </div>
              </div>
            </div>


            <div id='amazingtoolitem2' className='amazingitems'>
            <p id="amazintool-heading">Amazing tool!Saved me months</p> 
              <p id='testinomials'>This is placeholder for your testinomials and what your client has to <br /> say,put them here and make sure 100% true and meaningful </p>
              <div id="amazintool-director"> 
                <p id='icon'></p>
                <div>
                  <p>Jhon master</p>
                  <p>Director,Spark.com</p>
                </div>
              </div>
            </div>


            <div id='amazingtoolitem3' className='amazingitems'>
            <p id="amazintool-heading">Amazing tool!Saved me months</p> 
              <p id='testinomials'>This is placeholder for your testinomials and what your client has to <br /> say,put them here and make sure 100% true and meaningful </p>
              <div id="amazintool-director"> 
                <p id='icon'></p>
                <div>
                  <p>Jhon master</p>
                  <p>Director,Spark.com</p>
                </div>
              </div>
            </div>

            <div id='amazingtoolitem4' className='amazingitems'>
            <p id="amazintool-heading">Amazing tool!Saved me months</p> 
              <p id='testinomials'>This is placeholder for your testinomials and what your client has to <br /> say,put them here and make sure 100% true and meaningful </p>
              <div id="amazintool-director"> 
                <p id='icon'></p>
                <div>
                  <p>Jhon master</p>
                  <p>Director,Spark.com</p>
                </div>
              </div>
            </div>
          </div>
          <br /><br />

          <div className="applinks">
            <h1 className='applinks-heading'>All Link Apps and Integrations</h1>
            <div className="apps">
              <div id='appitem'>
                <img src={audio} alt="" />
                <div>
                <h4>Audiomack</h4>
                <p>Add an Audiomack player to your <br /> Linktree</p>
                </div>
              </div>


              <div id='appitem'>
                <img src={band} alt="" />
                  <div>
                  <h4>Bandsintown</h4>
                  <p>Drive ticket sales by listing your events </p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={bon} alt="" />
                  <div>
                  <h4>Bonfire</h4>
                  <p>Display and sell your custom merch</p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={book} alt="" />
                  <div>
                  <h4>Books</h4>
                  <p>Promote books on your Linktree</p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={gift} alt="" />
                  <div>
                  <h4>Buy Me A Gift</h4>
                  <p>Let visitors support you with a small gift</p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={cameo} alt="" />
                  <div>
                  <h4>Cameo</h4>
                  <p>Make impossible fan connections <br /> possible</p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={club} alt="" />
                  <div>
                  <h4>Clubhouse</h4>
                  <p>Let your community in on the <br />conversation</p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={com} alt="" />
                  <div>
                  <h4>Community</h4>
                  <p>Build an SMS subscriber list</p>
                  </div>
              </div>


              <div id='appitem'>
              <img src={contact} alt="" />
                  <div>
                  <h4>Contact Details</h4>
                  <p>Easily share downloadable <br /> contact details</p>
                  </div>
              </div>

  
            </div>
          </div>

          <br /><br />

          <div className="footer">

            <div id='buttonsandt'>
            <div className="buttons">
              <button id='login'>Log in</button>
              <button id='signup'> Sign up free</button>
            </div>
            <div className="tandc">
              <p>About CNCT</p>
              <p>Careers</p>
              <p>Terms and Conditions</p>
              <p>Blog</p>
              <p>Getting Started</p>
              <p>Privacy Policy</p>
              <p>Press</p>
              <p>Features and How Tos</p>
              <p>Cookies Notice</p>
              <p>Social Good</p>
              <p>FAQs</p>
              <p>Trust Center</p>
              <p>Contact</p>
              <p>Report a Violation</p>
            </div>

            </div>

            
              <div id='socialmediaicons'>
              <div style={{padding:"10px", fontSize:"small"}}>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri <br />
                people of the Kulin Nation, and pay our respects to Elders past, present and emerging.</div>
              <div><img   src={socialmedia} alt="" /></div>
              </div>
            
            
            
          </div>

          
      
    </div>
    </>
  )
}

export default App