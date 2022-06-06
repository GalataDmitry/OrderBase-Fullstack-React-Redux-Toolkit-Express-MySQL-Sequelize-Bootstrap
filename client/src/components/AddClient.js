import {useState} from "react"
import {useDispatch} from "react-redux"
import {addClient, searchClient} from "../toolkit/reducers/mainReducer"

const AddClient = () => {

    const dispatch = useDispatch()
    const [clientData, setClientData] = useState({client_name: '', phone: '', email: '', comment: ''})
    const handleInputValue = (e) => {
        setClientData({...clientData, [e.target.name]: e.target.value})
    }

    return <>
        <div className="container-fluid w-50">
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-info btn-sm d-flex justify-content-start" data-bs-toggle="modal"
                            data-bs-target="#addClientModal">
                        Add client
                    </button>
                </div>
                <div className="col-9 d-flex justify-content-end">
                    <input
                        onChange={(e) => dispatch(searchClient(e.target.value))}
                        name='client_name'
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="search clients"
                    />
                </div>

            </div>
        </div>
        <div className="modal fade" id="addClientModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Enter customer information</h5>
                        <button onClick={() => setClientData({client_name: '', phone: '', email: '', comment: ''})}
                                type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    onClick={() => {
                                        dispatch(addClient(clientData))
                                        setClientData({client_name: '', phone: '', email: '', comment: ''})
                                    }}
                                    className="btn btn-info btn-sm mt-3 me-1"
                                    type="button"
                                    data-bs-dismiss="modal"
                                >
                                    Add client
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AddClient