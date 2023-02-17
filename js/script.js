const url = "https://valorant-api.com/v1/weapons";
const main = document.querySelector(".container");




const getData = async () => {
    try {
        const res = await fetch(url);
        const results = await res.json();
        console.log(results);
        
        results.data.forEach((obj) => {
            const div = document.createElement("div");
            div.classList.add("card");
    
    
            const cardImg = document.createElement("img");
            cardImg.src = obj.displayIcon;
            const cardTitle = document.createElement("h3");
            cardTitle.innerHTML = obj.displayName
            const cardCost = document.createElement("h5");
            cardCost.innerHTML = `Cost: ${obj.shopData.cost}` 
            const stats = document.createElement("div");
            stats.innerHTML = `<h5>Equip-time: ${obj.weaponStats.equipTimeSeconds}s</h5>
            <h5>Fire-Rate: ${obj.weaponStats.fireRate} rps</h5>
            <h5>First Bullet Accuracy: ${obj.weaponStats.firstBulletAccuracy}</p>
            <h5>Magazine Size: ${obj.weaponStats.magazineSize}</h5>
            <h5>Reload-time: ${obj.weaponStats.reloadTimeSeconds}s</h5>`
            const detailsLink = document.createElement("a");
            detailsLink.href = `./details.html?uuid=${obj.uuid}`;
            detailsLink.innerHTML = "Details"
            
            
            
            div.appendChild(cardTitle);
            div.appendChild(cardImg);
            div.appendChild(cardCost);
            div.appendChild(stats);
            div.appendChild(detailsLink);
            main.appendChild(div);
    
    
        })
    } catch (error) {
        console.log(error)
        const errorMsg = document.createElement("h2");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience.";
        main.appendChild(errorMsg);
        

    }
   
}
getData();