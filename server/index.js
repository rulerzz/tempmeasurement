//express server is created through which we can connect backend and frontend
//cors and axios is used to run modules in the project
//mysql is used to call the database and take the query from database(if any)
//require is used to connect to database
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')
const connect = require('./connect')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokensecret = "secret";
const saltRounds = 10;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = 3001 //server port which renders data from database
/*
app.get("/",async function (req,res) { 
    try { 
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        
    } catch(err) {

        
        res.status(500).json({error: err.message})
    }
})*/


app.get("/v1data", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db)
        const [monthlyData,] = await connection.execute('select * from MonthlyData') // await waits for the process to be done and then shows the output
        const [annualData,] = await connection.execute('select * from annualData')
        const [AnnualNorth,] = await connection.execute('select * from annual_north')
        const [MonthNorth,] = await connection.execute('select * from month_north')
        const [AnnualSouth,] = await connection.execute('select * from annual_south')
        const [MonthSouth,] = await connection.execute('select * from month_south')
        const [TwoThousand,] = await connection.execute('select * from YearsTemperature')
        const [co2Month,] = await connection.execute('select * from co2Month')
        const [co2Annual,] = await connection.execute('select * from co2Annual')
        const [iceCoreDe,] = await connection.execute('select * from iceCorede')
        const [iceCoreDe2,] = await connection.execute('select * from icecorede2')
        const [iceCoreDss,] = await connection.execute('select * from iceCoreDss')
        const [vostokIce,] = await connection.execute('select * from vostokIceCore')
        const [IceCoreYears,] = await connection.execute('select * from iceCore800K')
        const [TwoMillionTemperature,] = await connection.execute('select * from 2mYearTemperature')
        const [TwoMillionCo2,] = await connection.execute('select * from 2mYearCo2')
        const [V10Co2,] = await connection.execute('select * from humanEvolution7Co2')
        const [V4Co2,] = await connection.execute('select * from humanEvolution4Co2')
        //const [Doughnut,] = await connection.execute('select * from doughnutChart')
        //const [Doughnut2,] = await connection.execute('select * from doughnutChart2')

        if (!monthlyData) monthlyData = []
        if (!annualData) annualData = []
        if (!AnnualNorth) AnnualNorth = []
        if (!MonthNorth) MonthNorth = []
        if (!AnnualSouth) AnnualSouth = []
        if (!MonthSouth) MonthSouth = []
        if (!TwoThousand) TwoThousand = []
        if (!co2Month) co2Month = []
        if (!co2Annual) co2Annual = []
        if (!iceCoreDe) iceCoreDe = []
        if (!iceCoreDe2) iceCoreDe2 = []
        if (!iceCoreDss) iceCoreDss = []
        if (!vostokIce) vostokIce = []
        if (!IceCoreYears) IceCoreYears = []
        if (!TwoMillionTemperature) TwoMillionTemperature = []
        if (!TwoMillionCo2) TwoMillionCo2 = []
        if (!V10Co2) V10Co2 = []
        if (!V4Co2) V4Co2 = []

        /*const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        **/
        res.json({
            AnnualNorth: AnnualNorth,
            AnnualSouth: AnnualSouth,
            MonthNorth: MonthNorth,
            MonthSouth: MonthSouth,
            monthlyData: monthlyData,
            TwoThousand: TwoThousand,
            annualData: annualData,
            co2Month: co2Month,
            co2Annual: co2Annual,
            iceCoreDe: iceCoreDe,
            iceCoreDe2: iceCoreDe2,
            iceCoreDss: iceCoreDss,
            vostokIce: vostokIce,
            IceCoreYears: IceCoreYears,
            TwoMillionTemperature: TwoMillionTemperature,
            TwoMillionCo2: TwoMillionCo2,
            V10Co2: V10Co2,
            V4Co2: V4Co2
            //Doughnut: Doughnut,
            //Doughnut2: Doughnut2
        });

    } catch (err) {


        res.status(500).json({ error: err.message })
    }
})

app.post("/signUp", async function (req, res) {
    try {
        if (!(req.body.email && req.body.password && req.body.first_name && req.body.last_name)) {
            res.status(400).send("Please enter all required fields");
        }
        const connection = await mysql.createConnection(connect.db)
        const [check, fields] = await connection.execute('select * from user where email="' + req.body.email + '"')
        if (check.length === 0) {
            // no user create
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                // Store hash in your password DB.
                connection.execute('insert into user (firstname, lastname, email, password) values ("' + req.body.first_name + '", "' + req.body.last_name + '", "' + req.body.email + '", "' + hash + '")').then((data) => {
                    res.json({ message: "User created successfully" });
                })
            });
            
        }
        else
            res.status(500).json({ message: "User with this email already exists" });
    } catch (err) {
        res.status(500).json({ error: "Could not register user" })
    }
})
app.post("/generatemapping", async function (req, res) {
    try {
        const connection = await mysql.createConnection(connect.db)
        connection.execute(`insert into url_mapping (visualisations, user, layout, description) values (?, "` + req.body.user + `", "` + req.body.layout + `", "` + req.body.description + `")`, [req.body.resource]).then((data) => {
            res.json({ message: "Created resource page successfully" });
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Could not create resource page" })
    }
})
app.get("/mappings", async function (req, res) {
    try {
        const connection = await mysql.createConnection(connect.db)
        connection.execute(`select a.id, a.visualisations, a.layout, a.description, CONCAT(u.firstname, " ", u.lastname) as fullname from url_mapping a left join user u on a.user = u.id where a.user ="` + req.query.user + `"`).then((data) => {
            res.json({ data : data[0] });
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Could not create resource page" })
    }
})
app.get("/getmapping", async function (req, res) {
    try {
        const connection = await mysql.createConnection(connect.db)
        connection.execute(`select a.id, a.visualisations, a.layout, a.description, CONCAT(u.firstname, " ", u.lastname) as fullname from url_mapping a left join user u on a.user = u.id where a.id ="` + req.query.id + `"`).then((data) => {
            res.json({ data : data[0] });
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Could not create resource page" })
    }
})
app.get("/deletemapping", async function (req, res) {
    try {
        const connection = await mysql.createConnection(connect.db)
        connection.execute(`delete from url_mapping where id ="` + req.query.id + `"`).then((data) => {
            res.json({ message: "success" });
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Could not create resource page" })
    }
})
app.get("/deleteuser", async function (req, res) {
    try {
        const connection = await mysql.createConnection(connect.db)
        connection.execute(`delete from user where id ="` + req.query.id + `"`).then((data) => {
            res.json({ message: "success" });
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Could not create resource page" })
    }
})
app.post("/login", async function (req, res) {
    try {
        const connection = await mysql.createConnection(connect.db)
        const [user,] = await connection.execute('select * from user where email="' + req.body.email + '"')
        if (user.length === 0) {
            res.status(500).json({
                message: "User does not exist!"
            });
        }
        else{
            const [urlmappings,] = await connection.execute('select a.visualisations, a.layout, a.id as visualisationid, CONCAT(u.firstname, " ", u.lastname) as fullname, u.id as userid from url_mapping a left join user u on a.user = u.id where a.user="' + user[0].id + '" ')
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                if(result){
                        // Create token
                    const token = jwt.sign(
                        { id: user[0].id, email : req.body.email },
                        tokensecret,
                        {
                        expiresIn: "2h",
                        }
                    );
                    
                    res.json({
                        token: token,
                        firstname: user[0].firstname,
                        lastname: user[0].lastname,
                        email: user[0].email,
                        userid: user[0].id,
                        urlmappings: urlmappings,
                        message: "success"
                    });
                }
                else{
                    res.status(500).json({
                        message: "User credentials do not match!"
                    });
                }
            });

        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
app.get("/v2data", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db)
        const [Doughnut,] = await connection.execute('select * from doughnutChart')
        const [Doughnut2,] = await connection.execute('select * from doughnutChart2')
        const [Doughnut3,] = await connection.execute('select * from doughnutChart3')
        if (!Doughnut) Doughnut=[]  
        if (!Doughnut2) Doughnut2=[] 
        if (!Doughnut3) Doughnut3=[] 
        res.json({ 
            Doughnut: Doughnut,
            Doughnut2: Doughnut2,
            Doughnut3: Doughnut3
        });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


/*app.get("/v2data",async function (req,res) {
    try { 
        const connection = await mysql.createConnection(config.db)
        const [signUp,] = await connection.execute('select * from react-login') // await waits for the process to be done and then shows the output
       
        if (!signUp) signUp=[] 
        

        /*const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        **/
// res.json({
// signUp: signUp
//}); 


//    } catch(err) {


//      res.status(500).json({error: err.message})
//  }
//})

app.listen(port)
console.log('Express server started on port %s', port);
async function test(){
const connection = await mysql.createConnection(config.db)
const [monthlyData,] = await connection.execute('select * from MonthlyData') 
console.log(monthlyData)
}
test()