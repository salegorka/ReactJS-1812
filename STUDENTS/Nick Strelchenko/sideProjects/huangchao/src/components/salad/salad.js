import React from 'react'
import ItemList from '../item-list'

export default class Salad extends React.Component{
    objects = [
        {id:1,name:"Битые огурцы",price:400,weight:"200г",desc:"Огурцы, острый перец, кинза, арахис.",imgUrl:"./bitie_ogyrtsi.jpg"},
        {id:2,name:"Корень колокольчика",price:400,weight:"200г",desc:"Корень колокольчика, чеснок, соевый соус, сироп.",imgUrl:"./koren_kolokolchika.jpg"},
        {id:3,name:"Курица с овощами",price:600,weight:"250г",desc:"Нежное куриное филе, огурец, уксус, соль, сахар.",imgUrl:"./kyritsa_s_ovoshami.jpg"},
        {id:4,name:"Медуза с говядиной и овощами",price:850,weight:"200г",desc:"Запеченная медуза с говядиной и овощами, острый перец, огурцы, морковь, зелень, кунжут.",imgUrl:"./mesyza_s_govyadinoy_i_ovoshami.jpg"},
    ]
    render(){
        return(
            <React.Fragment>
                <ItemList objects={this.objects} />        
            </React.Fragment>
        )
    }
}