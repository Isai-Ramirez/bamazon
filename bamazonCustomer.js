var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazondb"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    queryAllproducts()
});

function queryAllproducts() {
    connection.query("SELECT * FROM songs", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }

        start();
    });
}

// function which prompts the user for what action they should take
function start() {

    connection.query("SELECT product_name FROM products", function (err, results) {
        if (err) throw err;
        // Log all results of the SELECT statement
        inquirer
            .prompt([
                {
                    name: "whichItem",
                    type: "list",
                    message: "What item would you like to buy?",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name);
                        }
                        return choiceArray;
                    },
                },
                {
                    name: "purchase",
                    type: "input",
                    message: "How many would you like to buy?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].item_name === answer.choice) {
                        chosenItem = results[i];

                    }
                }
                if (chosenItem.stock_quantaty > parseInt(answer.purchase)) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        {
                            stock_quantaty: stock_quantaty - answer.purchase
                        },
                        {
                            id: chosenItem.id
                        },
                        function (error) {
                            if (error) throw err;
                            console.log("Bid placed successfully!");
                            purchase();
                        }
                    )
                } else {
                    console.log("sorry we don't have enough of this item");
                    start();
                }
                // couldn't get this function to work 
                function purchase() {
                    connection.query(
                        "SELECT item_id, price*answer.purchase FROM products",
                        console.log(query.sql)
                    )
                }
            });
        connection.end();
    });
    // unexpected token appears here and if fixed it says no function nor argument is passed inbetween
}



