import { useDispatch } from "react-redux";
import { IMG_URL } from "../Utils/constants";
import { addItem } from "../Utils/CartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch()

    const handelItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div data-testid="items" key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between">
                            <div className="w-9/12">
                                <div className="py-2 ">
                                    <span className="font-bold">{item.card.info.name}</span>
                                    <span className="font-bold">-  Rs: {item.card.info.price ? item.card.info.price /100 :  item.card.info.defaultPrice /100 } -/ </span>
                                </div> 
                                <p className="font-serif">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12 p-4">
                                <div className="absolute">
                                    <button  className="p-2 mx-16 rounded-lg bg-black    text-white shadow-lg" onClick={() => handelItem(item)}> Add</button>
                                </div>
                                <img src={IMG_URL + item?.card?.info?.imageId } className="w-full"></img>
                            </div>

                        </div>

                    );
                })
            }
        </div>
    );
}
export default ItemList;