document.addEventListener('DOMContentLoaded', () => {
    fetch('/restaurants')
        .then(response => response.json())
        .then(restaurants => {
            const restaurantsDiv = document.getElementById('restaurants');
            restaurants.forEach(restaurant => {
                const restaurantDiv = document.createElement('div');
                restaurantDiv.classList.add('restaurant');
                restaurantDiv.innerHTML = `
                    <h2>${restaurant.Name}</h2>
                    <p>Contact: ${restaurant.Contact_num}</p>
                    <p>Website: <a href="${restaurant.WebLink}" target="_blank">${restaurant.WebLink}</a></p>
                    <p>Branch: ${restaurant.Branch}</p>
                    <p>Category: ${restaurant.CategoryID}</p>
                    <p>Price Range: ${restaurant.PriceID}</p>
                    <p>Service Type: ${restaurant.ServiceTypeID}</p>
                    <p>Distance: ${restaurant.DistanceID}</p>
                    <p>Rating: ${restaurant.Rating_id}</p>
                `;
                restaurantsDiv.appendChild(restaurantDiv);
            });
        })
        .catch(error => console.error('Error fetching restaurants: ', error));
});
