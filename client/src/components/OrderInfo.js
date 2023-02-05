import {useDispatch, useSelector} from "react-redux"
import moment from "moment"
import {getOrderInfo} from "../toolkit/reducers/mainReducer"

const OrderInfo = ({clientId}) => {

    const dispatch = useDispatch()
    const orderInfo = useSelector(state => state.mainReducer.orderInfo)

    return <>
        <button onClick={() => dispatch(getOrderInfo(clientId))}
                type="button" className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#orderInfoModal">
            Order info
        </button>
        <div className="modal fade" id="orderInfoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Order information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {orderInfo?.map(order => {
                            return <>
                                <div className='row d-flex justify-content-center'>
                                    ORDER: {order.order}
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    CREATED: {moment(order.createdAt).format('LLLL')}
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    COMMENT: {order.comment}
                                </div>
                                <hr/>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default OrderInfo