require('datejs');

// Merges any number of username arrays into one object, tagged with today's date
function combineUsers(...args) {
  const combinedObject = { users: [] };

  // args is an array of arrays — loop through each inner array
  for (const usernames of args) {
    // Spread both the existing users and the new batch into a fresh array
    combinedObject.users = [...combinedObject.users, ...usernames];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};