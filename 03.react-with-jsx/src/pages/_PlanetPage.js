import React, { createElement as h } from "../lib/react.js";
import PlanetList from '../components/planet/PlanetList.js';
import PlanetItem from '../components/planet/PlanetItem.js';
import {listData} from '../data/data.js';


// 3. PlanetPage
export default class PlanetPage extends React.Component {
  render(){
    console.log(listData.items.map(({id, title})=> h(PlanetItem,{ key:id, id,title })));
    return h(
      PlanetList,
      { 
       lang:'en',
       children: listData.items.map(({id, title})=> h(PlanetItem,{ key:id, id,title }))
      }
    )
  }
}