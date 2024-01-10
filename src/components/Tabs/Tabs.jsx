import classNames from 'classnames';

export const UserTabs = ({ users, selectedUser, onUserSelected }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
    >
      All
    </a>
    {users.map(user => (
      <a
        key={user.id}
        data-cy="FilterUser"
        href={`#${user.id}`}
        className={classNames({ 'is-active': user.id === selectedUser.id })}
        onClick={() => {
          if (selectedUser.id !== user.id) {
            onUserSelected(user);
          }
        }}
      >
        {user.name}
      </a>
    ))}

  </p>
);
