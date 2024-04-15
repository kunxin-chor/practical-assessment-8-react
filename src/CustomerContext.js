import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

// create the customer context
export const CustomerContext = createContext();

const BASE_API_URL="https://3000-kunxinchor-sctp2mysql-n6kp14a21z3.ws-us110.gitpod.io";

// create a component that can inject the context data to its children
export default function CustomerContextData(props) {

    // the useEffect hooks allows us to a call a function
    // after the component renders for the first time
    useEffect(()=>{
            
        // as the effect function cannot be async we need to
        // create a proxy function inside the effect function that is async
        const fetchData = async () => {
            const response = await axios.get(BASE_API_URL + "/api/customers");
            console.log(response.data);
            setCustomers(response.data.customers);
        }

        fetchData();


    }, []); // if the dependency array is empty, it means calls
    // the effect function once and only once after the first render

    const [customers, setCustomers] = useState([
        
    ]);

    const dataOperations = {
        getCustomers: () => {
            return customers
        },
        addCustomer: async (firstName, lastName, companyId, rating, employees) => {

            const response = await axios.post(BASE_API_URL + "/api/customers", {
                first_name : firstName,
                last_name : lastName,
                company_id: companyId,
                rating: rating,
                employees: employees
            });


            const newCustomer = {
                customer_id: response.data.new_customer_id,
                first_name: firstName,
                last_name : lastName,
                company_id: companyId,
                rating: rating,
                employees: employees
            }
            const modified = [...customers, newCustomer];
            setCustomers(modified);

        }
    }

    // JSX
    return (
        // The value of the CustomerContext is the `context` object
        // 'Provider' means any child component will have access to the value
        <CustomerContext.Provider value={dataOperations}>
            {props.children}
        </CustomerContext.Provider>
    )
}