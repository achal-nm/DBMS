const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const path = require("path");

const publicDirectoryPath = path.join(__dirname, "public");
app.use(express.static(publicDirectoryPath));

// MySQL connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "N@v@neet2003007",
  database: "munch_maps",
});

// Attempt to connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err.message);
    return;
  }
  console.log("Connected to MySQL database");
});

// Express.js server setup
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/restaurants", (req, res) => {
  connection.query("SELECT * FROM Restaurant", (error, results) => {
    if (error) {
      console.error("Error fetching restaurants: ", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});



//  <script>
//       document.addEventListener("DOMContentLoaded", () => {
//         fetch("/restaurants")
//           .then((response) => response.json())
//           .then((restaurants) => {
//             const restaurantsDiv = document.getElementById("restaurants");
//             const table = document.createElement("table");
//             table.classList.add("restaurant-table");

//             const thead = document.createElement("thead");
//             thead.innerHTML = `
//             <tr>
//               <th>Name</th>
//               <th>Contact</th>
//               <th>Website</th>
//               <th>Branch</th>
//               <th>Category</th>
//               <th>Price Range</th>
//               <th>Service Type</th>
//               <th>Distance</th>
//               <th>Rating</th>
//             </tr>
//           `;
//             table.appendChild(thead);

//             const tbody = document.createElement("tbody");
//             restaurants.forEach((restaurant) => {
//               const tr = document.createElement("tr");
//               tr.innerHTML = `
//               <td>${restaurant.Name}</td>
//               <td>${restaurant.Contact_num}</td>
//               <td><a href="${restaurant.WebLink}" target="_blank">${restaurant.WebLink}</a></td>
//               <td>${restaurant.Branch}</td>
//               <td>${restaurant.CategoryID}</td>
//               <td>${restaurant.PriceID}</td>
//               <td>${restaurant.ServiceTypeID}</td>
//               <td>${restaurant.DistanceID}</td>
//               <td>${restaurant.Rating_id}</td>
//             `;
//               tbody.appendChild(tr);
//             });

//             table.appendChild(tbody);
//             restaurantsDiv.appendChild(table);
//           })
//           .catch((error) =>
//             console.error("Error fetching restaurants: ", error)
//           );
//       });
//     </script>