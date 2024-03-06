const localhost = "http://127.0.0.1:5000"
const renderApi = "https://smie-api.onrender.com/"


export function fetchFilteredUserDetails(filters, setUserData, setLoader){
    setLoader(true)
    fetch(renderApi,{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(filters)
        })
        .then(response => response.json())
        .then(jsonData => {
          setLoader(false)
          setUserData(jsonData)
        })
}

export function fetchUserDetails(setUserData, setLoader){
  setLoader(true)
  fetch(renderApi,{
        method : 'GET',
        headers: {
          'Content-Type' : 'application/json'
          },
      })
      .then(response => response.json())
      .then(jsonData => {
        setLoader(false)
        setUserData(jsonData)
      })
}