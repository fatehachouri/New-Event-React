import './design-system/main.css'
import SpeakersData from './design-system/components/creativeSpeakers/SpeakersData';
import CreativeSpeakers from './design-system/components/creativeSpeakers/CreativeSpeakers';
function App() {
  return (
    <div>
      <div style={{display:"flex"}}>
{
  SpeakersData.map(item=>{
    return <CreativeSpeakers key={item.id} {...item}/>
  })   
  
}
      </div>
    </div>
  );
}

export default App;
