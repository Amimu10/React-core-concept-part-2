
export default function Friend({friend}){ 
    console.log(friend);
    const {name, email, phone, website} = friend;
    return (
        <div className ="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <p>Website: {website}</p>

        </div>
    )
}