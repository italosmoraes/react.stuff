const React = require('react');

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}

class EmployeeList extends React.Component {
    render() {
        var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee} />
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                    </tr>
                    {employees}
                </tbody>
            </table>
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }

    componentDidMount() {
        return function(dispatch, getState) {
            return fetch("localhost:8080/api/employees", {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            .then(response => response.json())
            .catch(error => console.log(error));
          }
    }

    render() {
        return (
            <div>
                <p> App started... </p>
                <EmployeeList employees={this.state.employees} />
            </div>
        )
    }
}

export default App;

