export function storeEmails(){
    const body=JSON.stringify(this.email);
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return this.http.post('https://catalog-daa7b.firebaseio.com/emails.json', body, {headers: headers})
}

export function storeBrand(){
  const body=JSON.stringify(this.brand);
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  return this.http.post('https://catalog-daa7b.firebaseio.com/.json', body, {headers: headers})
}


export function fetchPosts(){
    const body=JSON.stringify(this.brand);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('https://catalog-daa7b.firebaseio.com/.json')
      .map(data => data.json())

  }

export function upVote(upvoteItem, event){
    if (upvoteItem.value.toggle === true) {return}
    upvoteItem.value.upvote++;
    upvoteItem.value.toggle = true;
    event.stopPropagation();
  }