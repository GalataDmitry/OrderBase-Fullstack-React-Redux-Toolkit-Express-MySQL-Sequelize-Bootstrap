import {useDispatch, useSelector} from "react-redux"
import moment from "moment"
import {useParams} from 'react-router-dom'
import {useEffect} from "react"
import {Link} from "react-router-dom"
import {getAllClientInfo, isDone} from "../toolkit/reducers/mainReducer"
import ChangeClientInfo from "./ChangeClientInfo"
import ChangeOrderInfo from "./ChangeOrderInfo"
import DestroyOrder from "./DestroyOrder"
import '../styles/AllClientInfo.css'

const AllClientInfo = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const clientId = +params.clientId
    const allClientInfo = useSelector(state => state.mainReducer.allClientInfo)
    useEffect(() => {
        dispatch(getAllClientInfo(params.clientId))
    }, [])

    const isDoneOrder = (isDone) => {
        if (isDone) return 'text-decoration-line-through text-info'
        else return ''
    }

    return <div className="App">
        <header className="App-header">
            <div className='container-fluid w-75'>
                <div className="row">
                    <div className="col">
                        <h3 className='d-flex justify-content-start'>Client information</h3>
                    </div>
                    <div className="col">
                        <Link className='d-flex justify-content-end text-decoration-none' to='/'>
                            <button type="button" className="btn btn-secondary btn-sm ">
                                Back
                            </button>
                        </Link>
                    </div>
                    <hr/>
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Created</th>
                        <th scope="col">Change</th>
                    </tr>
                    </thead>
                    {allClientInfo?.map(info => {
                        return <>
                            <tbody>
                            <tr>
                                <th scope="row">{info.id}</th>
                                <td>{info.client_name}</td>
                                <td>{info.phone}</td>
                                <td>{info.email}</td>
                                <td>{info.comment}</td>
                                <td>{moment(info.createdAt).format('LLLL')}</td>
                                <td><ChangeClientInfo
                                    id={info.id}
                                    client_name={info.client_name}
                                    phone={info.phone}
                                    email={info.email}
                                    comment={info.comment}
                                /></td>
                            </tr>
                            </tbody>
                        </>
                    })}
                </table>
                <div className="row">
                    <h3 className='d-flex justify-content-start mt-5'>Order information</h3>
                    <hr/>
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Order</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Created</th>
                        <th scope="col">Change</th>
                        <th scope="col">Is done</th>
                        <th scope="col">Remove</th>
                    </tr>
                    </thead>
                    {allClientInfo?.map(el => el?.Orders?.map(el => {
                        return <>
                            <tbody>
                            <tr>
                                <th scope="row">{el.id}</th>
                                <td className={isDoneOrder(el.isDone)}>{el.order}</td>
                                <td>{el.comment}</td>
                                <td>{moment(el.createdAt).format('LLLL')}</td>

                                <td><ChangeOrderInfo
                                    id={el.id}
                                    order={el.order}
                                    comment={el.comment}
                                /></td>
                                <td>
                                    <input onClick={() => dispatch(isDone({clientId, isDone: el.isDone, id: el.id}))}
                                           className="form-check-input" type="checkbox" checked={el.isDone}/>
                                </td>
                                <td><DestroyOrder
                                    id={el.id}
                                /></td>
                            </tr>
                            </tbody>
                        </>
                    }))}
                </table>
            </div>
        </header>
    </div>
}

export default AllClientInfo