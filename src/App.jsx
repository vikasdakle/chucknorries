
import React, { useEffect, useState } from 'react'
import '../src/style.css'

const App = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");
  const [selectedCat, setSelectedCat] = useState({ item: "demo" })
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getjokes = async (item) => {
    setIsLoading(true)
    setSelectedCat({ item })
    setTimeout(async () => {
      const result = await fetch(`https://api.chucknorris.io/jokes/random?${capitalizeWords(selectedCat.item)}`)
        .then((response) => response.json())
        .then((data) => setJoke(data.value))
        .catch((error) => console.error('Error fetching joke:', error));
      setIsLoading(false)
    }, 500);
  }


  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);


  return <div className='backgrouncolor p-4'>
    <div className="container">
      <div className="text-center">
        <h4 className='text-success fw-bold pt-3 animation' style={{ fontSize: "40px" }}>Chuck Norries</h4>
      </div>
      <div className="row mt-3">
        {
          categories.map(item => <div key={item} className="col-sm-3 mt-3">
            <div class="card box" style={{ borderStyle: "none", }}>
              <button onClick={e => getjokes(item)} data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-light p-5" style={{ borderStyle: "none", height: "180px" }}>
                <span className='fw-bold' style={{ fontSize: "30px", color: "#1E3A8A" }}>{capitalizeWords(item)}</span>
                <p style={{ color: "#6B87D5" }}>Unlimited Jokes On {capitalizeWords(item)}</p>
              </button>
            </div>
          </div>
          )
        }


        <div style={{ marginTop: "200px" }} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg  modal-dialog-scrollable">
            <div class="modal-content text-light bgmodal" >
              <div class="modal-header border-0 ">
                <div className='fw-bold' style={{ marginLeft: "45%", fontSize: "35px", color: "#FFFFFF" }}>
                  {capitalizeWords(selectedCat.item)}
                </div>
                <button type="button" class="btn-close   " style={{ backgroundColor: "white" }} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div style={{ border: "2px solid black", margin: "25px" }}>
                <div class="modal-body text-light fw-bold text-center " style={{ fontSize: "25px" }}>
                  {
                    isLoading ? <div class="spinner-border text-primary" style={{ height: "60px", width: "60px" }} role="status">
                      <span class="sr-only"></span>
                    </div>
                      : <>
                        <p style={{ fontSize: "35px", color: "#DBEAFE" }}>"
                          {joke}
                          "
                        </p>
                      </>
                  }
                  <div>
                    <button type="button" style={{ backgroundColor: "#1D4ED8", color: "#FFFFFF" }} class="btn  btn-lg w-75 mt-3" onClick={e => getjokes(selectedCat.item)}>Next Joke</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
}

export default App
