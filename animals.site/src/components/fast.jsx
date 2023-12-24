const FastSearch = (query, card, setCard) => {
    console.log(`https://pets.сделай.site/api/search?query=${query}`);
    fetch(`https://pets.сделай.site/api/search?query=${query}`).then(response => response.json())
        .then(result => {
            console.log(result);
            setCard(result);
            console.log(card)
            console.log('qwerty')
        })
        .catch(error => console.log('error', error));
}
export {FastSearch};