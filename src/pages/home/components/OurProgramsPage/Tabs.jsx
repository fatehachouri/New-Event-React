import { useState } from "react";
import { Line, Span, Wrapper } from "./styles";
import { tab1, tab2, tab3 } from "../../../../design-system/components/OurPrograms/OurProgramsData";
import OurProgramsComponent from "../../../../design-system/components/OurPrograms/OurPrograms";
import theme from "../../../../design-system/config";

export default function Tabs() {
    const [tab,setTab]=useState("tab1");

    const switchTab=(tab)=>{
        setTab(tab);
    }
  return (
    <>
    <Wrapper>
        <Span style={{color: tab==="tab1"? theme.primary : "", borderBottom: tab==="tab1" ? `1px solid ${theme.black}`: "" }} onClick={()=>switchTab("tab1")}>First Day</Span>
        <Span style={{color: tab==="tab2"? theme.primary : "", borderBottom: tab==="tab2" ? `1px solid ${theme.black}`: ""}} onClick={()=>switchTab("tab2")}>Second Day</Span>
        <Span style={{color: tab==="tab3"? theme.primary : "", borderBottom: tab==="tab3" ? `1px solid ${theme.black}`: ""}} onClick={()=>switchTab("tab3")}>Third Day</Span>
    </Wrapper>
    <Line />
    {
    tab==="tab2" ?  tab2.map((item)=>{
        return(
            <OurProgramsComponent key={item.id} name={item.name} description={item.description} 
            roomNumber={item.roomNumber} alt={item.alt} img={item.img} time={item.time}/>
        )
    })
    : tab==="tab3"? tab3.map(item=>{
        return(
            <OurProgramsComponent key={item.id} name={item.name} description={item.description} 
            roomNumber={item.roomNumber} alt={item.alt} img={item.img} time={item.time}/>
            )
    })
    :  tab1.map(item=>{
        return(
            <OurProgramsComponent key={item.id} name={item.name} description={item.description} 
            roomNumber={item.roomNumber} alt={item.alt} img={item.img} time={item.time}/>
            )
    })    
}
    </>
  )
}
