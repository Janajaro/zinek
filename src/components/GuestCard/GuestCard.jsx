import "./GuestCard.css"

export const GuestCard = ({guest}) => {
    return (
        
        <div className="individual-guest-card">

            <div className="individual-guest-card-subsection">

                <h2 className="individual-guest-card_name">{guest.name}</h2>
                <div className="individual-guest-card_description">{guest.description}</div>

            </div>
            
            <img className="individual-guest-card_img" src={guest.img} alt={guest.name} />

            <div className="individual-guest-card_contact">
                {guest.ig && (
                    <a
                    href={guest.ig}
                    className="individual-guest-card_contact-ig"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Instagram
                    </a>
                )}

                {guest.fb && (
                    <a
                    href={guest.fb}
                    className="individual-guest-card_contact-fb"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Facebook
                    </a>
                )}

                {guest.web && (
                    <a
                    href={guest.web}
                    className="individual-guest-card_contact-web"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Website
                    </a>
                )}

            </div>    
               
        </div>
    )
}