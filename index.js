const express  = require("express")
const users = require("./MOCK_DATA.json")

const app = express()

const port  = 3000
const fs = require("fs")

app.use(express.urlencoded({extended:false}));

//routes

app.get("/api/users",(req,res)=>{

    return res.json (users)
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});


app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id) ;
    const user = users.find((user)=> user.id === id)


    return res.json(user);


})

app.get("/api/users/:first_name", (req, res) => {
    const first_name = req.params.first_name;
    
    const newUser = users.find(user => user.first_name === first_name);
    
    return res.json(newUser);
});




app.use(express.json()); // Add body parsing middleware

app.post("/api/users", (req, res) => {
    try {
        console.log("Received POST request to add a new user");

        const body = req.body;
        const newUser = { ...body, id: users.length + 1 };
        users.push(newUser);

        // Writing the updated users array to a JSON file
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).json({ error: "Error writing to file" });
            }

            console.log("User added successfully");
            res.json({ status: 'success', user: newUser });
        });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Error adding user" });
    }
});
app.patch("api/users/id",(req,res)=>{
    return res.json({status:"pending"})

})

app.delete("/api/users/:id",(req,res)=>{

    return res.join({status:"pending"})
})


app.listen(port,()=>{
    console.log(`server is running at port http://localhost:${port}`)
})