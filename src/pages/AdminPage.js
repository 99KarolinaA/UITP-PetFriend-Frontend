import Card from "../Card";

function AdminPage() {

    const mockData =  [
        {
            "Name": "Karolina",
            "Image": "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "29 March 2022 17:00",
        },
        {
            "Name": "Name",
            "Image":"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "Starts in 1 hour"
        },
        {
            "Name": "Name2",
            "Image":"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image":"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image":"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image":"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
        {
            "Name": "Name2",
            "Image":"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
            "Description": "Description",
            "Date": "29 March 2022 17:00"
        },
    ]

    const getCards = () => {
        return mockData.map((result, index) => {
            return (
                <Card image={result.Image} title={result.Name} description={result.Description} btnText="View more"/>
            );

        });
    };

    return (
        <div className="wrapper">
            {getCards()}
        </div>
    );
}

export default AdminPage;