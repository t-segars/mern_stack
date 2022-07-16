// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});
