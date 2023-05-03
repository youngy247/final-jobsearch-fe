
const Footer = ({changeSelectedID, selectedID}) => {
    return(
        <div className='container' onClick={changeSelectedID}>
            &copy; Copyright iO Academy 2022
        </div>
    )
}

export default Footer
