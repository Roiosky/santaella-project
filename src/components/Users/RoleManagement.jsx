import './Users.css';

const RoleManagement = () => {
  return (
    <div className="role-management-container">
      <h2>Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User 1</td>
            <td>Admin</td>
            <td><button>Change Role</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
