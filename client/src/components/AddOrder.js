import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {CLIENT_ID} from "../toolkit/actions/actions"
import {addOrder} from "../toolkit/reducers/mainReducer"

const AddOrder = ({clientId}) => {

    const dispatch = useDispatch()
    const ID = useSelector(state => state.mainReducer.clientId)
    const [orderData, setOrderData] = useState({order: '', comment: ''})
    const handleInputValue = (e) => {
        setOrderData({...orderData, [e.target.name]: e.target.value})
    }

    return <>
        <button onClick={() => dispatch(CLIENT_ID(clientId))}
                type="button" className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#addOrderModal">
            Add order
        </button>
        <div className="modal fade" id="addOrderModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Enter order information</h5>
                        <button onClick={() => setOrderData({order: '', comment: ''})}
                                type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <input
                                    onChange={handleInputValue}
                                    name='order'
                                    value={orderData.order}
                                    className="form-control form-control-sm "
                                    type="text"
                                    placeholder="order"
                                />
                                <input
                                    onChange={handleInputValue}
                                    name='comment'
                                    value={orderData.comment}
                                    className="form-control form-control-sm mt-2"
                                    type="text"
                                    placeholder="comment"
                                />
                                <button
                                    onClick={() => {
                                        dispatch(addOrder({clientId: ID, orderData}))
                                        setOrderData({order: '', comment: ''})
                                    }}
                                    type="button"
                                    className="btn btn-info btn-sm mt-3 me-1"
                                    data-bs-dismiss="modal"
                                >
                                    Add order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default AddOrder