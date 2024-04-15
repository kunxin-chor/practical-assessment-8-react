import React, {useState, useContext} from 'react'
import { CustomerContext } from '../CustomerContext'
import { useNavigate } from 'react-router-dom';


export default function AddNewCustomerPage() {

    const navigate = useNavigate();
    const context = useContext(CustomerContext);
    const [formState, setFormState]= useState({
        'firstName': '',
        'lastName': '',
        'companyId': 0,
        'rating': 1,
        'employees': ''
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (<>
        <h1>Add New Customer</h1>
        <div>
            <label>First Name</label>
            <input type="text" name="firstName"
                    value={formState.firstName}
                    onChange={updateFormField}
                    className="form-control"
            />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" name="lastName"
                    value={formState.lastName}
                    onChange={updateFormField}
                    className="form-control"
            />
        </div>
        <div>
            <label>Company</label>
            <input type="text" name="companyId"
                    value={formState.companyId}
                    onChange={updateFormField}
                    className="form-control"
            />
        </div>
        <div>
            <label>Rating</label>
            <input type="text" name="rating"
                    value={formState.rating}
                    onChange={updateFormField}
                    className="form-control"
            />
        </div>
        <div>
            <label>Employees</label>
            <input type="text" name="employees"
                    value={formState.employees}
                    onChange={updateFormField}
                    className="form-control"
            />
        </div>
        <button className="btn btn-primary mt-3"
            onClick={()=>{
                context.addCustomer(
                    formState.firstName,
                    formState.lastName,
                    formState.companyId,
                    formState.rating,
                    formState.employees
                );
                navigate("/");
            }}
        >Create Customer</button>
    </>)
}