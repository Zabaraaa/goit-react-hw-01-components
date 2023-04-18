import user from './profile/user.json';
import { Profile } from './profile/profile.js';
import data from './statistics/data.json';
import { Statistics } from './statistics/statistics';
import friends from './friends/friends.json';
import { FriendList } from './friends/friends';
import transactions from './transactionHistory/transactions.json'
import { TransactionHistory } from './transactionHistory/transactions';

export const App = () => {
  return (
    <div
      style={{
        frontSize: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats" stats={data}
      />

      <FriendList
        friends={friends}
      />
      
      <TransactionHistory items={transactions}
      />;

    </div>
  );
};
