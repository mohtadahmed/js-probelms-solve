// Fifth Problem
// Find the Best Friend From An Array


function isBestFriend(myFriend, hisFriend) {
    const myName = myFriend.name;
    const myFriendName = myFriend.friend;
    const hisName = hisFriend.name;
    const hisFriendName = hisFriend.friend;

    if (typeof(myFriend) !== 'object' || typeof(hisFriend) !== 'object') {
        console.log('Provide an Object');
    } 

    else {
        if (myName === hisFriendName && myFriendName === hisName) {
            return true;
        } 
        else {
            return false;
        }
    }
}



// Should Remove before submitting
// const myFriend = {name: 'abul', friend: 'babul'}
// const hisFriend = {name: 'babul', friend: 'abul'}

// const myFriend = {name: "abul", friend: "kabul" };

// const hisFriend = { name: "kabul", friend: "sabul" }

// const whoIsBestFriend = isBestFriend(myFriend, hisFriend);
// console.log(whoIsBestFriend);