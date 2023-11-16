//----<<IMPORT DATOTEKA--->>
import React, { useState } from "react";
import "./body.css"

function Body() {

  //<<-----KORISTIMO USESTATE HOOK ZA POHRANU VRIJEDNOSTI S INPUTA I STVARANJE NIZA---->>
    const[name,setName]=useState("");
    const[arrname,setArrname]=useState([]);
  //<<----FUNKCIJA KOJA UZIMA VRIJEDNOST S INPUT POLJA--->>>
    const Getarical=(e)=>{
      setName(e.target.value)
    }
    //<<----FUNKCIJA KOJA PRAVI NIZ PODATAKA S INPUTA I POSTAVLJA IH NA LISU,
    //---VAZNA STAVKA JESTE I STVARANJE JEDINSTVENOG KLJUCA(ID) KAKO BI MOGLI
    //SIGURNO DA UPRAVLJAMO STAVKAMA LISTE KASNIJE
    const Addarticle=(e)=>{
      e.preventDefault()
      const info={
      id:arrname.length===0 ? 1 : arrname[arrname.length-1].id+1,
      taskname:name
      }
      let newname=[...arrname,info]
      setArrname(newname)
    }
    //<<----FUNKCIJA ZA UZIMANJE STAVKI S LISTE ILI BRISANJE UZ POMOC ONOG ID KOJI JE JAKO BITAN
    //----U WEB DEVELOPMENTU PRILIKOM RADA S PODATCIMA[BAZA,FILTER FUNKCIJA,MAP FUNKCIJA...]
    const Delete=(id)=>{
      let newList=arrname.filter((stavka)=>{
        if(stavka.id===id){
          return false
        }else{
          return true
        }
      })
      setArrname(newList)
    }
  
  
  
  //<<----RENDEROVANJE SADRZAJA KOMPONENTE KAO I SETOVANJE KLASA I VRIJEDNOSTI ZA ISTU--->>
    return (
      <div className="card">
        <form className="sets" onSubmit={Addarticle}>
          <h3 className="style">Dodaj Oglas:</h3>
          <input onChange={Getarical} maxLength={40}></input>
          <button className="btn">Dodaj</button>
        </form>
        <p className="prikaz">
          {arrname.map((stavka)=>{
            return <><h3 className="kolona">{stavka.taskname} <button className="dltbtn" onClick={()=>Delete(stavka.id) }>Uzmi oglas</button>
            </h3>
           </>
          })}
        </p>
      </div>
    );
  }
  //<<---EKSPORT KOMPONENTE--->>
  export default Body;
  