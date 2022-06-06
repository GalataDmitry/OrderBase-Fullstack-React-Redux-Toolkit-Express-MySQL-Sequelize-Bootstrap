import {useState} from "react"
import {useDispatch} from "react-redux"
import {changeClientInfo} from "../toolkit/reducers/mainReducer"

const ChangeClientInfo = ({id, client_name, phone, email, comment}) => {

    const dispatch = useDispatch()
    const [clientData, setClientData] = useState({id: '', client_name: '', phone: '', email: '', comment: ''})
    const handleInputValue = (e) => {
        setClientData({...clientData, [e.target.name]: e.target.value})
    }

    return <>
        <button onClick={() => setClientData({id, client_name, phone, email, comment})}
                type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                data-bs-target="#changeClientInfoModal">
            Change info
        </button>
        <div className="modal fade" id="changeClientInfoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Change client information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <input
                                    onChange={handleInputValue}
                                    name='client_name'
                                    value={clientData.client_name}
                                    className="form-control form-control-sm"
                                    type="text"
                                    placeholder="client name"
                                />
                                <input
                                    onChange={handleInputValue}
                                    name='phone'
                                    value={clientData.phone}
                                    className="form-control form-control-sm mt-2"
                                    type="text"
                                    placeholder="phone"
                                />
                                <input
                                    onChange={handleInputValue}
                                    name='email'
                                    value={clientData.email}
                                    className="form-control form-control-sm mt-2"
                                    type="text"
                                    placeholder="email"
                                />
                                <input
                                    onChange={handleInputValue}
                                    name='comment'
                                    value={clientData.comment}
                                    className="form-control form-control-sm mt-2"
                                    type="text"
                                    placeholder="comment"
                                />
                                <button
                                    onClick={() => dispatch(changeClientInfo(clientData))}
                                    className="btn btn-secondary btn-sm mt-3 me-1"
                                    type="button"
                                    data-bs-dismiss="modal"
                                >
                                    Make changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChangeClientInfo