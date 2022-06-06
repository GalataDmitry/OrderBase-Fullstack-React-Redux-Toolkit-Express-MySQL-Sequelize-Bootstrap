import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {changeOrderInfo} from "../toolkit/reducers/mainReducer"
import {ORDER_DATA} from "../toolkit/actions/actions"

const ChangeOrderInfo = ({id, order, comment}) => {

    const orderData = useSelector(state => state.mainReducer.orderData)
    const dispatch = useDispatch()
    const params = useParams()
    const clientId = +params.clientId

    return <>
        <button onClick={() => dispatch(ORDER_DATA({clientId, id, order, comment}))}
                type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                data-bs-target="#changeOrderInfoModal">
            Change order
        </button>
        <div className="modal fade" id="changeOrderInfoModal" tabIndex="-1" aria-labelledby="changeOrderInfoModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="changeOrderInfoModalLabel">Change order information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <input
                                    onChange={(e) => dispatch(ORDER_DATA({...orderData, order: e.target.value}))}
                                    value={orderData.order} name='order' className="form-control form-control-sm" type="text" placeholder="order"/>
                                <input
                                    onChange={(e) => dispatch(ORDER_DATA({...orderData, comment: e.target.value}))}
                                    value={orderData.comment} name='comment' className="form-control form-control-sm mt-2" type="text" placeholder="comment"/>
                                <button
                                    onClick={() => dispatch(changeOrderInfo(orderData))}
                                    type="button" className="btn btn-secondary btn-sm mt-3 me-1" data-bs-dismiss="modal">
                                    Make Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChangeOrderInfo