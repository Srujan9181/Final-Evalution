import React from 'react'
import './Event.css'
function Event() {
  let a=[{name:'meeting',date:'Friday,28feb',time:'10.00Am-12.00AM',Duration:'1hr',type:'Group meeting'},
         {name:'project meeting',date:'Saturday,29feb',time:'11.00Am-1.00PM',duration:'2hr',type:'Individual meeting'},
             {name:'lunch break',date:'Saturday,29feb',time:'1.00PM-2.00PM',duration:'1hr',type:'Break'},
             {name:'presentation',date:'Saturday,29feb',time:'2.00PM-3.00PM',duration:'1hr',type:'Individual meeting'}]
  
  return (
    <div className='EventScheduler'>
        <div className='Eventheading'>
          <div >
              <h2 style={{padding:"10px"}}>Event Types</h2><br />
              <div className='Eventsubheading' >
                <p>Create events to share for people to book on your calendar. <br />New</p>
                <button style={{padding:"10px", border:"2px solid blue",borderRadius:"20px",color:"blue"}}>+ Add New Event</button>
              </div>
          </div>
          
        </div>
        <div className='meetings'>
        <div>g</div>
        <div>g</div>
        <div>g</div>
        <div>g</div>
        <div>k</div>
        <div>5</div>
        </div>

    </div>
  )
}

export default Event