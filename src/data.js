export function storeEmails(){
    const body=JSON.stringify(this.email);
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return this.http.post('https://catalog-daa7b.firebaseio.com/emails.json', body, {headers: headers})
}

export async function storeBrand(newBrand){
  const options = {
    method: 'POST',
    body: JSON.stringify(newBrand)
  }
  let result = await fetch('https://superjuice-1cb15.firebaseio.com/brands.json', options)
  let json = await result.json()
  return json
}


export async function fetchPosts(){
    let data = await fetch('https://superjuice-1cb15.firebaseio.com/.json')
    let json = await data.json()
    let brands = json.brands
    let brandsArr = []
    for (var key of Object.keys(brands)) {
            brandsArr.push(brands[key])
    }
    return brandsArr
  }

export function upVote(upvoteItem, event){
    if (upvoteItem.value.toggle === true) {return}
    upvoteItem.value.upvote++;
    upvoteItem.value.toggle = true;
    event.stopPropagation();
  }