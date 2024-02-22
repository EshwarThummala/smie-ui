export function fetchFilteredUserDetails(filters, setUserData){
    fetch('http://127.0.0.1:5000',{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(filters)
        })
        .then(response => response.json())
        .then(jsonData => setUserData(jsonData))
}

export function fetchUserDetails(setUserData){
  fetch('http://127.0.0.1:5000',{
        method : 'GET',
        headers: {
          'Content-Type' : 'application/json'
          },
      })
      .then(response => response.json())
      .then(jsonData => setUserData(jsonData))
}