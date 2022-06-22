import Card from "../Card";
import ProfileCard from "./ProfileCard";

function AdminPage() {

    const mockData = [
        {
            "Name": "Karolina",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "29 March 2022 17:00",
        },
        {
            "Name": "Name",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "Starts in 1 hour"
        },
        {
            "Name": "Name2",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image": "https://shopcdn.stockphotosecrets.com/resizenp/600x600/x@02d43169dc/smss52/smsimg30/pv1000/ingimagecontributors/ing_47129_47221.jpg",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
    ]

    const getCards = () => {
        return mockData.map((result, index) => {
            return (
                <Card image={result.Image} title={result.Name} description={result.Description} firstButton={true}
                      secondButton={true} btnText="Accept" btn2Text="Decline"/>
            );

        });
    };

    return (
        <div style={{display: 'flex', marginTop: '60px', marginLeft: '60px'}}>
            <ProfileCard image={mockData.at(0).Image} title={mockData.at(0).Name}
                         description={mockData.at(0).Description}/>
            <div className="wrapper" style={{paddingTop: '60px', width: '70%'}}>
                {getCards()}
            </div>
        </div>
    );
}

export default AdminPage;