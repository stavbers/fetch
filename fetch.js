

const url = 'https://run.mocky.io/v3/cd634090-837c-42e1-b27f-f23e22f85ad7';
fetch(url)
// .then((resp) => resp.json())
.then(function(resp) {
   return resp.json()
})
.then(function(data) {
//   let authors = data.results;
console.log(data);
// console.log(data.0.userId)
console.log(typeof(data));
console.log(data[0].body)

})
.catch(function(error) {
 console.log(error);
});

let url1 = 'https://run.mocky.io/v3/cd634090-837c-42e1-b27f-f23e22f85ad7';
fetch(url1)
.then(function(response) {
    if (response.status == 200) {
        console.log("Status ok")
    } else { console.log(response.status)}
   
})
fetch(url1, {
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(function(resp) {
    return resp.json()
})
.then(function(data) {
    console.log(data);
  
})

.catch(function(error) {
    console.log(error);
  });



   fetch('https://form.reddev.online/country.json', {
       headers: new Headers({
         'User-agent': 'MY-UA-REDDEV'
       //   'User-agent': 'Mozilla/4.0 Custom User Agent'
       })
     })
     .then(response => response.json())
     .then(data => {
       console.log(data)
     })
     .catch(error => console.error(error))


