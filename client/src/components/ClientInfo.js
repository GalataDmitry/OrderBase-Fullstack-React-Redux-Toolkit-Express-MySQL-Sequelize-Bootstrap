import {useDispatch, useSelector} from "react-redux"
import {getClientInfo} from '../toolkit/reducers/mainReducer'
import moment from "moment";

const ClientInfo = ({clientId}) => {

    // console.log('client info render', clientId)

    const dispatch = useDispatch()
    const clientInfo = useSelector(state => state.mainReducer.clientInfo)

    return <>
        <button onClick={() => dispatch(getClientInfo(clientId))}
            className="btn btn-info btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#clientInfoModal">
            Client info
        </button>
        <div className="modal fade" id="clientInfoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Client information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {clientInfo?.map(info => {
                                return <>
                                    <div className='row d-flex justify-content-center'>
                                        PHONE : {info.phone}
                                    </div>
                                    <div className='row d-flex justify-content-center'>
                                        EMAIL : {info.email}
                                    </div>
                                    <div className='row d-flex justify-content-center'>
                                        COMMENT : {info.comment}
                                    </div>
                                    <div className='row d-flex justify-content-center'>
                                        CREATED : {moment(info.createdAt).format('LLLL')}
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ClientInfo