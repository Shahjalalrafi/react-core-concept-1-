const book = 'Book list'
const title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, excepturi?'
const date = new Date()
const currentDay = date.getDate()
const currentMonth = date.getMonth()
const currentYear = date.getFullYear()

function Card(props) {
  const {titleText, descText} = props
  return <div className='card'>
            <h3 className='cardTitle'>{props.titleText}</h3>
            <p className='cardDesc'>{props.descText}</p>
            <p className='cardFooter'>{currentDay + "/" + currentMonth + "/" + currentYear}</p>
          </div>
}
 
export default Card;