const API_URL = 'https://api.github.com/users/HassanMahmoodAwan'

const xml = new XMLHttpRequest();
xml.open('GET', API_URL)

xml.onreadystatechange = function(){
    if (xml.readyState == 4){
        const data = JSON.parse(this.responseText)  // str to object
        // console.log(data)
        console.log(data.following)
    }
}
xml.send()