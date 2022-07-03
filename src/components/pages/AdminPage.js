import Card from "../helperComponents/Card";
import Filters from "../helperComponents/Filters";
import {useState} from "react";

function AdminPage() {

    const [result, setResult] = useState([]);

    const getCards = () => {
        console.log(result);
        if (result.length !== 0) {
            return result.map((card, index) => {
                return (
                    <Card image={card.picture} title={card.firstName} description={card.description} firstButton={true}
                          btnText="View more"/>
                );

            });
        }
    };

    return (
        <>
            <Filters setResult={setResult}/>
            <div className="wrapper">
                {getCards()}
            </div>
        </>
    );
}

export default AdminPage;