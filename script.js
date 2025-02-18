
var database = [
    {
    username: 'Bob',
    password: 'Secure',
    },
    {
        username: 'Joel',
        password: 'Yankees',
        },
        {
            username: 'Marge',
            password: '777',
            },

];
var newsfeed = [ 
     {
        username: 'Bob',
        timeline: 'So tired from yestarday!'
     },
     {  username: 'Susan',
        timeline: 'JavaScript rules.',
     },
     {  username: 'Mike',
        timeline: 'Look at my Avocado toast receipe that I found!'
     }

];

function isUserValid(username, password){
    for (var i=0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
                return true;
            }
 }
 return false;
}

function signIn(username, password){
    if (isUserValid(username, password)) {
            console.log(newsfeed);
        } else {
            alert('Sorry, wrong username/password');
        }
}
var userNamePrompt = prompt('Username');
var passwordPrompt = prompt('Password');

signIn(userNamePrompt, passwordPrompt)


