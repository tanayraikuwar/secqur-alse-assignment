import React, { useState, useEffect} from 'react'
import "../assets/CSS/Home.css"
import hamMenu from "../assets/images/hamMenu.svg"
import home from "../assets/images/home.svg";
import fireDb from "../firebase";
import RenderImage from '../components/RenderImage';
import Filter from '../components/Filter';
import filter from "../assets/images/filter.svg";
const Home = ({setMaleCount,setFemaleCount}) => {
  const [data, setData] = useState({});
  const [clickedData, setClickedData] = useState({});
  const [activeState, setActiveState] = useState(clickedData.Name);
  const [filterOption,setFilterOption] = useState(false);


  //Effect to set ClickedData

  useEffect(() => {
    setClickedData({ ...data[Object.keys(data)[0]] });
  }, [data]) 

  //Effect to set ActiveState

  useEffect(() => {
    setActiveState(clickedData.Name);
  }, [clickedData])

  //Effect to get all data from the database

  useEffect(() => {
    fireDb.child("/").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() })
      } else {
        setData({});
      }
    });

  }, []);

  //Effect to set male, female count

  useEffect(() => {
    let objectLength = Object.keys(data).length;
    let femaleCt = 0
    Object.keys(data).forEach((key) => {
      if (data[key].Gender === "Female") {
        femaleCt++
      };
    })
    setFemaleCount(femaleCt);
    setMaleCount(Math.abs(objectLength - femaleCt))
  }, [data,setMaleCount,setFemaleCount])



  return (
    <div className='home-container'>
      
      {/* Side navbar */}

      <div className='home-side-nav'>
        <img src={hamMenu} alt="hamMenu.png" style={{ fill: "white" }} />
        <img src={home} alt="home.png" />
      </div>

      {/* Middle information display section */}

      <div className='home-middle'>

        <div className="candidate-title" style={{ textAlign: "center" }}>
          <h1>{clickedData.Gender}</h1>
        </div>

        <div className='title-below-container'>

          <div className="detail-container">

            <div className="candidate-heading">
              <h2 style={{ margin: "0" }}>{clickedData.ID}</h2>
              <h3 style={{ margin: "0" }}>Person Detected</h3>
            </div>

            <div className="candidate-detail">

              <p>Name    : {clickedData.Name}</p>  <br />
              <p>Location: {clickedData.Location}</p>  <br />
              <p>Date    : {clickedData.Date} </p>  <br />
              <p>Time    : {clickedData.Time} </p>  <br />

            </div>

            <div className="candidate-discription">

              Description: <br />
              {clickedData.Name} Detected at {clickedData.Location} on {new Date(clickedData.Date).toDateString()}
              
            </div>

          </div>

          <div className="candidate-image">
            <RenderImage name={activeState} /> {/** Component use to render images */}
          </div>

        </div>

      </div>

      {/* Left side scrollable list */}

      <div className='home-left-content'>

        <div className="events">

          <div className="event-title">

            <div className="event-upper">

              <h3>Events</h3>
              <img src={filter} alt="filter.svg" onClick={()=>setFilterOption(!filterOption)} />

            </div>

            <div className={`filter-options ${filterOption && "active"} `}>
              <Filter setData={setData} /> {/** Component use to filter data  */}
            </div>

          </div>

          {Object.keys(data).map((dataId) => {
            return (

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                onClick={() => {
                  setClickedData({ ...data[dataId] })
                  setActiveState(data[dataId].Name)
                }
                } key={dataId} >

                <div className={`event-data ${activeState === data[dataId].Name && "active"}`} >

                  <div className='event-data-head' >
                    <span>{data[dataId].ID} : {data[dataId].Location} </span>
                    <span>{data[dataId].Date} {data[dataId].Time}</span>
                  </div>

                  <p style={{ marginBottom: "0%" }}>Person Detected.</p>

                </div>

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Home