import CardItem from "./CardItem"
import type { Movie_list } from "../../../components/type"

interface Props{
  list:Movie_list[]
  usingPopup:boolean
}


function CardList({list, usingPopup}:Props) {
  return (
    <ul>
      {
        list.map((item) => (
          <li key={item.id}>
            <CardItem item={item} popup={usingPopup}/>
          </li>)
        )
      }
    </ul>
  )
}
export default CardList