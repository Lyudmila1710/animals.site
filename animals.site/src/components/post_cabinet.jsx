import {  useState, useEffect } from "react";
import ActivePost from '../components/activePost'

const PostCabinet = () => {

    let [cards, setCards] = useState([]);
    const [hasPosts, setHasPosts] = useState(false);

    const loadCards = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/users/orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.data.orders.length > 0) {
                    setCards(result.data.orders);
                    setHasPosts(true); 
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(loadCards, []);

    return (
        <div>
            {hasPosts && (
                <div className="row row-cols-md-3 g-4 w-75 m-auto justify-content-center">
                    {cards.map((item, index) => <ActivePost data={item} key={index} />)}
                </div>
            )}
            {!hasPosts && (
                <div className="clear text-center bg-grey">
                    <h2>Постов еще нет!</h2>
                </div>
            )}
        </div>
    );
}

export default PostCabinet;