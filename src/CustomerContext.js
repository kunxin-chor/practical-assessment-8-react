import React, {useState, createContext} from 'react';

// create the customer context
export const CustomerContext = createContext();

// create a component that can inject the context data to its children
export default function CustomerContextData(props) {
    const [customers, setCustomers] = useState([
        {
            'customer_id': 1,
            'first_name': 'Linus',
            'last_name': 'Tan',
            'company_id': 1,
            'employees': [1]
        },
        {
            'customer_id': 2,
            'first_name': 'Alex',
            'last_name': 'Howe',
            'company_id': 1,
            'employees': [1]
        },
        {
            'customer_id': 2,
            'first_name': 'Alex',
            'last_name': 'Howe',
            'company_id': 1,
            'employees': [1]
        }
    ]);

    const dataOperations = {
        getCustomers: () => {
            return customers
        },
        addCustomer: (firstName, lastName, companyId, rating, employees) => {
            const newCustomer = {
                customer_id: Math.floor(Math.random() * 10000 + 1),
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