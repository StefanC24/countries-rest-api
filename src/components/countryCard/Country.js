import './Country.css'
function Country(props){
    return(
        <div className='card-container'>

            <img src={props.flags.png} alt=''></img>
            <h1>{props.name.common}</h1>
            {
                props.borders ?
                    props.borders.map(border =><p>{border}</p>) 
                    :
                    <p>No border info</p>
            }
            
        </div>
    )
}

export default Country