import  "./itemlistcontainer.css";

const ItemListContainer  =({greeting})=>{



    return (

        <div style={{display:"flex", justifyContent:"center", paddingBottom:10 }}>
            
            <h1 className="item-list__titulo" >{greeting}</h1>

        </div>
    )
}
export default ItemListContainer;