import React, { Component } from "react";
import { getUsersByRole } from "../../../helpers/api";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount = async () => {
    const res = await getUsersByRole();
    const users = res.data;
    this.setState({ users });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="page-header">Users</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Assign Roles</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <Link to={`/admin/users/assign-role/${user.user_id}`}>
                          <button className="btn btn-primary">
                            Assign Roles
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
