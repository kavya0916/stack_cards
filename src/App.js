import './style.css';

function App() {
    let stack1= document.querySelector('.stack1');
    [...stack1.children].reverse().forEach(i=>stack1.append(i));
    // let card2= document.querySelector('.stack');
    // // [...card2.children].reverse().forEach(j=>card2.append(j));
    // // let card3= document.querySelector('.stack');
    // // [...card3.children].reverse().forEach(k=>card3.append(k));
    // // let card4= document.querySelector('.stack');
    // // [...card4.children].reverse().forEach(l=>card4.append(l));
  
   const swap=(e)=>{
   
    // let card1 = document.querySelector('.card1:last-child');
    // if(e.target !== card1){
    //   return;
   
   }
    
  return (
    <>
   
    <div className="stack1">
       <div className="card1" onClick={swap}>2</div>
       <div className="card1" onClick={swap}>3</div>
       <div className="card1" onClick={swap}>1</div>
       <div className="card1" onClick={swap}>4</div>
       <div className="card1" onClick={swap}>5</div>
       <div className="card1" onClick={swap}>6</div>
       <div className="card1" onClick={swap}>7</div>
       <div className="card1" onClick={swap}>8</div>
      
    </div>
       <div className="stack2">
       <div className="card2">1</div>
       <div className="card2">2</div>
       <div className="card2">3</div>
       <div className="card2">4</div>
       <div className="card2">5</div>
       <div className="card2">6</div>
       <div className="card2">7</div>
       <div className="card2">8</div>
    </div>
       <div className="stack3">
       <div className="card3">1</div>
       <div className="card3">2</div>
       <div className="card3">3</div>
       <div className="card3">4</div>
       <div className="card3">5</div>
       <div className="card3">6</div>
       <div className="card3">7</div>
       <div className="card3">8</div>
      
    </div>
       <div className="stack4">
       <div className="card4">1</div>
       <div className="card4">2</div>
       <div className="card4">3</div>
       <div className="card4">4</div>
       <div className="card4">5</div>
       <div className="card4">6</div>
       <div className="card4">7</div>
       <div className="card4">8</div>
      
    </div>
    
   </>
   
   
  );
}

export default App;
