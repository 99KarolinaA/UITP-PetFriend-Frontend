import Card from "../helperComponents/Card";
import ProfileCard from "../helperComponents/ProfileCard";

function PetOwnerProfile() {

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

    const getAcceptedBookings = () => {
        return mockData.map((result, index) => {
            return (
                <Card image={result.Image} title={result.Name} description={result.Description} secondButton={true}
                      btn2Text="Decline"/>
            );

        });
    };


    return (
        <>
            <div style={{display: 'flex', marginTop: '60px', marginLeft: '60px'}}>
                <ProfileCard image={mockData.at(0).Image} title={mockData.at(0).Name}
                             description={mockData.at(0).Description}/>
                <div style={{paddingTop: '60px', width: '70%'}}>
                    <h1 style={{
                        paddingLeft: '90px',
                        paddingBottom: '40px'
                    }}>{getAcceptedBookings().length + ' scheduled bookings'}</h1>
                    <div className="wrapper">
                        {getAcceptedBookings()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PetOwnerProfile;